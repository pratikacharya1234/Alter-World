import React from 'react'
import { BiSolidArrowToRight } from 'react-icons/bi'

export default function CreatePost() {
  return (
    <>
        <div className="paragraph">
        <label htmlFor="text"><h2>Wanna Say..</h2></label>
          <textarea 
          id="text" 
          name="text" 
          rows="2" 
          cols="40" 
          className='border-2 m-2 p-2 w-full'
          placeholder='Write something here...'>
          </textarea>
          <input type="image" src="" alt="" />
          <button className='bg-blue-500 text-white px-4 py-2 mt-2' >
          Post <BiSolidArrowToRight/>
        </button>
      </div>
    </>
      
  )
}
