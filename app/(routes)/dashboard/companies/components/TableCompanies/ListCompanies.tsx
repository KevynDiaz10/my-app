import{ db } from '@/lib/db'
import { DataTable } from './DataTable'

import { columns } from './columns' 

export async function ListTable() {
    const companies = await db.company.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return (
        <DataTable columns={columns} data={companies}/>
    )
}