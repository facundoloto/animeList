let tipo="anime" //esta variable va ser para cambiar el tipo de buscada en la peticion si sera anime o se buscara manga
let animeButton=document.getElementById("searchButton")
let input=document.getElementById("searchInput")
let anime=document.getElementById("listAnime")
let flecha=document.getElementById("scroll")
flecha.addEventListener("click",function (){window.scrollTo(0, 0)})


input.addEventListener("keydown", (e)=> {
// Number 13 is the "Enter" key on the keyboard
if (event.keyCode ===13) {
e.preventDefault()
remove(anime)
buscar(input.value,tipo,anime,"nombre","template","title","img","ranking","calificacion","date","synopsis")
}
})

