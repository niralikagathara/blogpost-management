import{FaArrowLeft,FaCalendarAlt,FaClock}from 'react-icons/fa';
import Navbar from  '../Component/Navbar';
import'./PostDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdDescription } from 'react-icons/md';


const PostDetails = () => {
 const {id}= useParams();
 const navigate=useNavigate();
 const [tasks,setTasks]=useState({
    title:"",
    Description:"",
    author:"",
    imageurl:"",
    createdAt:"",
 });

 useEffect(()=>{
     fetch(`http://localhost:3000/posts/${id}`)
        .then((res) => res.json())
        .then((data)=>setTasks(data))
        .catch((err)=>console.log(err))
 },[id]);

  return (
    <div className="post-details-page">
        <Navbar/>
        <main className="post-details-container">
            <button className="back-btn" onClick={()=>navigate("/")}>
                <FaArrowLeft/> Back to Feed
            </button>

            <article className="full-post">
                <header className="post-header">
                    <div className="post-category"> Journal </div>
                    
                    <h1 className="post-full-title">
                              {tasks.title}
                    </h1>  
                    <div className="post-author-meta">
                        <div className="author-info">
                            <div className="author-avatar">
                                A 
                            </div>
                            <div>
                                <span className="author-name">{tasks.author}</span>

                                <div className="post-date-row">
                                    <span>
                                        <FaCalendarAlt /> 
                                        {tasks.createdAt}
                                    </span>
                                    <span className="dot"></span>
                                    <span>
                                        <FaClock /> 5 min read
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>              
                </header>

                <div className="post-featured-image">
                    <img 
                        src={tasks.imageurl} 
                        alt="post" 
                    />
                </div>

                <div className="post-body">
                    <p>
                        {tasks.description}
                    </p>
                </div>

                <footer className="post-footer">
                    <div className="post-share">
                        <span> Share this story:</span>
                        
                          <div className="share-buttons">
                            <button className="share-btn"> Twitter</button>
                            <button className="share-btn"> LinkedIn</button>
                            <button className="share-btn"> Link</button>
                        </div>                  
                    </div>
                </footer>
            </article>
        </main>
    </div>
  )
}

export default PostDetails
