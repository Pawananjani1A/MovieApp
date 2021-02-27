import React from 'react';


//Functional components:
//WHEN TO USE:
//1.Smaller components
//2.Reusable components
//Presentational components - partially right, we can use hooks and specify state

// const About = ()=>{
//     const message = "Variable";

//     return (
//         <div>About Page-{message}</div>
//     );
// }

class About extends React.Component{
   
    
    render (){
        const message = "Class";
        return (
            <div>
              <h1>I am a {message} component.</h1>
            </div>
           
        );
    }
}



export default About;