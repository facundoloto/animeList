let anime=document.getElementById("home")
let next=document.getElementById("pageNext")
let prev=document.getElementById("pagePrev")
    /*es lo mismo que search*/
    function remove(container){ //en container pasamos como parametro lo que vamos a borrar dentro de el
      while (container.firstChild) { //si hay un hijo pasa al ciclo y elimana a todos hasta que el primero hijo de falso(ya no tenga ningun nodo hijo)
      container.removeChild(container.firstChild); 
      }
      }
    let page=1
    async function peticionGeneros(page){//top
        let peticionGeneros=await fetch( `https://api.jikan.moe/v3/search/anime?q=&page=${page}&genre=1`)
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

    
       peticionGeneros(page)

       next.addEventListener("click",function(){
        //hacer un if para que sume la cant de pagina max que tiene la api y no sume mas  que eso
         page+=1
         console.log(page)
         remove(anime)
         peticionGeneros(page)
       })
       
       prev.addEventListener("click",function(){
        //if para que retroceda solo hasta que la pag sea 1 nomas
        page-=1
        console.log(page)
        remove(anime)
        peticionGeneros(page)
      })

      //obtener la cantidad de paginas desde el resultado de la api para saber cuantas paginas tiene para cambiar y ponerle un tope

    
    
  



 
