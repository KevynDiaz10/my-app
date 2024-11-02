import React from 'react'

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className='flex justify-center items-center h-full flex-col bg-black/90'>
      {children}
    </div>
  )
}
