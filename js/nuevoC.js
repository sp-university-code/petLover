import {id} from './cardImg.js'
window.addEventListener("load",()=>{

    const form_post = document.getElementById('form_post');
    const comentario = document.querySelector('#comentario');
    const id_evento = document.querySelector('#id_evento');
  
     form_post.addEventListener('submit', function(e){
       let datos = new FormData();
       datos.append("comentario",comentario.value);
       datos.append("id_evento",id_evento.value);
  
       fetch("../api/newComment.php", {
         method: "post",
         body: datos
       }).then(res => res.json()).then(data => {
           console.log(data);
  
       }).catch(console.error);
     });
  
  
  })