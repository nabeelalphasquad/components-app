import Link from 'next/link';
import data from "../response.json"


const Home = () => {
  let result
  let i = 0
  let obj1 = data.tree[0].children
  let obj2 = data.tree[2].children

  return (

    <div className="p-5">
      <div className="mb-10 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col">
        <h1 className="w-full xl:w-1/4 lg:w-1/4 md:w-full sm:w-full text-3xl text-center p-10">Marketing</h1>
        <ul className="w-full xl:w-3/4 lg:w-3/4 md:w-full sm:w-full flex flex-wrap justify-center">
          {
            obj1 && obj1.map((item, index) => {
              return (
                <div className="m-2">
                  <a className="hover:no-underline hover:text-black" href={"/detail/" + item.name}>
                  <img src="../static/img-block.png" />
                  <li key={index}> <strong> {item.name}</strong> <br></br> {item.children.length} components </li>
                  </a>
                </div>
              )
            })
          }
        </ul>
      </div>
      <hr></hr>
      <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-10 mb-10">
      <h1 className="w-full xl:w-1/4 lg:w-1/4 md:w-full sm:w-full text-3xl text-center p-10">Application UI</h1>
        <ul className="w-full xl:w-3/4 lg:w-3/4 md:w-full sm:w-full flex flex-wrap justify-center">
          {
            obj2 && obj2.map((item, index) => {
              return (
                <div className="m-2">
                  <a className="hover:no-underline hover:text-black" href={"/detail/" + item.name}>
                  <img src="../static/img-block.png" />
                  <li key={index}> <strong> {item.name}</strong> <br></br> {item.children.length} components </li>
                  </a>
                </div>
              )
            })
          }
        </ul>
      </div>
      <hr></hr>


    </div>
  );
}
export default Home