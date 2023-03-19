import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Particle from '../../components/Hero/Particle'
import { AuthContext } from '../../contexts/AuthContext'
import { FaSpinner } from "react-icons/fa";


const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  // create a isLoading state and setIsLoading setter using the useState hook, initialize to false
  const { user, login, error } = useContext(AuthContext);
  // use the useContext hook to get the user, login, and error values from the AuthContext
  const navigate = useNavigate();
  // use the useNavigate hook to get the navigate function

  useEffect(() => {
    // use the useEffect hook to check if user exists
    if (user) {
      // if user exists
      navigate("/"); // navigate to the home page
    }
  }, [user]) // run the effect only when user changes

  const handleSubmit = async (e) => {
    // define a handleSubmit function that takes an event argument
    e.preventDefault(); // prevent default form submission behavior
    setIsLoading(true); // set isLoading state to true
    // get the email value from the form
    const email = e.target.email.value;
    // get the password value from the form
    const password = e.target.password.value;

    // try to log in the user
    try {
      // call the login function with email and password arguments
      await login(email, password);
      // reset the form
      e.target.reset();
      // set isLoading state to false
      setIsLoading(false);
      // if an error occurs
    } catch (error) {
      // set isLoading state to false
      setIsLoading(false);
    }

  }
  return (
    <>
      <Navbar />
      <Particle />
      <section className="pt-[10vh] flex items-center justify-center">
        <div className="container min-h-[100vh] flex items-center justify-center p-5">
          <form onSubmit={handleSubmit} className="w-full max-w-md p-5 border rounded-xl shadow-xl glassmorphism">


            <h1 className="text-center text-6xl text-primary-500 font-bold">SIGN IN</h1>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>

              <input type="email" name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary-300" placeholder="Email address" />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>

              <input type="password" name='password' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary-300" placeholder="Password" />
            </div>

            <div className="mt-6">
              {error && <p className='text-red-500 mb-3'>{error}</p>}
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-primary-500 rounded-lg hover:bg-primary-400 hover:shadow-xl hover:scale-105 transition-all">
                <span className='w-[max-content] mx-auto flex items-center gap-2'> Sign in {isLoading && <FaSpinner className="animate-spin" />}</span>
              </button>

              {/* <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>

              <Link href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 border rounded-xl hover:bg-primary-100 hover:shadow-xl hover:scale-105 transition-all">
                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                  <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                  <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                  <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                  <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                </svg>

                <span className="mx-2">Sign in with Google</span>
              </Link> */}

              <div className="mt-6 text-center text-secondary-500">
                <Link to="/register" className="text-sm hover:underline">
                  Don’t have an account yet? Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Login