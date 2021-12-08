import React,{useState} from 'react';
import Forms from '../crudForms/Forms';
import Table from '../table/Table';

const initialBd = [
    {
      name: "Pablo",
      surname: "Gonzalez",
      id: null,
    }
  ]

const Crud = () => {
    const [bd, setBd] = useState(initialBd)
    const [dataEdit, setDataEdit]=useState(null)

    const createData =(data)=> {
        setBd([...bd, data])
        data.id = Date.now()
    }

    const updateData =(data)=> {
     let newData = bd.map((item) => item.id === data.id ? data: item)
     setBd(newData)
    }

    const deleteData =(id)=> {
      let confirmMessage = window.confirm("¿Esta seguro que desea eliminarlo?")

      if (confirmMessage) {
      let newData = bd.filter((item)=> item.id !== id)
      setBd(newData)
      }
      else {
        return;
      }
    }

    return (
        <div>

            <Forms create={createData} update={updateData} edit={dataEdit} setEdit={setDataEdit}/>
            <Table data={bd} deleteData={deleteData} setEdit={setDataEdit}/>
        </div>
    )
}

export default Crud
