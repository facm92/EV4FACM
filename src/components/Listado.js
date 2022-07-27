import React, { useEffect, useState } from 'react'


export const Listado = ({listadoState, setListadoState}) => {

    

    useEffect(()=> {
        
        conseguirEscritos()
    },[])

    const conseguirEscritos =()=> {

        let escritos =JSON.parse(localStorage.getItem("notas"))

        setListadoState (escritos)

        return escritos
    }

    const borrarNota = (id) => {
        // Conseguir notas almacenadas
        let notas_almacenada = conseguirEscritos()
        //Filtrar esas peliculas para que elimine del array la que no quiero
        let nuevo_array_notas = notas_almacenada.filter(nota => nota.id !== parseInt(id))

      

       
        //Actualizar estado del listado
        setListadoState(nuevo_array_notas)
        //Actualizar los datos en el LocalStorage

        localStorage.setItem('notas', JSON.stringify(nuevo_array_notas))



    }


    return(
        <>

            {listadoState !=null && listadoState.map(nota =>{ 
                return (
                    <ul>
                        <li>
                            
                            <a href='#' key={nota.id} className="nota-item"> <button id="botonX" className="delete" onClick={() => borrarNota(nota.id) }><i class="bi bi-x-circle-fill"></i></button>


                                <h2 className="title">{nota.titulo}</h2>
                                <p className="description">{nota.descripcion}</p>


                                
                            </a>
                        </li>
                    </ul>
                    

                    

                        
                    

                )
                })}
            


    
                
     </>


    )
}