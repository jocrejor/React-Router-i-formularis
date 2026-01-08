import {useState,useEffect} from 'react'

const Productes = () => {
const [data,setData]= useState([])
useEffect(()=>{
    fetch("https://api.serverred.es/Product")
        .then(response => response.json())
        .then(dataFetch => {[...data,setData(dataFetch)]});

},[])

  return (
    <>
    <div>Productes</div>
    <table>
         <tbody>
        {data.map(ele =>{
        return(
            <tr key={ele.id}>
                <td>{ele.id}</td>
                 <td>{ele.name}</td>
                  <td>{ele.price}</td>
                   <td>{ele.description}</td>
                   <td></td>
            </tr>
            )
        })}
         </tbody>

    </table>
 
    </>
  )

}

export default Productes