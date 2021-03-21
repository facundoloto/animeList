/*swal("Estas por entrar a un sitio +18,eres mayor de edad?", {
    buttons: {
      cancel: "no lo soy!",
      catch: {
        text: "Si lo soy",
        value: "catch",
      }
      
    },
  })
  .then((value) => {
    switch (value) {
   
   
      case "catch":
        
        break;
   
      default:
        swal("hasta que no seas mayor no puedes entrar.", window.close());
       
    }
  })
*/
let tipo="anime" //esta variable va ser para cambiar el tipo de buscada en la peticion si sera anime o se buscara manga
let animeButton=document.getElementById("searchButton")
let input=document.getElementById("searchInput")
let typeAnime=document.getElementById("anime")
let typeManga=document.getElementById("manga")
let anime=document.getElementById("listAnime")
let flecha=document.getElementById("scroll")
let nombre=document.getElementById("nombre")
flecha.addEventListener("click",function (){
  window.scrollTo(0, 0)}
  )
function remove(){
    while (anime.firstChild) { //si hay un hijo pasa al ciclo y elimana a todos hasta que el primero hijo de falso(ya no tenga ningun nodo hijo)
        anime.removeChild(anime.firstChild); 
        
    }
   
}
async function peticionTop(){
  let peticionTop=await fetch( `https://api.jikan.moe/v3/top/${tipo}/10`)
  let resultadoTop=await peticionTop.json()
  console.log(resultadoTop)
  for(let i=0;i<9;i++){
  console.log(resultadoTop.top[`${i}`].title)
  let fragment = document.createDocumentFragment();
  const template=document.getElementById("template") //guardamos el temaplate en una variable
  const newTemplate=template.content.cloneNode(true) //clonamos el template
  newTemplate.getElementById('title').textContent=`${resultadoTop.top[`${i}`].title}`
  newTemplate.getElementById('img').src=`${resultadoTop.top[`${i}`].image_url}`
  newTemplate.getElementById('ranking').textContent=`${resultadoTop.top[`${i}`].score}`
  newTemplate.getElementById('calificacion').textContent=`${resultadoTop.top[`${i}`].rated}`
  let inicio=resultadoTop.top[`${i}`].start_date
  let final=resultadoTop.top[`${i}`].end_date
  let fechaInicio = new Date(Date.parse(inicio));
  let fechaFinal = new Date(Date.parse(final));
  newTemplate.getElementById('date').textContent=fechaInicio.getFullYear()+" / "+fechaFinal.getFullYear()
  newTemplate.getElementById('synopsis').textContent=`${resultadoTop.top[`${i}`].synopsis}`
 /* newTemplate.getElementById('sinopsis').textContent=`${resultadoTop.top[`${i}`].synopsis}` */
  fragment.appendChild(newTemplate) //fragment guarda todos los elementos para cuando queramos usarlos lo podamos mostrar en el dom cuando queramos
  anime.appendChild(fragment)
  }
}

async function buscar(query){
let bandera=false
let buscador=query.replace(/\b\w/g, l => l.toUpperCase()) //convierta la primer letra en mayusculas de cada palabra,esto sirve la funcion que filtra la palabras clave ya que empiezan con la primer letra en mayusculas
if(query===""){

  
  }
  else{
    let peticion=await fetch( `https://api.jikan.moe/v3/search/${tipo}?q=${buscador}`)
    let resultado=await peticion.json()
    console.log(resultado.results)
    let total=resultado.results.length
    console.log(total)
    for (let i=0;i<total;i++){
        
        let fragment = document.createDocumentFragment();
        const template=document.getElementById("template") //guardamos el temaplate en una variable
        const newTemplate=template.content.cloneNode(true) //clonamos el template
        let title=resultado.results[`${i}`].title
        if(title.includes(buscador)){ //incluide es case sensitive por eso transformamos lo que se guarda en buscador para mostrar solo lo relacionado a la palabra que estamos buscando
          console.log(buscador)
          nombre.textContent=`${buscador}`
          flecha.style.display="block" 
          bandera=true//si la bandera se activa significa que se mostro algo por que se encontro lo que buscaba
          newTemplate.getElementById('title').textContent=`${resultado.results[`${i}`].title}`
          newTemplate.getElementById('img').src=`${resultado.results[`${i}`].image_url}`
          newTemplate.getElementById('ranking').textContent=`${resultado.results[`${i}`].score}`
          newTemplate.getElementById('calificacion').textContent=`${resultado.results[`${i}`].rated}`
          let inicio=resultado.results[`${i}`].start_date
          let final=resultado.results[`${i}`].end_date
          let fechaInicio = new Date(Date.parse(inicio));
          let fechaFinal = new Date(Date.parse(final));
          newTemplate.getElementById('date').textContent=fechaInicio.getFullYear()+" / "+fechaFinal.getFullYear()
          newTemplate.getElementById('synopsis').textContent=`${resultado.results[`${i}`].synopsis}`
         /* newTemplate.getElementById('sinopsis').textContent=`${resultado.results[`${i}`].synopsis}` */
          fragment.appendChild(newTemplate) //fragment guarda todos los elementos para cuando queramos usarlos lo podamos mostrar en el dom cuando queramos
          anime.appendChild(fragment)
        }
  }
  if(bandera==false){ //si no se encuentra resultado de lo que buscamos al no activarse la bandera sigue en falso por la tanto muestra el siguente mensaje
    swal("no se encontro resultado")
    }
    else{
    bandera=false//si se encuentra resultado la bandera pasa a ser true y hay que volverla a ponerla en false para que valide si se encuentra resultado en las siguientes busquedas
    }
    
  }

}

typeAnime.addEventListener("click",function(){
tipo="anime"
remove()

buscar(input.value)
typeAnime.className = "btn btn-warning";
typeManga.className="btn btn-outline-success"
})
typeManga.addEventListener("click",function(){
  tipo="manga"
  remove()
 
  buscar(input.value)
  typeManga.className = "btn btn-success";
  typeAnime.className="btn btn-outline-warning"
  })


input.addEventListener("keydown", (e)=> {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode ===13) {
    e.preventDefault()
    remove()
    
    buscar(input.value)
    }
    })
animeButton.addEventListener("click",()=>{
remove()

buscar(input.value)
})

peticionTop()