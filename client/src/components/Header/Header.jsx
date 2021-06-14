import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <header className="text-black body-font">
        <div className="container mx-auto flex p-5 md:flex-row justify-between items-center">
          <Link to="/" className="flex title-font font-bold items-center">
            <img src="" alt="" />
            <span className="text-xl">Driftchirp</span>
          </Link>
          <nav className="flex flex-wrap items-center text-base justify-center">
            <Link to="/login">
              <button className="inline-flex items-center font-bold bg-gray-100 border-0 py-2 px-4 focus:outline-none  hover:bg-gray-200 rounded-full text-base mr-2">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="inline-flex items-center font-bold bg-blue text-white border-0 py-2 px-4 focus:outline-none hover:bg-blue-light rounded-full text-base">
                Sign Up
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
