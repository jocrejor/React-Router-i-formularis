import {useState,useEffect} from 'react'
import {getData,url,deleteData,postData,updateId} from './apiAccess/crud'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Modal,Button } from 'react-bootstrap'


const Productes = () => {


// ESTATS
const [data,setData]= useState([])
const [showModal, setShowModal] = useState(false);
const [tipoModal, setTipoModal] = useState("Crear");

async function fetchData() {
    const dataFetch = await getData(url,'Product');
    setData(dataFetch);
}

useEffect(()=>{
   /* fetch("https://api.serverred.es/Product")
        .then(response => response.json())
        .then(dataFetch => {[...data,setData(dataFetch)]});
*/
        fetchData();
},[])


const validationSchema = Yup.object({
  name: Yup.string().min(4, 'Massa curt!').max(100, 'Massa llarg!').required('El nom és obligatori'),
  description: Yup.string().min(4, 'Massa curt!').max(200, 'Massa llarg!').required('La descripció és obligatòria'),
  price: Yup.number().min(0,'ha de der positiu').required('Selecciona un idioma'),
})

    const formik = useFormik({
    initialValues: { name: '', description: '', price: 0 },
    validationSchema,
    onSubmit: async (values) => {
      if (tipoModal === "Crear" ){
      await postData(url,"Product",values);
      }else{

      await updateId(url,"Product",values.id,values);
}
const response = await getData(url,'Product');
      setData(response); 
      tancarModal();       

    }
  })

  const obrirModal = () => {
    setTipoModal("Crear");
    formik.setValues({ name: '', description: '', price: 0 });
    setShowModal(true);
  };

  const tancarModal = () => setShowModal(false);

  
  const modificarProducte = (valors) => {
    setTipoModal("Modificar");
    formik.setValues(valors);
    setShowModal(true);
  };

  const eliminarProducte = async (id) => {
    try { 
      await deleteData(url, "Product", id);
      setData(data.filter((ele) => ele.id !== id));
    } catch (error) {
      console.error("Error eliminant el producte:", error);
    }
  };


  return (
    <>
    <div>Productes</div>
     <button className="btn btn-primary mb-3" onClick={obrirModal} >
        Alta Usuari
      </button>
    <table>
        <thead>
          <tr>    
          <th>ID</th>
          <th>Nom</th>
          <th>Preu</th>
          <th>Descripció</th>
          <th colSpan={2}>Acciones</th>
        </tr>
      </thead>
         <tbody> 
        {data.map(ele =>{
        return(
            <tr key={ele.id}>
                <td>{ele.id}</td>
                 <td>{ele.name}</td>
                  <td>{ele.price}</td>
                   <td>{ele.description}</td>
                  <td><Button variant="warning" onClick={() => modificarProducte(ele)}>Modificar</Button></td>
                  <td><Button variant="danger" onClick={() => eliminarProducte(ele.id)}>Eliminar</Button></td>

            </tr>
            )
        })}
         </tbody>

    </table>




        <Modal show={showModal} onHide={tancarModal}>
        <Modal.Header closeButton>
          <Modal.Title>{tipoModal} Producte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={formik.handleSubmit} >
          <div className="mb-3">
              <input type="hidden" name="id" value={formik.values.id} />
              <label htmlFor="name" className="form-label">Nom:</label>
              <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  placeholder="Enter name"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />

            {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Descripció:</label>
            <input
                type="text"
                name="description"
                value={formik.values.description}
                placeholder="Enter description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
                <div>{formik.errors.description}</div>
            ) : null}
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Preu:</label>
            <input
                type="number"
                name="price"
                value={formik.values.price}
                placeholder="Enter pridescriptionce"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
            ) : null}
            </div>  
          
             <Button variant="secondary" onClick={tancarModal}>Tancar</Button>
             <Button variant="primary" type="submit">{tipoModal}</Button>
          
            </form>
            
  </Modal.Body>
  </Modal>  

    </>
  )

}

export default Productes