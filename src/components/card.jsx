import React from 'react';

function Card({userName,para,image}) {
  return (
    <>
      <div className="border border-zinc-900 hover:border-white transition-all hover:scale-95  flex items-center h-32 bg-slate-500 w-80 gap-2 rounded-lg miniCard p-4 cursor-pointer">
        <div className="image w-28 h-28 rounded-full bg-white">
            <img src={image} className='w-full h-full rounded-full object-cover object-center' alt="" />
        </div>
        <div className="name">
            <h1 className=' font-bold text-2xl'>{userName}</h1>
            <p>{para}</p>
            </div>
      </div>
    </>
  );
}

export default Card;
