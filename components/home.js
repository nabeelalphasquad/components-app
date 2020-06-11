import Link from 'next/link';
import data from "../response.json"


const Home = () => {
  let result
  let i = 0
  let obj1 = data.tree[0].children
  let obj2 = data.tree[2].children

  return (

    <div className="App">
      <div className="">
        <div className="flex">
          <h1>Marketing</h1>
          <ul style={{ marginLeft: "100px" }}>
            {
              obj1 && obj1.map((item, index) => {
                return (
                  <div>
                    <img src="../static/img-block.png" />
                    <li key={index}> <a href={"/detail/" + item.name}><strong> {item.name}</strong> <br></br> {item.children.length} components </a></li>
                  </div>
                )
              })
            }
          </ul>
        </div>
        <hr></hr>
        <div className="flex margin-top">
          <h1>Application UI</h1>
          <ul style={{ marginLeft: "100px" }}>
            {
              obj2 && obj2.map((item, index) => {
                return (
                  <div>
                    <img src="../static/img-block.png" />
                    <li key={index}> <a href={"/detail/" + item.name}> <strong>{item.name}</strong> <br></br>({item.children.length} components) </a> </li>
                  </div>
                )
              })
            }
          </ul>
        </div>
        <hr></hr>
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
        .margin-top{
          margin-top: 50px;
        }
        ul{
          padding: 0px;
          display: flex;
          flex-wrap: wrap;
        }
        li{
          display: flex;
          list-style-type: none;
          margin-bottom: 20px;
          margin: 20px;
        }
        a{
          text-decoration: none;
          color: black;
        }
        img{
          width:350px;
        }
        
      `}</style>
    </div>
  );
}
export default Home