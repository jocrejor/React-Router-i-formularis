//// 
///// CRUD acces al json-server
/////
//domini temporal
export let url = 'https://api.serverred.es/';
// Local
//let url = 'http://localhost:5000/'

////////////////////// Hi ha usuari registrat /////////////////////
export function thereIsUser(urlLocation) {
   const currentUser= localStorage.getItem("currentUser");
   if (currentUser === null) {
    window.location.href = urlLocation;
   }
}


////////////////////// Alta Element /////////////////////

export async function postData(url,endPoint, data = {}) {
  try {
    const response = await fetch(url + endPoint, {
      method: 'POST',  // Método HTTP
      headers: {
        'Content-Type': 'application/json'  // Tipo de contenido
      },
      body: JSON.stringify(data)  // Datos JSON a enviar
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud POST');
    }
    return  await response.json();

  } catch (error) {
    console.error('Error:', error);  // Manejo de errores
  }
}

////////////////////// Otindre tota la taula /////////////////////

export async function getData(url, endPoint) {
  try {
    const response = await fetch(url + endPoint );  // Reemplaza 'data.json' con la ruta de tu archivo

    if (!response.ok) {
      throw new Error('Error al obtener el archivo JSON');
    }

    return  await response.json();

  } catch (error) {
    console.error('Error:', error);  // Manejo de errores
  }
}

////////////////////// Otindre element d'un ID de la taula /////////////////////

export async function getIdData(url, endPoint, id) {
  try {
    const response = await fetch(url + endPoint + '/' + id);  // Reemplaza 'data.json' con la ruta de tu archivo

    if (!response.ok) {
      throw new Error('Error al obtener el archivo JSON');
    }

    return  await response.json();

  } catch (error) {
    console.error('Error:', error);  // Manejo de errores
  }
}


////////////////////// Eliminar Element /////////////////////
export async function deleteData(url, endPoint, id) {
  try {
    const response = await fetch(url + endPoint + '/' + id, {
      method: 'DELETE'  // Configuramos el método HTTP como DELETE
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud DELETE');
    }

    const result = await response.json();  // Si el servidor devuelve JSON en la respuesta
    console.log('Recurso eliminado:', result);

  } catch (error) {
    console.error('Error:', error);  // Manejo de errores
  }
}

////////////////////// Actualitzar Element /////////////////////

export async function updateId(url, endPoint, id,data) {
  try {
    const response = await fetch(url + endPoint + '/'+ id, {
      method: 'PATCH',  // Configuramos el método HTTP como PATCH
      headers: {
        'Content-Type': 'application/json'  // Tipo de contenido
      },
      body: JSON.stringify(data)  // Datos JSON a enviar
    });  

    if (!response.ok) {
      throw new Error('Error al actualizar el archivo JSON');
    }

    return  await response.json();

  } catch (error) {
    console.error('Error:', error);  // Manejo de errores
  }
}


////////////////////// Tancar Sessió /////////////////////

export function tancarSessio (urlLocation){
  localStorage.removeItem("currentUser");
  document.location.href=urlLocation;
}
