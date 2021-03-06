import {useState} from 'react';
import { useRouter } from 'next/router';
import Modal from "./Modal";
import Link from 'next/link';
import MovieCreateForm from "./movieCreateForm";
import {createMovie} from "../actions";

const SideMenu = (props)=>{

 const {appName,categories} = props;

 const router = useRouter();
 let modal = null;

 const handleCreateMovie = (movie) => {
      createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies));
      //close modal and router redirect functionality
      modal.closeModal()
      router.push('/')
    })
  }

    return  (
        <div>
            <Modal ref={ele => modal = ele} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
            </Modal>
            <h1 className="my-4">{appName}</h1>
            <div className="list-group">
            {
                categories.map((category)=>(
                    <Link key={category.id} href={`/categories/${category.name}`}>
                         <a key={category.id}  className="list-group-item">{category.name.toUpperCase()}</a>
                    </Link>
                   
                ))
            }
            </div>
           
        </div>
    );
};




export default SideMenu;