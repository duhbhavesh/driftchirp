export default function Header() {
  return (
    <>
      <header class="text-black body-font">
        <div class="container mx-auto flex p-5 md:flex-row justify-between items-center">
          <a href="#" class="flex title-font font-bold items-center">
            <img src="" alt="" />
            <span class="text-xl">Driftchirp</span>
          </a>
          <nav class="flex flex-wrap items-center text-base justify-center">
            <button class="inline-flex items-center font-bold bg-gray-100 border-0 py-2 px-4 focus:outline-none  hover:bg-gray-200 rounded-full text-base mr-2">
              Log In
            </button>
            <button class="inline-flex items-center font-bold bg-blue text-white border-0 py-2 px-4 focus:outline-none hover:bg-blue-light rounded-full text-base">
              Sign Up
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}
