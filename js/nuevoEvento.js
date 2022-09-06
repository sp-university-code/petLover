window.addEventListener("load",()=>{

  const imgE = document.querySelector('#img-evento')
  const imgShow = document.querySelector('#img-evento-show')
  imgE.addEventListener("change",()=>{
    const[file] = imgE.files
    if(file){
      console.log(file)
      imgShow.src = URL.createObjectURL(file)
    }
  })

  const form_post = document.getElementById('form_post');
  const nombre = document.querySelector('#nombre')
  const fecha = document.querySelector('#fecha')
  const hora = document.querySelector('#hora')
  const lugar = document.querySelector('#lugar')
  const descripcion = document.querySelector('#descripcion')


  console.log(fecha);
  fecha.addEventListener('change',()=>{
    console.log(fecha.value);
    console.log(nombre.value);
    console.log(hora.value);
    console.log(descripcion.value);
  })
   form_post.addEventListener('submit', function(e){
     e.preventDefault();
     let datos = new FormData();
     datos.append("imgE",imgE.files[0]);
     datos.append("nombre",nombre.value);
     datos.append("fecha",fecha.value);
     datos.append("hora",hora.value);
     datos.append("lugar",lugar.value);
     datos.append("descripcion",descripcion.value);

     fetch("../api/new.php", {
       method: "post",
       body: datos
     }).then(res => {
        window.location.href = "http://localhost:3000/view/index.html";
     }).catch(console.error);
   });


})