import react, {useState} from 'react'
import { GuardarEnStorage } from './GuardarEnStorage'


    export const Crear = ({setListadoState}) => {

    
        const tituloComponente= 'Añadir Nota'
        const [notaState,setNotaState] = useState({
            titulo: '',
            descripcion: ''
        })

        const {titulo, descripcion}= notaState

        const conseguirDatosForm = e => {
            e.preventDefault();

            // Conseguir datos del formulario
            let target = e.target;
            let titulo = target.titulo.value
            let descripcion = target.descripcion.value
            
            
            //Crear objeto de la nota a guardar
            let nota = {
                id: new Date().getTime(),
                titulo,
                descripcion
            }
            // Guardar estado
            setNotaState(nota)

            //Actualizar el estado del listado principal
            setListadoState(elementos => {
                return [...elementos,nota]
            })

            //Guardar en el almacenamiento local
            GuardarEnStorage("notas", nota)


           
        }

        




    return(
        <div className="add">
                <h3 className="title">{tituloComponente}</h3>

                <strong id="lanota"> {(titulo ) && "Has creado la nota: " +titulo} </strong>
                    
                <form onSubmit ={conseguirDatosForm}>
                    <input type="text" id="titulo" name="titulo" placeholder="Titulo de Nota" className="form-control ms-2"></input>
                     <input type="text" id="descripcion" name="descrpicion" placeholder="Descripcion de la Nota" className='form-control ms-2'></input>
                    <input type="submit" id="save" value="Guardar nota !!!" class="btn btn-dark" />

                    
                </form>
            </div>
            





    )
}