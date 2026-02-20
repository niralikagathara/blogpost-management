import React, { useEffect, useState } from "react";
import "./Favorites.css";
import Navbar from "../Component/Navbar";
import { MdDeleteSweep, MdOpenInNew } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Favorites = () => {
   const [task,setTasks]=useState([]);
   const [favorites,setFavorites]=useState([]);
    const navigate=useNavigate()

   useEffect(()=>{
      const savedFavorites=JSON.parse(localStorage.getItem('favorites')||'[]');
      setFavorites(savedFavorites);
      fetchtask();
    },[]);

    const fetchtask=async()=>{
      try{
        const response=await fetch('http://localhost:3000/posts');
        const data=await response.json();
        if(Array.isArray(data)){
          setTasks(data);
        }
      }catch(error){
        console.log("Error fetching posts:",error);
      }
    };

    const removeFavorite=(taskId)=>{
      const currentFavorites=JSON.parse(localStorage.getItem('favorites')||'[]');
      const newFavorites=currentFavorites.filter(id=>id!==taskId);
      localStorage.setItem('favorites',JSON.stringify(newFavorites));
      setFavorites(newFavorites);
      toast.info("Removed from cleared");
    };
    
    const clearAllFavorites=()=>{
      if (window.confirm("Clear All Your saved posts?")){
        localStorage.setItem('favorites','[]');
        setFavorites([]);
        toast.info("Collection cleared");
      }
    } ;

    const favoritePosts = task.filter(task=>favorites.includes(task.id))
  return (
    <div className="favorites-page-container">
      <Navbar />

      <main className="favorites-main">
        <div className="favorites-hero">
          <div className="hero-shape"></div>
          <div className="hero-content">
            <h1>your Reading List</h1>
            <p>Enjoy the collection of stories ypu've curated.</p>
          </div>
        </div>

        <div className="favorites-content">
          <div className="favorites-header">
            <h2>
              Curated Collection
              <span className="count-badge">{favoritePosts.length} </span>
            </h2>

            {favoritePosts.length>0 &&(
               <button className="clear-all-btn" onClick={clearAllFavorites}>
              <MdDeleteSweep size={20} />
              Clear List
            </button>)}

             </div>

             {/* empty state UI */}
             {favoritePosts.length===0?(
              <div className="fav-empty-state">
            <div className="empty-icon-wrapper">
              <FaRegStar className="empty-icon" />
            </div>
            <h3>Your list is empty</h3>
            <p>discover interesting posts and save them to read later</p>
            <button className="browser-btn" onClick={()=>navigate('/dashboard')}>Explore Stories</button>
          </div>
             ):(
             
              // sample card UI
          <div className="favorites-grid">
            {favoritePosts.map((task)=>(
              <div className="fav-card">
              <div className="fav-card-image">
                <img src={task.imageurl} alt="Post" />
                <div className="fav-card-overlay">
                  <button className="read-btn" onClick={()=>navigate(`/post-details/${task.id}`)}>
                    <MdOpenInNew />
                    Read Article
                  </button>
                </div>
              </div>

              <div className="fav-card-body">
                <div className="fav-meta">
                  <span className="fav-author">{task.auther||'Admin'}</span>
                  <span className="fav-date">Recent</span>
                </div>

                <h3 className="fav-title">{task.title}</h3>

                <p className="fav-excerpt">
                  {task.description}
                </p>

                <button className="remove-fav-btn" onClick={()=>removeFavorite(task.id)}>Remove</button>
              </div>
            </div>
            ))}
            
          </div>
             )}
        </div>
      </main>
    </div>
  );
};

export default Favorites;