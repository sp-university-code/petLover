let json = [
  {
      "id_evento": "1",
      "nombre": "Feria de gatos",
      "fecha": "2022-09-21",
      "hora": "12:21:00",
      "lugar": "Parque Samanes 2",
      "likes": "0",
      "descripcion": "Feria de gatos con tiendas para consentirlos",
      "url_imagen": "P04-63353.jpg"
  },
  {
    "id_evento": "1",
    "nombre": "Feria de gatos",
    "fecha": "2022-09-21",
    "hora": "12:21:00",
    "lugar": "Parque Samanes 2",
    "likes": "0",
    "descripcion": "Feria de gatos con tiendas para consentirlos",
    "url_imagen": "P04-63353.jpg"
},
{
  "id_evento": "1",
  "nombre": "Feria de gatos",
  "fecha": "2022-09-21",
  "hora": "12:21:00",
  "lugar": "Parque Samanes 2",
  "likes": "0",
  "descripcion": "Feria de gatos con tiendas para consentirlos",
  "url_imagen": "P04-63353.jpg"
},
{
  "id_evento": "1",
  "nombre": "Feria de gatos",
  "fecha": "2022-09-21",
  "hora": "12:21:00",
  "lugar": "Parque Samanes 2",
  "likes": "0",
  "descripcion": "Feria de gatos con tiendas para consentirlos",
  "url_imagen": "P04-63353.jpg"
}
]

let formatDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

window.addEventListener("load",()=>{

  let listCard = document.querySelector('#list-card')

  contentListCard = ''
  
  json.forEach(item => {
    contentListCard+= `
    <div class="card col-card px-0" id=${item.id_evento}>
      <div class="img-card-content">
        <img src="../images/${item.url_imagen}" class="card-img-top">
        <h5 class="card-title card-title-img m-0">${item.nombre}</h5>
      </div>
      <div class="card-body px-2 py-1">
        <p class="card-text">
          ${(new Date(item.fecha)).toLocaleDateString(undefined,formatDate)}
        </p>
      </div>
    </div>
    `
  })

  listCard.innerHTML = contentListCard

  let card = document.querySelector('.img-card-content')
  console.log(card)

  card.addEventListener("click",() => {
    console.log(card)
  })
})


