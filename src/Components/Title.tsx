import React from 'react'

export default function Title({children}:{children:React.ReactNode}) {
  return (
    <h2 className='text-blue-400 text-5xl py-6 md:py-12 text-center font-bold'>{children}</h2>
  )
}
