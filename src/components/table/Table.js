import React from 'react'
import Tablerow from './Tablerow'
import "./table.css"

const Table = ({data, setEdit, deleteData}) => {
    return (
        <div className="container table stylesTable">
             <h3>Lista de invitados</h3> 

             <table>
                   <thead>
                       <tr>
                           <th>Nombre</th>
                           <th>Apellido</th>
                           <th>Acciones</th>
                       </tr>
                   </thead>

                   <tbody>
                       {data.map((users)=> <Tablerow key={users.id} usuario={users} setEdit={setEdit} deleteData={deleteData}/>)}
                   </tbody>
             </table>
        </div>
    )
}

export default Table
