import React,{useState} from 'react'

export const useForm = initialState => {
    const [fields,setValues] = useState(initialState)
   return [
       fields,
       (e) => {
           setValues({
               ...fields,
               [e.target.name] : e.target.values
           });
       }
   ]
}

