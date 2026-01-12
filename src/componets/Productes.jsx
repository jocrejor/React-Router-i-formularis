import {useState,useEffect} from 'react'
import {getData,url} from './apiAccess/crud'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const Productes = () => {
const [data,setData]= useState([])

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
    initialValues: {
      name: '',
      description: '',
      price: 0
    },
    validationSchema,
    onSubmit: (values) => {
       alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <>
    <div>Productes</div>

    <table>
        <thead>
          <tr>    
          <th>ID</th>
          <th>Nom</th>
          <th>Preu</th>
          <th>Descripció</th>
          <th>Acciones</th>
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
                   <td><button className='btn btn-primary' onClick={() => alert('Editar')}>Editar</button>
                   <button className='btn btn-primary' onClick={() => alert('Esborrar')}>Esborrar</button>
                   </td>

            </tr>
            )
        })}
         </tbody>

    </table>

         <div>
        <h2>Alta Producte</h2>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Nom:</label>
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

            <label htmlFor="password">Descripció:</label>
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
            <label htmlFor="password">Preu:</label>
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
            <input type="submit" value="Alta"></input>
            </form>
            
            </div>




    </>
  )

}

export default Productes