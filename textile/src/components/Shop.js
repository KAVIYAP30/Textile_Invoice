import React, { useState } from 'react';

const Shop = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Constructing the email body with form data
    const emailBody = `
      Name: ${name}
      Phone Number: ${phoneNumber}
      Email: ${email}
      Address: ${address}
      Quantity: ${quantity}
    `;

    // Constructing the mailto URL
    const mailtoUrl = `mailto:${email}?subject=Order&body=${encodeURIComponent(emailBody)}`;

    // Opening the default email client with the pre-filled email
    window.location.href = mailtoUrl;
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
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shop;
