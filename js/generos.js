let anime=document.getElementById("home")
let next=document.getElementById("pageNext")
let prev=document.getElementById("pagePrev")
let pagina=document.getElementById("pagina")
let page=1
let generoActual=37//el genero cambiara dependiendo el boton pero tener de manera global servira para cambiar de pagina y que esa funcion sepa en que generos estamos
let shounen=document.getElementById("shounen")
let sports=document.getElementById("sport")
let romance=document.getElementById("romance")
let school=document.getElementById("school")
let policial=document.getElementById("policial")
let Drama=document.getElementById("drama")
//+18
let horror=document.getElementById("horror")
let seinen=document.getElementById("seinen")
let echhi=document.getElementById("ecchi")
let hentai=document.getElementById("hentai")
let yuri=document.getElementById("yuri")
let yaoi=document.getElementById("yaoi")
let paginacion=document.getElementById("navPage")
let pie=document.getElementById("footer")
let loader=document.getElementById('load')
loader.style.display="none" 

/*es lo mismo que search*/
function remove(container){ //en container pasamos como parametro lo que vamos a borrar dentro de el       
while (container.firstChild) { //si hay un hijo pasa al ciclo y elimana a todos hasta que el primero hijo de falso(ya no tenga ningun nodo hijo)
container.removeChild(container.firstChild);
window.scrollTo(0, 0)//vuelve arriba de todo dentro del dom 
}
}
async function peticionGeneros(page,genero,geners){//top
  document.getElementById("titulo").textContent=""
loader.style.display="flex"
paginacion.style.display="none"//oculta la nav de paginas 
pie.style.display="none" //oculta el footer 
pagina.textContent=page//este valo cambiara de pagina y traera otro json
let peticionGeneros=await fetch(`https://api.jikan.moe/v3/genre/anime/${genero}/${page}`)
let resultadoGeneros=await peticionGeneros.json()
console.log(resultadoGeneros)
for(let i=0;i<25;i++){
let fragment = document.createDocumentFragment();
const template=document.getElementById("template") //guardamos el temaplate en una variable
const newTemplate=template.content.cloneNode(true) //clonamos el template
newTemplate.getElementById("urlLink").href=resultadoGeneros.anime[`${i}`].url
newTemplate.getElementById("title").textContent=`${resultadoGeneros.anime[`${i}`].title}`
newTemplate.getElementById("img").src=`${resultadoGeneros.anime[`${i}`].image_url}`
newTemplate.getElementById("ranking").textContent=`${resultadoGeneros.anime[`${i}`].score}`
newTemplate.getElementById("calificacion").textContent=`${resultadoGeneros.anime[`${i}`].type}`
let inicio=resultadoGeneros.anime[`${i}`].airing_start

let fechaInicio = new Date(Date.parse(inicio));
newTemplate.getElementById("date").textContent=fechaInicio.getFullYear()
document.getElementById("titulo").textContent=geners
fragment.appendChild(newTemplate) //fragment guarda todos los elementos para cuando queramos usarlos lo podamos mostrar en el dom cuando queramos
anime.appendChild(fragment)
loader.style.display="none"
paginacion.style.display="flex" //cuando termina se muestran las cosas ahi recien activa la navegacion de pagina y el footer
pie.style.display="block" //
}
}

peticionGeneros(page,generoActual)//genero por defecto

shounen.addEventListener("click",function(){
page=1
generoActual=27
remove(anime)
peticionGeneros(page,generoActual,"shounen")
})

school.addEventListener("click",function(){
page=1
generoActual=23
remove(anime)
peticionGeneros(page,generoActual,"school")
})

romance.addEventListener("click",function(){
page=1
generoActual=22
remove(anime)
peticionGeneros(page,generoActual,"romance")
})

policial.addEventListener("click",function(){
page=1
generoActual=39
remove(anime)
peticionGeneros(page,generoActual,"policial")
})

drama.addEventListener("click",function(){
page=1
generoActual=8
remove(anime)
peticionGeneros(page,generoActual,"drama")
})

sports.addEventListener("click",function(){
page=1
generoActual=30
remove(anime)
peticionGeneros(page,generoActual,"sports")
})

horror.addEventListener("click",function(){
page=1
generoActual=14
remove(anime)
peticionGeneros(page,generoActual,"horror")
})

hentai.addEventListener("click",function(){
page=1
generoActual=12
remove(anime)
peticionGeneros(page,generoActual,"hentai")
})

seinen.addEventListener("click",function(){
page=1
generoActual=42
remove(anime)
peticionGeneros(page,generoActual,"seinen")
})

yuri.addEventListener("click",function(){
page=1
generoActual=34
remove(anime)
peticionGeneros(page,generoActual,"yuri")
})

yaoi.addEventListener("click",function(){
page=1
generoActual=33
remove(anime)
peticionGeneros(page,generoActual,"yaoi")
})

next.addEventListener("click",function(){
//avanza hasta la pagina 20 //hacer if para desactivar next si estamos en la pagina 20
if(page<=20){
page+=1
remove(anime)
peticionGeneros(page,generoActual)
}
})
prev.addEventListener("click",function(){
//si estamos en la pagina 1 desactivar prev
if(page>1){
page-=1
remove(anime)
peticionGeneros(page,generoActual)
}
}
)
//obtener la cantidad de paginas desde el resultado de la api para saber cuantas paginas tiene para cambiar y ponerle un tope
