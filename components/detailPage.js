import React, { useState, useEffect } from 'react';
import axios from "axios"

export default (props) => {

    let { data } = props

    const [main, setMain] = useState(null)
    useEffect(() => {
        let copyData = data && { ...data }
        copyData && copyData.children.forEach(sin => {
            let path = sin.path.replace("../dh-components-source", "https://a.tuk.dev")
            axios.get(path).then(res => {
                sin.htmlData = res.data
            })
        })
        setMain(copyData)
    }, [data])
    // console.log(main)
    return (
        <div>
            {
                main && <div>
                    <ul>
                        {
                            main.children.map((item, index) => {
                                // console.log(item)
                                return (
                                    <li key={index} className="m-5"> 
                                        <div dangerouslySetInnerHTML={{ __html: item.name && item.name }}></div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }

        </div>
    )
}