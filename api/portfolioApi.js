function fetchImages(imageIds) {
  const fetchPromises = imageIds.map((imageId) => {
    return fetch(
      `https://cdn.contentful.com/spaces/ao5y1h28msc3/environments/master/assets/${imageId}?access_token=hxCZJDKTxw4TPqnYX5KhDUFufW8FlVccSW5PrPUqilc`
    )
      .then((res) => res.json())
      .then((asset) => asset.fields.file.url); // Devuelve la URL de la imagen
  });

  return Promise.all(fetchPromises); // Espera a que todas las imágenes se resuelvan
}

export function getPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/ao5y1h28msc3/environments/master/entries?access_token=hxCZJDKTxw4TPqnYX5KhDUFufW8FlVccSW5PrPUqilc&content_type=work"
  )
    .then((res) => {
      //return console.log(res.json());
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        return {
          titulo: item.fields.titulo,
          imagen: item.fields.imagen.sys.id,
          descripcion: item.fields.descripcion,
          url: item.fields.url,
        };
      });

      //return fieldsCollection;

      const imageIds = fieldsCollection.map((field) => field.imagen); // Extrae los IDs de las imágenes
      //console.log(imageIds);

      return fetchImages(imageIds).then((imageUrls) => {
        // Combina los datos de las entradas con las URLs de las imágenes
        return fieldsCollection.map((field, index) => ({
          titulo: field.titulo,
          imagen: imageUrls[index], // Asigna la URL de la imagen correspondiente
          descripcion: field.descripcion,
          url: field.url,
        }));
      });
    });
}
