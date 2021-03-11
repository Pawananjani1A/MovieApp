import {useState} from 'react';
import Modal from "./Modal";
import MovieCreateForm from "./movieCreateForm";

const SideMenu = (props)=>{

 const {appName,categories} = props;
    return  (
        <div>
            <Modal hasSubmit={true}>
                <MovieCreateForm/>
            </Modal>
            <h1 className="my-4">{appName}</h1>
            <div className="list-group">
            {
                categories.map((category)=>(
                   <a key={category.id} href="#"  className="list-group-item">{category.name.toUpperCase()}</a>
                ))
            }
            </div>
           
        </div>
    );
};




export default SideMenu;