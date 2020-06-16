import React from 'react';
import data from "../response.json"

export default (props) => {

    let { data } = props
    return (
        <div>
            {
                data && <div>
                    <ul>
                        {
                            data.children.map((item, index) => {
                                let path = item.path.replace("../dh-components-source" , "https://a.tuk.dev" )
                                return (
                                    <li key={index} className="m-5"> <a className="hover:no-underline hover:text-black outline-none" href ={path}> {path} </a> </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }

        </div>
    )
}