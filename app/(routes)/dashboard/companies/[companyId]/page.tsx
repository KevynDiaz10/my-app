import { db } from '@/lib/db'
import React from 'react'
import FormUpdate from './Update/FormUpdate'
import Contacts from './Contact/Contacts'

export default async function page({ params }: { params: { companyId: string } }) {
  
    //connect to data base with prisma findUnique
    const {companyId} = params
    const company = await db.company.findUnique({
      where: {
          id: companyId,
      }
  })
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
        <FormUpdate company={company}/>
        <Contacts company={company}/>
    </div>
  )
}
