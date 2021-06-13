import React from 'react'
import { useRouter } from 'next/router' 


function CollegeShow() {
    const router = useRouter();
    const { id } = router.query
    
    return (
        <h1>
            {id}
        </h1>
    )
}



export default CollegeShow
