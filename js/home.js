let anime=document.getElementById("home")

/*es lo mismo que search*/
async function peticionHome(container,idTemplate,idTitle,idImg,idRanking,idCalificacion,idDate,url){//top
    let peticionHome=await fetch(`https://api.jikan.moe/v3/top/anime/1/favorite`)
    let resultadoHome=await peticionHome.json()
    console.log(resultadoHome)
    for(let i=0;i<50;i++){
    console.log(resultadoHome.top[`${i}`].title)
    let fragment = document.createDocumentFragment();
    const template=document.getElementById(idTemplate) //guardamos el temaplate en una variable
    const newTemplate=template.content.cloneNode(true) //clonamos el template
    newTemplate.getElementById(url).href=resultadoHome.top[`${i}`].url
    newTemplate.getElementById(idTitle).textContent=`${i+1}`+'-'+`${resultadoHome.top[`${i}`].title}`
    newTemplate.getElementById(idImg).src=`${resultadoHome.top[`${i}`].image_url}`
    newTemplate.getElementById(idRanking).textContent=`${resultadoHome.top[`${i}`].score}`
    newTemplate.getElementById(idCalificacion).textContent=`${resultadoHome.top[`${i}`].rated}`
    let inicio=resultadoHome.top[`${i}`].start_date
    let final=resultadoHome.top[`${i}`].end_date
    let fechaInicio = new Date(Date.parse(inicio));
    let fechaFinal = new Date(Date.parse(final));
    newTemplate.getElementById(idDate).textContent=fechaInicio.getFullYear()+" / "+fechaFinal.getFullYear()
    
    console.log(resultadoHome.top[`${i}`].url)
    fragment.appendChild(newTemplate) //fragment guarda todos los elementos para cuando queramos usarlos lo podamos mostrar en el dom cuando queramos
    container.appendChild(fragment)
    }
  }



peticionHome(anime,"template","title","img","ranking","calificacion","date","urlLink")
