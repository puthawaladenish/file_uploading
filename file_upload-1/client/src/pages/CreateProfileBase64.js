import React, { useState, useEffect } from 'react';
import { useForm } from '../customHooks/useFormCustomHook'
import axios from 'axios';

export default function CreateProfile() {
    const [fields, setFields] = useState({});
    const [SelectedFile, setSelectedFile] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();

        formData.append('firstName',fields.firstName );
        formData.append('lastName',fields.lastName );
        formData.append('city',fields.city );
        formData.append('img',SelectedFile);
        axios.post('http://localhost:4000/api/profilee/create', formData)
            .then(res => {
                console.log("data insert successfully")
                console.log(res.data)
            })
            .catch(error => console.log(error))
        //console.log(fields)
    }
    //custom hook implementation "proxy": "http://localhost:4000/",
    // const [fields,handleChange] = useForm({
    //     firstName:'',
    //     lastName:'',
    //     gender:'',
    //     address:'',
    //     photo:''
    // })


    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
       }
    const handlefile = (e) => {
        setSelectedFile(e.target.files[0])
    }


    return (
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <div>{fields.firstName}</div>
                    <label>First Name</label>
                    <input name="firstName"
                        type="firstName"
                        value={fields.firstName}
                        onChange={handleChange} />
                    <label>Last Name</label>
                    <input name="lastName"
                        type="text"
                        value={fields.lastName}
                        onChange={handleChange}></input>
                </div>
                <div>    
                    <label>City</label>
                    <input name="city"
                        type="text"
                        value={fields.address}
                        onChange={handleChange} />
                </div>
                <div>
                    <label>Photo</label>
                    <input name="img"
                        type="file"                        
                        onChange={handlefile} />
                </div>
                <div>
                <button type="submit" onClick={handleSubmit}>
                        Submit
                </button>
                </div>
            </form>
        </div>
    )
}