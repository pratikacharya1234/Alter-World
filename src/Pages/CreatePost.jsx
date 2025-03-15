import React from 'react';
import { BiSolidArrowToRight } from 'react-icons/bi';
import NavBar from '../Components/NavBar';

export default function CreatePost() {
  return (
    <>
    <NavBar />
      <div className="paragraph">
        <label htmlFor="text"><h2>Wanna Say..</h2></label>
        <textarea 
          id="text" 
          name="text" 
          rows="2" 
          cols="40" 
          className="textarea-custom" 
          placeholder="Write something here..."
        >
        </textarea>
        <input type="image" className="image-input" />
        <button className="post-button"> 
          Post <BiSolidArrowToRight />
        </button>
      </div>
    </>
  );
}