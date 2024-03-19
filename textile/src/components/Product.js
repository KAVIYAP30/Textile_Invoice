import React from 'react';
import {Link} from 'react-router-dom'

const Product = () => {
  return (
    <div>
    <div className="flex font-sans">
      <div className="flex-none w-48 relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHUkmqY55Y3MPxNHQIlXWbxcTz9zEXzmqug&usqp=CAU"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
          Tant saree
          
          </h1>
          <div className="text-lg font-semibold text-slate-500">1500</div>
          
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-sm">
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="Premium"
                defaultChecked
              />
              
            </label>
            
          </div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
          <Link to='/Shop'>
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
            Buy now  
            </button>
            </Link>
            
          </div>
          <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">

          </button>
        </div>
        <p class="text-sm text-slate-700">
        Step into regal allure with our Royal Silk Elegance Saree, a masterpiece that seamlessly combines tradition with contemporary grace. This exquisite saree is crafted with meticulous attention to detail, making it a perfect choice for special occasions and celebrations.    </p>
        </form>
        </div>
        <Pro2/>
        
      </div>


);
};

const Pro2 = () => {
    return (
      <div>
        <div>
          <div className="flex font-sans">
            <div className="flex-none w-48 relative">
              <img
                src="https://vannamayil.com/cdn/shop/products/Silkcottonplainsaree_9.jpg?v=1660131487"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Banaras silk saree
                </h1>
                <div className="text-lg font-semibold text-slate-500">2500</div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm">
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      value="Premium"
                      defaultChecked
                    />
                  </label>
                </div>
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <Link to="/Shop1">
                    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                      Buy now 
                    </button>
                  </Link>
                </div>
                <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                  {/* Content for the button */}
                </button>
              </div>
              <p className="text-sm text-slate-700">
              Step into regal allure with our Royal Silk Elegance Saree, a masterpiece that seamlessly combines tradition with contemporary grace. This exquisite saree is crafted with meticulous attention to detail, making it a perfect choice for special occasions and celebrations.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  };
  


  






export default Product;

