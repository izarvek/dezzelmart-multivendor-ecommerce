import React, { useState, useCallback } from 'react';
import api from "../../utils/Axios"; 

const UserSignOut = () => {
  const [phase, setPhase] = useState('confirmation'); 
  const [error, setError] = useState(null);

  const handleLogout = useCallback(async () => {
    setPhase('signingOut'); 

    try {
      // Using user-specified Axios method and endpoint
      await api.get("/api/auth/user/logout", {}); 
      
      setPhase('success');
      setError(null);
  
      setTimeout(() => {
        localStorage.removeItem('token')
        window.location.href = '/'; 
      }, 1500);

    } catch (err) {
      // Axios error handling
      const errMsg = err.response?.data?.message || err.message || 'Network Error: Could not reach the server.';
      setError(errMsg);
      setPhase('error');
      console.error('Logout Error:', errMsg);
    }
  }, []); 

  const renderContent = () => {
    switch (phase) {
      case 'confirmation':
        return (
          <>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Confirm Sign Out
            </h2>
            <p className="text-lg sm:text-xl font-normal mt-2 text-center text-gray-600">
              Are you sure you want to log out of your account?
            </p>
            <div className="space-y-3 pt-4 w-full">
              <button
                onClick={handleLogout}
                className="w-full py-3 px-4 rounded-lg text-white text-lg font-medium bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
              >
                Yes, Sign Me Out
              </button>
              <button
                onClick={() => window.history.back()} 
                className="w-full py-3 px-4 rounded-lg text-gray-800 text-lg font-medium bg-white border-[1px] border-gray-300 hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                No, Stay Logged In
              </button>
            </div>
          </>
        );

      case 'signingOut':
        return (
          <>
            <svg 
              className="mx-auto h-12 w-12 text-indigo-600 animate-spin" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-4">
              Signing Out...
            </h2>
          </>
        );

      case 'success':
        return (
          <>
            <h2 className="text-3xl font-extrabold text-green-600">
              Successfully Signed Out!
            </h2>
            <p className="text-lg text-green-700 font-medium">
              You have been securely logged out. Redirecting now...
            </p>
             <button
              onClick={() => window.location.href = '/'}
              className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Go to Home/Login
            </button>
          </>
        );

      case 'error':
        return (
          <>
            <h2 className="text-3xl font-extrabold text-red-600">
              Sign Out Failed
            </h2>
            <div className="text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-200 mt-2">
              Error Details: {error}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Please try again or check your network connection.
            </p>
            <button
              onClick={() => setPhase('confirmation')} 
              className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Retry Sign Out
            </button>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className=" bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 py-8">
      <div className="max-w-md w-full bg-white rounded-xl p-8 sm:p-10 space-y-4 sm:space-y-6 text-center border-[1px] border-gray-200">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserSignOut;