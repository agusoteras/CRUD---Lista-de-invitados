import React,{useEffect, useState} from 'react'
import "./form.css"

const initialForm = {
    name: "",
    surname: "",
    id: null,
};

const Forms =({create, update, edit, setEdit})=> {
    const [form, setForm] = useState(initialForm)

    useEffect (()=>{
        if (edit) {setForm(edit)} 
        else { setForm(initialForm)}
    },[edit])

    const handlerChange =(e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handlerSubmit =(e)=> {
        e.preventDefault();

        if (!form.name || !form.surname) {
            alert("Datos incompletos");
            return;
        }
        if (form.id === null) {
            create(form)
        } else {
            update(form)
        }

        handlerReset()
    }

    const handlerReset =(e)=> {
        setForm(initialForm)
        setEdit(null)
    }

    return (
        <div className="container formBox">
            <h1> <span>C</span> <span>R</span> <span>U</span> <span>D</span> </h1>
            <form onSubmit={handlerSubmit} className="form-group">
                  <input className="form-control" type="text" name="name" onChange={handlerChange} value={form.name} placeholder="Nombre"></input>
                  <input className="form-control" type="text" name="surname" onChange={handlerChange} value={form.surname} placeholder="Apellido"></input>
                  <input className="btn btn-success" type="submit" value="Agregar"></input>
                  <input className="btn btn-dark" type="reset" value="Limpiar" onReset={handlerReset}></input>
            </form>
        </div>
    )
}

export default Forms