/*es lo mismo que search*/
async function peticionTop(tipo,container,titulo,idTemplate,idTitle,idImg,idRanking,idCalificacion,idDate,idSinopsis){//top
    let peticionTop=await fetch( `https://api.jikan.moe/v3/top/${tipo}/10`)
    let resultadoTop=await peticionTop.json()
    document.getElementById(titulo).textContent="Top"
    console.log(resultadoTop)
    for(let i=0;i<9;i++){
    console.log(resultadoTop.top[`${i}`].title)
    let fragment = document.createDocumentFragment();
    const template=document.getElementById(idTemplate) //guardamos el temaplate en una variable
    const newTemplate=template.content.cloneNode(true) //clonamos el template
    newTemplate.getElementById(idTitle).textContent=`${resultadoTop.top[`${i}`].title}`
    newTemplate.getElementById(idImg).src=`${resultadoTop.top[`${i}`].image_url}`
    newTemplate.getElementById(idRanking).textContent=`${resultadoTop.top[`${i}`].score}`
    newTemplate.getElementById(idCalificacion).textContent=`${resultadoTop.top[`${i}`].rated}`
    let inicio=resultadoTop.top[`${i}`].start_date
    let final=resultadoTop.top[`${i}`].end_date
    let fechaInicio = new Date(Date.parse(inicio));
    let fechaFinal = new Date(Date.parse(final));
    newTemplate.getElementById(idDate).textContent=fechaInicio.getFullYear()+" / "+fechaFinal.getFullYear()
    newTemplate.getElementById(idSinopsis).textContent=`${resultadoTop.top[`${i}`].synopsis}`
   /* newTemplate.getElementById('sinopsis').textContent=`${resultadoTop.top[`${i}`].synopsis}` */
    fragment.appendChild(newTemplate) //fragment guarda todos los elementos para cuando queramos usarlos lo podamos mostrar en el dom cuando queramos
    container.appendChild(fragment)
    }
  }