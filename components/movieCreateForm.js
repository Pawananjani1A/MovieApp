import {useEffect, useState} from 'react';

import Form from "../resources/2_create-form";

const MovieCreateForm = (props)=>{

    //Fix uncontrolled data functionality
    const [formData,setFormData] = useState({
          name:'',
          description:'',
          rating:0,
          longDesc:"",
          image:"",
          cover:"",

    });

useEffect(()=>{
    if(props.initialData)
{
    setFormData(props.initialData);
}
},[])

const handleChange = (event)=>{
 
    const target = event.target;
    const name= target.name;

    setFormData({
        ...formData,
        [name]:target.value
    })
}

const handleGenreChange = (event)=>{
 const {options} = event.target;

 let value = [];

 for(let i=0;i<options.length;i++){
     if(options[i].selected) value.push(options[i].value);
 }
   
  setFormData({
        ...formData,
        genre:value.toString()
    })

}

const submitform = () => {
    props.handleFormSubmit({...formData})
  }


    return (
       <Form 
           formData={formData}
           handleChange={handleChange}
           handleGenreChange={handleGenreChange}
           submitform={submitform}
           submitButton={props.submitButton}
       />
    );
}



export default MovieCreateForm;