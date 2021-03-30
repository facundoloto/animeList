let anime=document.getElementById("home")
let next=document.getElementById("pageNext")
let prev=document.getElementById("pagePrev")
let pagina=document.getElementById("pagina")
let page=1
let generoActual=1//el genero cambiara dependiendo el boton pero tener de manera global servira para cambiar de pagina y que esa funcion sepa en que generos estamos
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

    async function peticionGeneros(page,genero){//top
        pagina.textContent=page//este valo cambiara de pagina y traera otro json
        let peticionGeneros=await fetch( `https://api.jikan.moe/v3/search/anime?q=&page=${page}&genre=${genero}`)
        let resultadoGeneros=await peticionGeneros.json()
        console.log(resultadoGeneros)
        for(let i=0;i<10;i++){
        let fragment = document.createDocumentFragment();
        const template=document.getElementById("template") //guardamos el temaplate en una variable
        const newTemplate=template.content.cloneNode(true) //clonamos el template
        newTemplate.getElementById("urlLink").href=resultadoGeneros.results[`${i}`].url
        newTemplate.getElementById("title").textContent=`${resultadoGeneros.results[`${i}`].title}`
        newTemplate.getElementById("img").src=`${resultadoGeneros.results[`${i}`].image_url}`
        newTemplate.getElementById("ranking").textContent=`${resultadoGeneros.results[`${i}`].score}`
        newTemplate.getElementById("calificacion").textContent=`${resultadoGeneros.results[`${i}`].rated}`
        let inicio=resultadoGeneros.results[`${i}`].start_date
        let final=resultadoGeneros.results[`${i}`].end_date
        let fechaInicio = new Date(Date.parse(inicio));
        let fechaFinal = new Date(Date.parse(final));
        newTemplate.getElementById("date").textContent=fechaInicio.getFullYear()+" / "+fechaFinal.getFullYear()
        
        console.log(resultadoGeneros.results[`${i}`].url)
        fragment.appendChild(newTemplate) //fragment guarda todos los elementos para cuando queramos usarlos lo podamos mostrar en el dom cuando queramos
        anime.appendChild(fragment)
        }
      }
       
          /*es lo mismo que search*/
    function remove(container){ //en container pasamos como parametro lo que vamos a borrar dentro de el
      while (container.firstChild) { //si hay un hijo pasa al ciclo y elimana a todos hasta que el primero hijo de falso(ya no tenga ningun nodo hijo)
      container.removeChild(container.firstChild); 
      }
      }
     
       peticionGeneros(page,generoActual)//genero por defecto
       
       
       shounen.addEventListener("click",function(){
        generoActual=27
        remove(anime)
        peticionGeneros(page,generoActual)
       })
       
       school.addEventListener("click",function(){
        generoActual=23
        remove(anime)
        peticionGeneros(page,generoActual)
       })

       
       romance.addEventListener("click",function(){
        generoActual=22
        remove(anime)
        peticionGeneros(page,generoActual)
       })

       
       policial.addEventListener("click",function(){
        generoActual=39
        remove(anime)
        peticionGeneros(page,generoActual)
       })

       
       drama.addEventListener("click",function(){
        generoActual=8
        remove(anime)
        peticionGeneros(page,generoActual)
       })

       
       sports.addEventListener("click",function(){
        generoActual=30
        remove(anime)
        peticionGeneros(page,generoActual)
       })

       
       horror.addEventListener("click",function(){
        generoActual=14
        remove(anime)
        peticionGeneros(page,generoActual)
       })

       
       hentai.addEventListener("click",function(){
        generoActual=12
        remove(anime)
        peticionGeneros(page,generoActual)
       })

       
       seinen.addEventListener("click",function(){
        generoActual=42
        remove(anime)
        peticionGeneros(page,generoActual)
       })

       
       yuri.addEventListener("click",function(){
        generoActual=34
        remove(anime)
        peticionGeneros(page,generoActual)
       })

       
       yaoi.addEventListener("click",function(){
        generoActual=33
        remove(anime)
        peticionGeneros(page,generoActual)
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
      
      })

      //obtener la cantidad de paginas desde el resultado de la api para saber cuantas paginas tiene para cambiar y ponerle un tope

    
    
  



 
