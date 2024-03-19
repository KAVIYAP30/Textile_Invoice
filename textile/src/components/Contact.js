import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="mb-4 flex items-center">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height="24"
              width="24"
              viewBox="0 0 24 24"
            >
              <path d="M22 4H2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H2V8l10 6 10-6v10z" />
            </svg>
          </div>
          <p>niranjantextiles@gmail.com</p>
        </div>
        <div className="mb-4 flex items-center">
          <div className="mr-4">
            📱
          </div>
          <p>9443391460</p>
        </div>
        <div className="mb-4 flex items-center">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height="24"
              width="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v4h-2zm0 6h2v2h-2z" />
            </svg>
          </div>
          <p>21,Krishnan Pudhur,Ammapet Salem-636 003</p>
        </div>
        {/* Add more address information as needed */}
      </div>
    </div>
  );
};

export default Contact;
