let formatDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

let eventos = async () => {
  let rawData = await fetch("/api/eventos.php");
  let jsonData = await rawData.json();

  let listCard = document.querySelector('#list-card')

  contentListCard = ''
  
  for(let evento of jsonData){
    contentListCard+= `
    <div class="card col-card px-0" id=${evento.id_evento}>
      <div class="img-card-content">
        <img src="../images/${evento.url_imagen}" class="card-img-top">
        <h5 class="card-title card-title-img m-0">${evento.nombre}</h5>
      </div>
      <div class="card-body px-2 py-1">
        <p class="card-text">
          ${(new Date(evento.fecha)).toLocaleDateString(undefined,formatDate)}
        </p>
      </div>
    </div>
    `
  }

  listCard.innerHTML = contentListCard
  
}


window.addEventListener("load",async()=>{
  await eventos();

  let card = document.querySelector('.img-card-content')
  console.log(card)

  card.addEventListener("click",() => {
    console.log(card)
  })
})


