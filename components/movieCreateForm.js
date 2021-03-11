import {useState} from 'react';

import Form from "../resources/2_create-form";

const MovieCreateForm = ()=>{

    const [formData,setFormData] = useState({
          name:'Some Movie',
          description:'Some Description',
          rating:5,
          longDesc:"Some long Description",
          image:"Some img url",
          cover:"Some Cover url",

    });

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


    return (
       <Form 
           formData={formData}
           handleChange={handleChange}
           handleGenreChange={handleGenreChange}
       />
    );
}



export default MovieCreateForm;