import React from 'react';

const Home = () => {
  const containerStyle = {
    position: 'relative',
    height: '100vh',
    zIndex: '1',
  };

  const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://images.unsplash.com/photo-1613076321656-23dcdd3aea92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRleHRpbGV8ZW58MHx8MHx8fDA%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '0.5',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: '2',
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundImageStyle}></div>
      <div style={contentStyle}>
        <h2 className="font-bold text-cyan-800 font-sans md:font-serif">Niranjan Textiles</h2>
        <h5 className="font-bold text-pink-600 font-sans md:font-serif">Discover a world of fabrics and fashion at our textile shop, where quality meets creativity</h5>

        <nav className="flex justify-end">
          <ul className="flex space-x-4">
            <li>
              <a href="/Login" className="text-black font-bold hover:text-blue-300 transition duration-300 ease-in-out">
                Login
              </a>
            </li>
            <li>
              <a href="/Signup" className="text-black font-bold hover:text-blue-300 transition duration-300 ease-in-out">
                SignUp
              </a>
            </li>
            <li>
              <a href="/Contact" className="text-black font-bold hover:text-blue-300 transition duration-300 ease-in-out">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/Product" className="text-black font-bold hover:text-blue-300 transition duration-300 ease-in-out">
                Products
              </a>
            </li>
          </ul>
        </nav>
      </div>
    
    </div>
  );
}

export default Home;


