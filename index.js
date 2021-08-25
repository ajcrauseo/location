const botonPedirPermisos = document.getElementById('permisos');
const lat = document.getElementById('nlat');
const lon = document.getElementById('nlon');

botonPedirPermisos.addEventListener('click', () => {
  //Si el navegador soporta geolocalizacion
  if (!!navigator.geolocation) {
    //Pedimos los datos de geolocalizacion al navegador
    navigator.geolocation.getCurrentPosition(
      //Si el navegador entrega los datos de geolocalizacion los imprimimos
      (position) => {
        window.alert('Ubicación permitida');
        lat.innerHTML = `<b>Tu latitud es:</b> ${position.coords.latitude}`;
        lon.innerHTML = `<b>Tu longitud es:</b> ${position.coords.longitude}`;
      },
      //Si no los entrega manda un alerta de error
      () => {
        window.alert('Ubicación bloqueada');
      },
    );
  }
});
