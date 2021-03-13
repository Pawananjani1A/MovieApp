import {useEffect, useState} from 'react';

import Form from "../resources/2_create-form";

const MovieCreateForm = (props)=>{

    const [ isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);

  const defaultData = {
    name: '',
    description: '',
    rating: '',
    image: '',
    cover: '',
    longDesc: ''
  }
  
  const initialData = props.initialData ? {...props.initialData} : defaultData
    //Fix uncontrolled data functionality
  const [formData,setFormData] = useState(initialData);

  // useEffect(() => {
  //   if (props.initialData) {
  //     setform(props.initialData)
  //     setIsInitialDataLoaded(true)
  //   }
  // }, [isInitialDataLoaded])

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