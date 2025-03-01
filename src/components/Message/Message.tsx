import React from 'react'

export default function Message({messages}: {messages: string[]}) {
  return (
    <div className='flex flex-col gap-[20px] h-full w-[70%]'>
        {messages.map((item, index) => (
            <div key={index} className='p-[16px] bg-gray-100 rounded-2xl'>
               <h2>{item}</h2> 
            </div>
        ))}
        
    </div>
  )
}
