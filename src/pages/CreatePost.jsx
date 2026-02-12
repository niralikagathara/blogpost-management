import{ FaHeading,FaUser,FaLink,FaCloudUploadAlit,FaTimes,FaRegPaperPlane}from 'react-icons/fa';
import Navbar from'../Component/Navbar';
import'./CreatePost.css';

import React from 'react'

const CreatePost = () => {
  return (
    <div className="crate-post-page">
        <Navbar/>
        <div className="create-post-container">
            <header className="form-header">
                <h1>Create a New Post</h1>
                <p>shre your thoughts and stories with the world</p>            
            </header>

            <div className="post-form-card">
                <form>
                    <div className="form-group">
                        <label> Post Title</label>
                        <div className="input-wrapper">
                            <FaHeading className="input-icon"/>
                            <input 
                                type="text" 
                                Name="title"
                                className="form-control" 
                                placeholder="Enter a catchy title..."
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label> Author Name</label>
                        <div className="input-wrapper">
                            <FaUser classname="input-icon"/>   
                            <input 
                                type="text"
                                name="author"
                                className="form-control" 
                                placeholder="your name"
                            />                     
                        </div>
                    </div>

                    <div className="form-group">
                        <label> Description</label>
                        <textarea 
                            name="description" 
                            className="form-control"
                            placeholder="What's on your mind?write your story here"
                            ></textarea>
                    </div>

                    <div className="form-group">
                        <label> Cover image</label>

                        <div className="image-source-tabs">
                            < button type="button" className="tab-btn active">
                                Image URL 
                            </button>

                            <button type="button" className="tab-btn">
                                Upload File
                            </button>
                        </div>

                        <div className="input-wrapper">
                            <FaLink className="input-icon"/>
                            <input 
                                type="text"
                                name="imageUrl"
                                className="form-control"
                                placeholder="paste image URL here(e.g https://..)" 
                            />
                        </div>

                        <div className="image-upload-area">
                            <FaCloudUploadAlit className="upload-icon"/>
                            <p> click to upload image from your device </p>

                        </div>

                        <div className="image-preview-container">
                            <img 
                                src="" 
                                alt="preview" 
                                className="image-preview"
                            />
                            <button type="button" className="remove-image-btn">
                                <FaTimes />
                            </button>
                        </div>

                    </div>

                    <div className="form-actions-row">
                        <button type="submit"  className="submit-btn">
                            <FaRegPaperPlane />  Publish Post
                        </button>

                        <button type="button" className="cancel-btn">
                            Clear Form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreatePost
