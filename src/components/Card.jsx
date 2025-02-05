import React from 'react';
import { BiSolidDownload } from "react-icons/bi";
import { FaFile } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={ reference} whileDrag={{scale:1.9}}  className='relative flex-shrink-0 w-60 h-72 rounded-[30px] border-dotted border-pink-600 bg-zinc-200 text-black p-5 overflow-hidden'>
     <FaFile />
     <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}
     </p>
     <div className='footer absolute bottom-0  w-full h-14 px-8 left-0'>
        <div className='flex items-center justify-between  py-3 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center'>
                {data.close ? <IoCloseSharp />:<BiSolidDownload size=".7em" color='#000'/>}
            
            </span>
        </div>
        {
            data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor=== "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3> 
           </div>
            )
        }
        
     </div>
</motion.div>
 );
}

export default Card