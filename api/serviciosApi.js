function fetchImages(imageIds) {
  const fetchPromises = imageIds.map((imageId) => {
    return fetch(
      `https://cdn.contentful.com/spaces/ao5y1h28msc3/environments/master/assets/${imageId}?access_token=mIHdYUoRlCrVmRzDNe4KZzPa-3HG_XROIKzZeL2SWaM`
    )
      .then((res) => res.json())
      .then((asset) => asset.fields.file.url); // Devuelve la URL de la imagen
  });

  return Promise.all(fetchPromises); // Espera a que todas las imágenes se resuelvan
}

export function getServicios() {
  return fetch(
    "https://cdn.contentful.com/spaces/ao5y1h28msc3/environments/master/entries?access_token=mIHdYUoRlCrVmRzDNe4KZzPa-3HG_XROIKzZeL2SWaM&content_type=servicios"
  )
    .then((res) => {
      //return console.log(res.json());
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        return {
          titulo: item.fields.titulo,
          descripcion: item.fields.descripcion,
          icono: item.fields.icono.sys.id,
        };
      });

      //return fieldsCollection;

      const imageIds = fieldsCollection.map((field) => field.icono); // Extrae los IDs de las imágenes
      //console.log(imageIds);

      return fetchImages(imageIds).then((imageUrls) => {
        // Combina los datos de las entradas con las URLs de las imágenes
        return fieldsCollection.map((field, index) => ({
          titulo: field.titulo,
          descripcion: field.descripcion,
          icono: imageUrls[index], // Asigna la URL de la imagen correspondiente
        }));
      });
    });
}
