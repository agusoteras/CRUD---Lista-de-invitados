import React from 'react'
import "./table.css"

const Tablerow = ({usuario, setEdit, deleteData}) => {
    return (
        <div className="container tableRow">
                        <tr className="form-group">
                           <td className="form-control">{usuario.name}</td>
                           <td className="form-control">{usuario.surname}</td>
                            <td> 
                                <button className="btn btn-primary" onClick={()=>setEdit(usuario)}>Editar</button> 
                                <button className="btn btn-danger" onClick={()=>deleteData(usuario.id)}>Eliminar</button> 
                           </td>
                       </tr>
        </div>
    )
}

export default Tablerow
