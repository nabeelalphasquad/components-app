import Link from 'next/link';
import data from "../response.json"


const Home = () => {
  let result
  let i = 0
  let obj1 = data.tree[0].children
  let obj2 = data.tree[2].children

  return (
    <div>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6">
          <div className="relative flex items-center justify-between">
            <div className="inset-y-0 left-0 flex items-center xl:hidden">
              <div className="cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" className="visible xl:hidden icon icon-tabler icon-tabler-menu" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <line x1="4" y1="8" x2="20" y2="8"></line>
                  <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden h-6 w-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
            <div className="w-2/5 hidden md:flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="">
                <div className="hidden xl:flex">
                  <a href="#" className="py-6 block text-sm leading-5 text-gray-700 hover:text-indigo-500 focus:outline-none focus:text-indigo-500 transition duration-150 ease-in-out">Dashboard</a>
                  <a href="#" className="ml-10 items-center flex py-6 block text-sm leading-5 text-gray-700 hover:text-indigo-500 focus:outline-none focus:text-indigo-500 transition duration-150 ease-in-out">
                    Products
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 text-gray-600 icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <a href="#" className="mx-10 py-6 block text-sm leading-5 text-gray-700 hover:text-indigo-500 focus:outline-none focus:text-indigo-500 transition duration-150 ease-in-out">Performance</a>
                  <a href="#" className="items-center flex py-6 block text-sm leading-5 text-gray-700 hover:text-indigo-500 focus:outline-none focus:text-indigo-500 transition duration-150 ease-in-out">
                    Deliverables
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 text-gray-600 icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center pr-10 xl:pr-0">
              <svg viewBox="0 0 132 130" fill="currentColor" className="h-12 w-12" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Sign-In-1" transform="translate(-654.000000, -166.000000)">
                    <g id="Group-6" transform="translate(538.000000, 166.000000)">
                      <g id="Group-9" transform="translate(75.000000, 0.000000)">
                        <g id="Group-3">
                          <g id="Group-28" transform="translate(41.000000, 0.000000)">
                            <g id="Group-4">
                              <path d="M47.7366831,65.7690403 L47.8397201,65.8167837 C51.2785817,67.3934515 55.5789474,65.4223325 55.5789474,62.2667233 L55.5789474,4.10620801 C55.5789474,1.41666499 52.3690571,-0.548770296 49.0947686,0.137824795 C49.0589919,0.144645276 49.0246462,0.152602504 48.9903005,0.159422985 C46.7277787,0.636856658 45.1578947,2.26922512 45.1578947,4.1278062 L45.1578947,62.2201167 C45.1578947,63.6842466 46.1410399,65.0369753 47.7366831,65.7690403" id="Fill-24" fill="#667eea"></path>
                              <path d="M30.3940213,58.8340731 L30.3940213,58.8340731 C33.8686596,60.4001528 38.2105263,58.4417148 38.2105263,55.3095553 L38.2105263,14.5747152 C38.2105263,11.4324953 33.8071235,9.42934404 30.368262,11.0613757 C30.3167435,11.085968 30.2637939,11.1116781 30.2122754,11.1362703 C28.6867547,11.8639776 27.7894737,13.1818991 27.7894737,14.575833 L27.7894737,55.3095553 C27.7894737,56.763852 28.7826363,58.1074836 30.3940213,58.8340731" id="Fill-25" fill="#2D3748"></path>
                              <path d="M13.0012721,44.8406391 L13.0985848,44.881846 C16.5403085,46.3880641 20.8421053,44.5066469 20.8421053,41.4942107 L20.8421053,24.8791825 C20.8421053,21.1694833 14.672762,19.5472354 11.6202894,22.4468951 C11.5873748,22.477258 11.5558912,22.5076209 11.5229766,22.5390682 C10.7988551,23.2265717 10.4210526,24.0897464 10.4210526,24.9713557 L10.4210526,41.4530038 C10.4210526,42.8496985 11.4041978,44.1422918 13.0012721,44.8406391" id="Fill-26" fill="#2D3748"></path>
                              <path d="M106.360054,35.3729573 L106.281962,35.4085276 C103.520048,36.6744666 103.520048,39.8411382 106.281962,41.1079892 L122.29992,48.4518945 C125.618812,49.9732102 129.518796,47.4139705 128.296893,44.5291254 C128.284261,44.4990274 128.272777,44.4698415 128.258996,44.4406556 C127.939739,43.6891183 127.270219,43.0616212 126.405469,42.6657873 L110.502352,35.3729573 C109.220732,34.7855908 107.641674,34.7855908 106.360054,35.3729573" id="Fill-27" fill="#2D3748"></path>
                              <path d="M130.048415,62.3625671 L96.2310248,42.4526817 C95.0246494,41.7411817 93.5374705,41.7411817 92.3310951,42.4515803 L92.2662943,42.4912305 C89.6656212,44.0199643 89.6656212,47.8473057 92.2662943,49.3782423 L126.146325,69.3266765 C128.700558,70.8300783 131.949239,69.0116781 131.99676,66.0037732 C131.99784,65.9321826 131.99892,65.8616934 132,65.7890015 C131.303391,64.566455 130.746104,63.586215 130.048415,62.3625671" id="Fill-28" fill="#2D3748"></path>
                              <path d="M126.545829,79.9951988 L78.9470307,52.9204373 C77.7263522,52.2247191 76.2210311,52.2247191 75.0003526,52.9204373 L74.9204338,52.9646612 C72.28968,54.4618035 72.28968,58.202502 74.9204338,59.6996443 L122.575066,86.8078435 C124.775572,88.0601361 127.589153,86.9664025 128.332508,84.5718377 C128.340172,84.5459505 128.347835,84.5200633 128.356593,84.4941761 C128.889751,82.7662064 128.134353,80.8990931 126.545829,79.9951988" id="Fill-29" fill="#667eea"></path>
                              <path d="M115.525044,84.4695332 L115.427731,84.4228779 C111.986007,82.7612316 107.684211,84.8367942 107.684211,88.160087 L107.684211,107.463418 C107.684211,111.460221 113.604548,113.296526 116.758626,110.293839 C116.79011,110.262735 116.824455,110.231632 116.855939,110.200528 C117.67308,109.420547 118.105263,108.40729 118.105263,107.370107 L118.105263,88.2067423 C118.105263,86.6647248 117.122118,85.2387475 115.525044,84.4695332" id="Fill-30" fill="#2D3748"></path>
                              <path d="M98.1566227,73.9527353 L98.0535856,73.9056234 C94.6147241,72.3498092 90.3157895,74.2948574 90.3157895,77.4076075 L90.3157895,118.196413 C90.3157895,121.259808 94.5217046,123.250846 97.9333757,121.755604 C97.9677214,121.7399 98.0020671,121.724196 98.0364128,121.710736 C99.6864366,120.982745 100.736842,119.635569 100.736842,118.152666 L100.736842,77.4547194 C100.736842,76.0099547 99.7522659,74.6751177 98.1566227,73.9527353" id="Fill-31" fill="#2D3748"></path>
                              <path d="M80.7910638,63.4894325 L80.6865956,63.4410572 C77.2477341,61.8423673 72.9487995,63.8407296 72.9487995,67.0369575 L72.9473684,125.090823 C72.9473684,127.765288 76.0456352,129.742918 79.2841469,129.141682 C79.3184926,129.134771 79.3542694,129.12786 79.387184,129.123253 C81.7226904,128.686723 83.3684211,127.000497 83.3684211,125.071242 L83.3684211,67.0853329 C83.3684211,65.6018224 82.3867069,64.2311877 80.7910638,63.4894325" id="Fill-32" fill="#667eea"></path>
                              <path d="M62.0051176,16.9520409 L81.2253922,7.11666225 C84.6494344,5.36489674 83.7925325,0.803775454 79.9192407,0.0969596618 C79.876455,0.0885326478 79.8348578,0.0811590107 79.7920722,0.0727319967 C78.774724,-0.110555556 77.7122131,0.0579847224 76.8125255,0.517256981 L57.7217964,10.2862729 C56.3954406,10.9646475 55.5789474,12.2181658 55.5789474,13.574915 L55.5789474,13.6644521 C55.5789474,16.5865191 59.149174,18.4130744 62.0051176,16.9520409" id="Fill-33" fill="#2D3748"></path>
                              <path d="M61.5728514,37.8483991 L98.7301785,14.9806168 C101.341911,13.3723566 101.428378,9.3381168 98.8476843,7.67313617 C98.8221877,7.65659271 98.7955827,7.64004926 98.7700861,7.6235058 C97.5063446,6.81051313 95.9344275,6.76442779 94.6562748,7.55024193 L57.5776544,30.3719388 C56.3405179,31.1329378 55.5789474,32.5379498 55.5789474,34.0599477 L55.5789474,34.1592085 C55.5789474,37.4383577 58.9090172,39.4885645 61.5728514,37.8483991" id="Fill-34" fill="#2D3748"></path>
                              <path d="M65.1001442,55.3335372 L116.087375,25.2255924 C118.332124,23.9009344 118.788456,20.7848994 117.029118,18.8402373 C117.010104,18.8196467 116.992209,18.7990562 116.972077,18.7773217 C115.694796,17.3691576 113.626763,17.0602995 111.999404,18.0211914 L61.0692148,48.0948185 C59.8210135,48.8326462 59.0526316,50.1927658 59.0526316,51.6661333 L59.0526316,51.7622225 C59.0526316,54.9365973 62.4124851,56.9201526 65.1001442,55.3335372" id="Fill-35" fill="#667eea"></path>
                              <path d="M63.5817906,77.3750918 L15.8603948,104.504911 C13.6701403,105.751741 13.2277306,108.682113 14.9516026,110.504073 C14.9701271,110.523387 14.9886517,110.542701 15.0071762,110.563088 C16.2526792,111.877517 18.262047,112.161863 19.843171,111.262686 L67.5089932,84.1639845 C68.7250748,83.4740433 69.4736842,82.1971692 69.4736842,80.8151408 L69.4736842,80.7250085 C69.4736842,77.7474239 66.2002889,75.886836 63.5817906,77.3750918" id="Fill-36" fill="#667eea"></path>
                              <path d="M67.1511181,91.4258477 L33.2042548,113.935424 C30.6737542,115.61324 30.5944416,119.829323 33.1013628,121.556379 C33.1270858,121.573612 33.151737,121.590846 33.17746,121.608079 C34.3971591,122.447603 35.9105292,122.491918 37.1430898,121.675783 L71.0149277,99.2142151 C72.2110474,98.4214684 72.9473684,96.9566103 72.9473684,95.3711168 L72.9473684,95.268946 C72.9473684,91.8517645 69.7266339,89.7172569 67.1511181,91.4258477" id="Fill-37" fill="#2D3748"></path>
                              <path d="M66.8100375,115.718462 L50.678986,123.140443 C47.3999205,124.649968 48.232447,128.578348 51.9447893,129.172215 C51.9833532,129.178543 52.0219171,129.183966 52.060481,129.190294 C53.0268469,129.343054 54.0329109,129.198429 54.8858536,128.805229 L70.9012134,121.437482 C72.1681508,120.855366 72.9473684,119.777909 72.9473684,118.613676 L72.9473684,118.542267 C72.9473684,116.033021 69.5378662,114.463839 66.8100375,115.718462" id="Fill-38" fill="#2D3748"></path>
                              <path d="M5.4991479,52.9000929 L52.9162103,79.812814 C54.1649414,80.5218548 55.7037364,80.5218548 56.9524675,79.812814 L57.034223,79.7676732 C59.7254344,78.2394922 59.7254344,74.4201406 57.034223,72.8930606 L9.55780385,45.9462086 C7.25969071,44.6426306 4.32097294,45.8328061 3.63221096,48.3518826 C3.62549133,48.3783065 3.61765176,48.4047304 3.60981219,48.4322553 C3.13943816,50.1674233 3.91667525,52.001681 5.4991479,52.9000929" id="Fill-39" fill="#667eea"></path>
                              <path d="M36.2617001,90.2708218 L36.3445958,90.2181072 C38.8325032,88.6286495 38.8325032,84.6590162 36.3445958,83.0695585 L5.59650571,63.4368339 C3.10548972,61.8462303 -0.00620787643,63.8436526 0,67.0260059 C0,67.0615309 0,67.0970559 0,67.1337268 C0.00311789059,68.6040039 0.713948577,69.9551002 1.8661989,70.6908117 L32.5303571,90.2708218 C33.6846798,91.0088252 35.1073773,91.0088252 36.2617001,90.2708218" id="Fill-40" fill="#2D3748"></path>
                              <path d="M22.2111659,97.320661 L22.2865419,97.281145 C24.9922053,95.873769 24.9922053,92.3568488 22.2865419,90.9494728 L9.57948667,84.3432154 C6.24156432,82.607553 2.35688421,85.6442023 3.7732793,88.8733653 C3.78790451,88.9078151 3.80252972,88.9412517 3.81715493,88.9746882 C4.1535347,89.7356237 4.77791856,90.3668658 5.56542973,90.7751973 L18.1521083,97.320661 C19.4087511,97.9741941 20.9556481,97.9741941 22.2111659,97.320661" id="Fill-41" fill="#2D3748"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-2/5 flex items-center justify-end">
              <div className="cursor-pointer py-6 mr-0 px-4 sm:px-10 border-l-2 border-gray-300 p-1 text-gray-600 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <circle cx="10" cy="10" r="7"></circle>
                  <line x1="21" y1="21" x2="15" y2="15"></line>
                </svg>
              </div>
              <div className="relative cursor-pointer py-6 mr-0 px-4 sm:px-10 border-l-2 border-r-2 border-gray-300 p-1 text-gray-600 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                </svg>
                <div className="absolute top-0 right-0 mt-6 mr-4 sm:mr-10 pr-1 pt-1">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                </div>
              </div>
              <div className="ml-6 relative">
                <div className="flex items-center">
                  <div className="cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                    <img className="rounded" src="https://images.unsplash.com/photo-1586548634342-04801afc8b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=36&q=80" alt="" data-pagespeed-url-hash="1510786993" onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);" /></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 text-gray-600 icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-5 mt-10 bg-gray-200">
        <div className="container mx-auto">
          <div className="mb-10 bg-white">
            <h1 className=" text-3xl text-left p-10">Marketing</h1>
            <hr></hr>
            <ul className="mt-5 flex flex-wrap justify-center">
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
        </div>
        
        <div className="container mx-auto">
          <div className="mt-10 mb-10 bg-white">
            <h1 className="text-3xl text-left p-10 ">Application UI</h1>
            <hr></hr>
            <ul className="mt-5 flex flex-wrap justify-center">
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
        </div>
      </div>

    </div>
  );
}
export default Home