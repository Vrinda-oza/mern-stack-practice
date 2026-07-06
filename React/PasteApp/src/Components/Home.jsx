/* eslint-disable no-unused-vars */
import React from 'react'
import { useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { addToPastes } from '../Redux/PasteSlice'
import { updateToPastes } from '../Redux/PasteSlice'
import { useDispatch, useSelector } from 'react-redux'
const Home = () => {
  
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  //useSearchParams is a hook that allows you to read and modify the query string in the URL.for example, if the URL is http://localhost:3000/?pasteId=123, you can use useSearchParams to get the value of pasteId.
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch();
  const allPastes = useSelector((state)=>state.paste.pastes);

      useEffect(() => {
      if(pasteId){
        const paste = allPastes.find((p)=>p._id === pasteId);
        if(paste){
        setTitle(paste.title);
        setValue(paste.content);

        }

      }
    
    }, [pasteId])

 function createPaste() {
  const paste = {
    title: title,
    content: value,
    _id: pasteId || Date.now().toString(36),

    createdAt: new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  };

  if (pasteId) {
    dispatch(updateToPastes(paste));
  } else {
    dispatch(addToPastes(paste));
  }
    //after craetion or updation
    setTitle('');
    setValue('');
    setSearchParams({});
  
  }
  return (
    <div>
      <div className='flex flex-row place-content-between items-center gap-7'>
      <input
          className='p-1 rounded-2xl mt-5 min-w-[600px] pl-4'
          type="text"
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
      />

     <button
            onClick={(createPaste)}

      className='bg-blue-500 hover:bg-blue-700 text-white p-1 rounded-2xl mt-2 gap-4'>
         {
            pasteId ? 'Update My Paste' : 'Create My Paste'

         }
      </button>

      
    </div>
    <div className="mt-8">
      <textarea 
        className=' rounded-2xl w-full mt-4 min-w-[500px] p-4 '
        value={value}
        placeholder='Enter Your Content Here'
        onChange={(e) => setValue(e.target.value)}
        rows={20}
      />
    </div>
    </div>
  )
}

export default Home