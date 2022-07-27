
import { Listado } from "./components/Listado";
import { Crear } from "./components/Crear";
import { useState } from "react";



function App() {

    const [listadoState, setListadoState] = useState([])
  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">

            <h1>Listado de Tareas</h1>
        </header>

        <aside className="lateral">
           
            <Crear setListadoState={setListadoState}/>
        </aside>
        <br/>
        <section id="content" className="content">
            <Listado listadoState={listadoState} setListadoState ={setListadoState}/>
        </section>
       
    </div>
  );
}

export default App;
