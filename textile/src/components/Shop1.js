import React, { useState } from 'react';


const Shop = () => {
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setaddress] = useState('');
  const [quantity, setQuantity] = useState('');
  const [name, setname] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // You can perform further actions with the user inputs here
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Quantity:', quantity);
    console.log('Name:', name);
    
    

  };

  // JSX for the component with Tailwind CSS classes
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Invoice generator</h2>
      <h4>Banaras silk saree</h4>
      <form onSubmit={handleSubmit}>
      <label className="block mb-2">
          Name:
          <input
            type="tel"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </label>
        <label className="block mb-2">
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
          Email Address:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
           Address:
          <input
            type="address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </label>
<div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-Purple-600"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
    
  );
};

export default Shop;
