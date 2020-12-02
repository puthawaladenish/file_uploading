import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import '../image/africa-african-animal-cat-41315.jpeg'

function ViewProfiles() {
    useEffect(() => {   
       axios.get('http://localhost:4000/api/profile/viewAll')
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
            <img src={require('.././image/africa-african-animal-cat-41315.jpeg')}></img> 
            <hr/>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>photo</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody> 
                   
                {tabledata.map((item) => 
                    <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>{item.address}</td>
                    <td><img src={`C:/Users/john/Desktop/Denish Learning/file_upload/file_upload-1/${item.photo}`} alt = {`Profile pic of ${item.firstName}`} width="5px" height="5px"/></td>
                    <td><button >Edit</button></td>
                    <td><button >Delete</button></td>
                </tr>
                )}
                    
                </tbody>
            </Table>
        </div>
    )
}

export default ViewProfiles
