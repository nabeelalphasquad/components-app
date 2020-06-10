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
                                return (
                                    <li key={index}> {item.name} ({item.path})</li>
                                )
                            })
                        }
                    </ul>
                </div>
            }

            <style jsx>{`
        ul{
          padding: 0px;
        }
        li{
          list-style-type: none;
          margin-bottom: 20px;
          margin:30px;
        }
        a{
          text-decoration: none;
          color: black;
        }
        
      `}</style>
        </div>
    )
}