import {id} from './cardImg.js'

let evento = async () => {
  let rawData = await fetch("/api/eventos.php",{
    method:"post",
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
      id:id.id_evento
    })
    });
  let jsonData = await rawData.json();

  let contenedorGeneral = document.querySelector('#comments')
  let datosCabecera = `
    <div class="evento">
      <p id="nombre-evento">${jsonData[0].nombre}</p>
      
      <i class="fa-solid fa-heart"></i>
      <p id="likes">${jsonData[0].likes}</p>
      <i id="regresarIcon" class="fa-solid fa-chevron-left"></i>
      <a id="regresar" href="./index.html">Regresar</a>       
    </div>
  `
  let textoComentarios = ''

  let rawComentarios = await fetch("/api/comentarios.php",{
    method:"post",
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        id:id.id_evento
    })
    });
  let jsonComentarios = await rawComentarios.json();

  for(let comentario of jsonComentarios){
    textoComentarios+= `
    <div class="media">
    <div class="media-body">
        <h4 class="media-heading">John Doe</h4>
        <p>${comentario.comentario}</p>
    </div>
    </div>
    `
    }

  let seccionComentarios = `
  <div class="container">
                <div class="detalles">
                    <div class="card" style="width: 25rem;">
                        <div class="card-body">
                          <h4 class="card-title">Detalles</h4>
                          <img src="../images/${jsonData[0].url_imagen}" class="card-img-top">
                          
                          <p class="card-text">${jsonData[0].descripcion}</p>
                          <div class="info">
                            <span>Lugar:</span><p class="lugar">${jsonData[0].lugar}</p>
                            <span>Fecha:</span><p class="fecha">${jsonData[0].fecha}</p>
                            <span>Hora:</span><p class="hora">${jsonData[0].hora}</p>
                          </div>
                        </div>
                    </div>
                </div>   
                <div class="row">
                    <div class="col-sm-8">   
                        <form enctype="multipart/form-data" id="form_post">
                            <h3 class="pull-left">Nuevo comentario</h3>
                            <button type="submit" class="btn btn-info pull-right">Enviar</button>
                            <fieldset>
                                <div class="row">
                                    <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                        <textarea class="form-control" id="comentario" placeholder="Escribe tu comentario..." required=""></textarea>
                                    </div>
                                </div>    
                            </fieldset>
                        </form>
                        
                        <h3>Comentarios</h3>
                        ${textoComentarios}
                    
                    </div>
                </div>
            </div>
  `
  let contenidoTotal = datosCabecera + seccionComentarios

  contenedorGeneral.innerHTML = contenidoTotal

  
}


window.addEventListener("load",async()=>{
  await evento();
  const form_post = document.getElementById('form_post');
    const comentario = document.querySelector('#comentario');
    console.log(form_post);
     form_post.addEventListener('submit', function(e){
      e.preventDefault();
       let datos = new FormData();
       console.log(FormData);
       console.log(comentario);
       datos.append("comentario",comentario.value);
       datos.append("id_evento",id.id_evento);
  
       fetch("../api/newComment.php", {
         method: "post",
         body: datos
       }).then(res => {
           console.log(comentario);
       }).catch(console.error);
     });
})