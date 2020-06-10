import Link from 'next/link';
import data from "../response.json"

const Home = () => {
    let result 
    let i = 0
    let obj1 = data.tree[0].children
    let obj2 = data.tree[2].children

    return (
      
        <div className="App">
          <div className="flex">
            <div>
              <h1>Marketing</h1>
              <ul>
                {
                  obj1 && obj1.map((item, index) => {
                    return (
                      <li key={index}> <a href={"/detail/" + item.name}><strong> {item.name}</strong> <br></br> ({item.children.length} components) </a></li>
                    )
                  })
                }
              </ul>
            </div>
            <div>
              <h1>Application UI</h1>
              <ul>
                {
                  obj2 && obj2.map((item, index) => {
                    return (
                      <li key={index}> <a href={"/detail/" + item.name}> <strong>{item.name}</strong> <br></br>({item.children.length} components) </a> </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <style jsx>{`
        .App {
          text-align: left;
          margin: 30px;
        }
        .flex{
        justify-content: space-around;
        display: flex;
        }
        ul{
          padding: 0px;
        }
        li{
          list-style-type: none;
          margin-bottom: 20px;
        }
        a{
          text-decoration: none;
          color: black;
        }
        
      `}</style>
        </div>
    );
  }
  export default Home