export default function Header() {
  return (
    <div>
      {/* <!-- Header --> */}
      <div className="bg-gradient-to-r from-dark-blue to-blue-500 p-6 md:p-10">
        <div className="grid grid-cols-2">
          <div className="items-center space-y-2 text-sm md:flex md:space-x-10 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 text-light-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div className="text-white">+2348107451500</div>
              <div className="text-white">+2349114560246</div>
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 text-light-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="text-white">info@acestrategy.org</div>
            </div>
          </div>

          <div className="hidden items-center space-x-4 place-self-end md:flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 text-light-blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <div className="text-right text-sm capitalize text-white">
              2 Limpopo Street Maitama, Off Yedseram, White building, Abuja.
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Menu --> */}
      <div className="grid grid-cols-2 p-6 md:p-10">
        <div>
          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1690942832/ace/logo-wide_wagwqm.png"
            className="w-20 md:w-auto"
            alt=""
          />
        </div>
        <div className="hidden items-center place-self-end self-center text-sm font-medium uppercase tracking-widest md:flex">
          <div className="cursor-pointer border-r px-5 py-2 opacity-40 hover:opacity-70">
            Home
          </div>
          <div className="cursor-pointer border-r px-5 py-2 hover:opacity-70">
            About Us
          </div>
          <div className="cursor-pointer border-r px-5 py-2 opacity-40 hover:opacity-70">
            Framework
          </div>
          <div className="cursor-pointer border-r px-5 py-2 opacity-40 hover:opacity-70">
            Projects
          </div>
          <div className="cursor-pointer px-5 py-2 opacity-40 hover:opacity-70">
            Careers
          </div>
        </div>

        <div className="flex place-self-end md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-6 w-6 text-dark-blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
