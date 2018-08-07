const tiempoMuerto = () =>{
    window.setTimeout("redirigir()",5000)
  }
  
  window.onload = tiempoMuerto;
  
  const redirigir = () =>{
    window.location = "views/start.html"
    return;
  }