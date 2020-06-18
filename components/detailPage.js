import React, { useState, useEffect } from 'react';
import axios from "axios"

export default (props) => {

    let { data } = props

    // const [main, setMain] = useState(null)
    // useEffect(() => {
    //     let copyData = data && { ...data }
    //     copyData && copyData.children.forEach(sin => {
    //         let path = sin.path.replace("../dh-components-source", "https://a.tuk.dev")
    //         axios.get(path).then(res => {
    //             sin.htmlData = res.data
    //         })
    //     })
    //     setMain(copyData)
    // }, [data])
    // console.log(main)
    return (
        <div>
            {
                data && <div>
                    <ul>
                        {
                            data.children.map((item, index) => {
                                // console.log(item)
                                let path = item.path.replace("../dh-components-source", "https://a.tuk.dev")

                                return (
                                    <li key={index} className="m-5">
                                        <iframe src = {path} width="100%" height="100%"></iframe>
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