import React, { useState, useCallback} from 'react';
import { LogIn, Loader, Mail, Lock, } from 'lucide-react';
import { Link } from 'react-router-dom'
const mockAxios = {
  interceptors: {
    request: { use: (onFulfilled, onRejected) => {} },
    response: { use: (onFulfilled, onRejected) => {} },
  },
  post: (url, data, config) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.email && data.password) {
          resolve({
            status: 200,
            data: { 
              token: 'mock-jwt-token-12345', 
              user: data.email, 
              message: 'Login successful!' 
            },
          });
        } else {
          reject({
            response: { 
              status: 401, 
              data: { error: 'Invalid credentials or missing fields.' } 
            },
          });
        }
      }, 1500);
    });
  }
};

const axiosInstance = mockAxios;

axiosInstance.defaults = {
  ...axiosInstance.defaults,
  baseURL: 'https://api.yourapp.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 5000,
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    console.log(`[Axios Request] Starting request to: ${config.url}`);
    
    return config;
  },
  (error) => {
    console.error('[Axios Request Error]', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`[Axios Response] Successful response from: ${response.config.url}`);
    
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized. Redirecting to login or logging out...');
    }
    
    console.error('[Axios Response Error]', error.response?.data || error.message);
    
    return Promise.reject(error);
  }
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });
    
    if (!email || !password) {
      setMessage({ text: 'Please enter both email and password.', type: 'error' });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      
      const { token, message: successMessage } = response.data;
      localStorage.setItem('authToken', token);
      
      setMessage({ text: successMessage || 'Logged in successfully!', type: 'success' });
      setEmail('');
      setPassword('');

    } catch (error) {
      const errorMsg = error.response?.data?.error || 'An unexpected error occurred during login.';
      setMessage({ text: errorMsg, type: 'error' });
    } finally {
      setIsLoading(false);
    }
  }, [email, password]);

  const messageClasses = message.type === 'success' 
    ? 'bg-green-100 border-green-400 text-green-700' 
    : 'bg-red-100 border-red-400 text-red-700';

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4 font-inter ">
 
      <div className="w-full max-w-md bg-white p-8 shadow-2xl rounded-xl transition-all duration-300 hover:shadow-3xl">
        
        <div className="flex flex-col items-center mb-6">
          <LogIn className="w-10 h-10 text-indigo-600 mb-3" />
          <h1 className="text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Sign in to continue to your dashboard.
          </p>
        </div>

        {message.text && (
          <div className={`p-3 mb-4 rounded-lg border text-sm ${messageClasses}`} role="alert">
            {message.text}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                placeholder="you@example.com"
              />
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                placeholder="********"
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader className="w-5 h-5 mr-2 animate-spin" />
                Signing In...
              </>
            ) : (
              <>
                <LogIn className="w-5 h-5 mr-2" />
                Sign In
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account? 
          <Link to={'/register'} href="#" className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
