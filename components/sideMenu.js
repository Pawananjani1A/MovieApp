import {useState} from 'react';


const SideMenu = ()=>{

  const [count,setCount] = useState(0);
   const increment = ()=>{
        setCount(count+1);
    }

   const decrement = ()=>{
        setCount(count-1);
    }

    return  (
        <div>
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
            <a href="#" className="list-group-item">Category 1</a>
            <a href="#" className="list-group-item">Category 2</a>
            <a href="#" className="list-group-item">Category 3</a>
            </div>
           <div>
            <button className="btn btn-primary" onClick={increment}>Increment Number</button>
            <button className="btn btn-primary" onClick={decrement}>Decrement Number</button>
            <h1>{count}</h1>
          </div>
        </div>
    );
};




export default SideMenu;