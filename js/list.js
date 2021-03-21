let tipo="anime" //esta variable va ser para cambiar el tipo de buscada en la peticion si sera anime o se buscara manga
let animeButton=document.getElementById("searchButton")
let input=document.getElementById("searchInput")
let typeAnime=document.getElementById("anime")
let typeManga=document.getElementById("manga")
let anime=document.getElementById("listAnime")
let flecha=document.getElementById("scroll")
flecha.addEventListener("click",function (){window.scrollTo(0, 0)})

typeAnime.addEventListener("click",function(){
tipo="anime"
remove(anime) //quita todo lo que este en el contenedor donde se mostra el template
buscar(input.value,tipo,anime,"nombre","template","title","img","ranking","calificacion","date","synopsis")
typeAnime.className = "btn btn-warning"; //activa y descativa el relleno dependiendo que opcion este activada
typeManga.className="btn btn-outline-success"
})

typeManga.addEventListener("click",function(){
tipo="manga"
remove(anime)
buscar(input.value,tipo,anime,"nombre","template","title","img","ranking","calificacion","date","synopsis")
typeManga.className = "btn btn-success";
typeAnime.className="btn btn-outline-warning"
})


input.addEventListener("keydown", (e)=> {
// Number 13 is the "Enter" key on the keyboard
if (event.keyCode ===13) {
e.preventDefault()
remove(anime)
buscar(input.value,tipo,anime,"nombre","template","title","img","ranking","calificacion","date","synopsis")
}
})

animeButton.addEventListener("click",()=>{
remove(anime)
buscar(input.value,tipo,anime,"nombre","template","title","img","ranking","calificacion","date","synopsis")
})

