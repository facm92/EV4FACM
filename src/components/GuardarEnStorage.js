


export const GuardarEnStorage = (clave, elemento) => {

    //Conseguir los elementos que ya tenemos en el Local Storage
    let elementos = JSON.parse (localStorage.getItem(clave))
    console.log(elementos)

    //Comprobar si es Array
    if(Array.isArray(elementos)){
        //Añadir dentro de un array un elemento nuevo
        elementos.push(elemento)
    }

    else {
        //Crear array con la peli nueva elemento
    elementos = [elemento]
    }



    //Guardar en el Local Storage
    localStorage.setItem (clave,JSON.stringify(elementos))


    //Devolver objeto guardado
    return elemento


}