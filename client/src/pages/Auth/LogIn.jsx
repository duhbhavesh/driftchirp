import React from 'react'

export default function LogIn() {
  return (
    <>
      <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg lg:max-w-4xl mt-20">
          <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: "url('https://images.unsplash.com/photo-1609270460854-e8ea8c0b591f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1023&q=80')"}}></div>
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 pt-10 pb-14">
              <h2 className="text-2xl font-bold text-center text-black mb-8">Login to Driftchirp</h2>
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-black-light" for="input-email">Email Address</label>
                  <input id="input-email" placeholder="name@example.com" className="block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2" type="email" />
              </div>
              <div className="mt-4">
                  <div className="flex justify-between">
                      <label className="block mb-2 text-sm font-medium text-black-light" for="input-password">Password</label>
                      <a href="/" className="text-xs text-black-lightest hover:underline">Forget Password?</a>
                  </div>
                  <input id="input-password" placeholder="password" className="block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2" type="password" />
              </div>
              <div className="mt-8">
                  <button className="w-full px-4 py-3 tracking-wide font-bold text-white transition-colors duration-200 transform bg-blue rounded-full hover:bg-blue-light focus:outline-none focus:bg-blue-dark">
                      Log In
                  </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b md:w-1/4"></span>
                  <a href="/" className="text-sm text-black hover:underline">Or Create an Account</a>
                  <span className="w-1/5 border-b md:w-1/4"></span>
              </div>
          </div>
      </div>
    </>
  )
}
