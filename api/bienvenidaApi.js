function fetchImages(imageIds) {
  const fetchPromises = imageIds.map((imageId) => {
    return fetch(
      `https://cdn.contentful.com/spaces/ao5y1h28msc3/environments/master/assets/${imageId}?access_token=0O28QvUTzrl7bS2B5quxYL9iRlES0GTnL9p0NRd49N8`
    )
      .then((res) => res.json())
      .then((asset) => asset.fields.file.url); // Devuelve la URL de la imagen
  });

  return Promise.all(fetchPromises); // Espera a que todas las imágenes se resuelvan
}

export function getBienvenidaYpresentacion() {
  return fetch(
    "https://cdn.contentful.com/spaces/ao5y1h28msc3/environments/master/entries?access_token=0O28QvUTzrl7bS2B5quxYL9iRlES0GTnL9p0NRd49N8&content_type=bienvenida"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        return {
          titulo: item.fields.titulo,
          descripcion: item.fields.descripcion,
          logo: item.fields.logo.sys.id,
          mifoto: item.fields.miFoto.sys.id,
        };
      });

      //return fieldsCollection;

      const logoId = fieldsCollection.map((field) => field.logo); // Extrae el ID del logo
      const mifotoId = fieldsCollection.map((field) => field.mifoto); // Extrae el ID de mi foto
      //console.log("LOGO ID", logoId);
      //console.log("FOTO ID", mifotoId);

      return Promise.all([
        fetchImages(logoId), // devuelve promesa con array de URLs de logo
        fetchImages(mifotoId), // devuelve promesa con array de URLs de foto
      ]).then(([logoUrl, mifotoUrl]) => {
        return fieldsCollection.map((field, index) => ({
          titulo: field.titulo,
          descripcion: field.descripcion,
          logo: logoUrl[index],
          mifoto: mifotoUrl[index],
        }));
      });
    });
}
