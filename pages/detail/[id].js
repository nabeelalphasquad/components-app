import React from 'react';
import Detail from "../../components/detailPage"
import { useRouter } from "next/router";
import data from "../../response.json"




export default () => {
    let result
    let obj1 = data.tree[0].children
    let obj2 = data.tree[2].children

    let router = useRouter()
    let id = router.query.id

    let name = null
    if (obj1 || obj2) {
        name = obj1.find(element => element.name === id)
        name = obj2.find(element => element.name === id)
    }
    
    return (
        <div>
            <Detail data={name && name} />
        </div>
    )

}