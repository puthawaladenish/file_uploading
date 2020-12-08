import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'


export default function ViewProfiles() {
    useEffect(() => {   
       axios.get('http://localhost:4000/api/profilee/viewAll')
       .then((data)=>{
           const result = data.data.result
           setTabledata(result)
           console.log(result)
       }).catch((err)=>{
           console.log(err)
       })
    }, [])
    
    const [tabledata, setTabledata] = useState([])

    // const img_path = require('../image/')
    return (
        <div>
            <h3>View all Records</h3>            
            <hr/>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>                        
                        <th>City</th>
                        <th>photo</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody> 
                {tabledata.map((item) => 
                    <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.city}</td>
                    <td><img src={`data:image/jpeg;base64,${item.img_file}`} alt = {`Profile pic of ${item.img_name}`} width="25px" height="25px"/></td>
                    <td><button >Edit</button></td>
                    <td><button >Delete</button></td>
                </tr>
                )}
                
                </tbody>

            </Table>
        </div>
    )
}

