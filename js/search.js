/*en query se pasa el input,en tipo si es anime o manga,en container poner el id del contenedor donde se renderizara,en titulo el h1 donde mostrar
el nombre del anime/manga que buscaremos 
el template,y en los id ,poner en string  el nombre del id del template y 
los elementos de este ejemplo el id de imagen del template,los id sera las cosas que  mostraremos de la api*/
async function buscar(query,tipo,container,titulo,idTemplate,idTitle,idImg,idRanking,idCalificacion,idDate,idSinopsis){
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
            const template=document.getElementById(idTemplate) //guardamos el temaplate en una variable
            const newTemplate=template.content.cloneNode(true) //clonamos el template
            let title=resultado.results[`${i}`].title
            if(title.includes(buscador)){ //incluide es case sensitive por eso transformamos lo que se guarda en buscador para mostrar solo lo relacionado a la palabra que estamos buscando
              console.log(buscador)
              document.getElementById(titulo).textContent=query
              nombre.textContent=`${buscador}`
              bandera=true//si la bandera se activa significa que se mostro algo por que se encontro lo que buscaba
              newTemplate.getElementById(idTitle).textContent=`${resultado.results[`${i}`].title}`
              newTemplate.getElementById(idImg).src=`${resultado.results[`${i}`].image_url}`
              newTemplate.getElementById(idRanking).textContent=`${resultado.results[`${i}`].score}`
              newTemplate.getElementById(idCalificacion).textContent=`${resultado.results[`${i}`].rated}`
              let inicio=resultado.results[`${i}`].start_date
              let final=resultado.results[`${i}`].end_date
              let fechaInicio = new Date(Date.parse(inicio));
              let fechaFinal = new Date(Date.parse(final));
              newTemplate.getElementById(idDate).textContent=fechaInicio.getFullYear()+" / "+fechaFinal.getFullYear()
              newTemplate.getElementById(idSinopsis).textContent=`${resultado.results[`${i}`].synopsis}`
             /* newTemplate.getElementById('sinopsis').textContent=`${resultado.results[`${i}`].synopsis}` */
              fragment.appendChild(newTemplate) //fragment guarda todos los elementos para cuando queramos usarlos lo podamos mostrar en el dom cuando queramos
              container.appendChild(fragment)
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