import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const inactive =
    "cursor-pointer border-r px-5 py-2 opacity-40 hover:opacity-70";
    const active = "cursor-pointer border-r px-5 py-2 hover:opacity-70";

    const mobileInactive = "cursor-pointer border-r hover:opacity-70";
    const mobileActive = "cursor-pointer border-r opacity-40 hover:opacity-70";
    
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
      if (showMobileMenu) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto"; // reset when component unmounts
      };
    }, [showMobileMenu]);

  return (
    <>
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
                <a href="tel:+2348107451500" className="text-white">
                  +2348107451500
                </a>
                <a href="tel:+2348107451500" className="text-white">
                  +2349114560246
                </a>
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
                <a href="mailto:info@acestrategy.org" className="text-white">
                  info@acestrategy.org
                </a>
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
              <a
                href="https://goo.gl/maps/TthEZk2vASwnn37e8"
                target="_blank"
                rel="noreferrer"
                className="text-right text-sm capitalize text-white"
              >
                House B3, Lumen Court Estate, Wuye, Abuja - FCT
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Menu --> */}
        <div className="grid grid-cols-2 p-6 md:p-10 ">
          <div onClick={() => router.push("/")} className="cursor-pointer">
            <img
              src="https://res.cloudinary.com/daojlqwdo/image/upload/v1690942832/ace/logo-wide_wagwqm.png"
              className="w-20 md:w-auto"
              alt=""
            />
          </div>
          <div className="hidden items-center place-self-end self-center text-sm font-medium uppercase tracking-widest md:flex">
            <div
              onClick={() => router.push("/")}
              className={router.pathname == "/" ? active : inactive}
            >
              Home
            </div>
            <div
              onClick={() => router.push("/who-we-are")}
              className={router.pathname == "/who-we-are" ? active : inactive}
            >
              About Us
            </div>
            <div
              onClick={() => router.push("/framework")}
              className={router.pathname == "/framework" ? active : inactive}
            >
              Framework
            </div>
            <div
              onClick={() => router.push("/projects")}
              className={router.pathname == "/projects" ? active : inactive}
            >
              Projects
            </div>
            <div
              onClick={() => router.push("/careers")}
              className={router.pathname == "/careers" ? active : inactive}
            >
              Careers
            </div>
          </div>

          <div
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="flex place-self-end md:hidden"
          >
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

      {showMobileMenu && (
        <div className="fixed left-0 top-0 flex h-screen w-full flex-col justify-between bg-dark-blue pt-5 text-white">
          <div>
            <div
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="grid place-items-end p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 cursor-pointer hover:opacity-50"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="grid space-y-4 p-6 font-medium uppercase tracking-widest">
              <div
                onClick={() => router.push("/")}
                className={
                  router.pathname == "/" ? mobileActive : mobileInactive
                }
              >
                Home
              </div>
              <div
                onClick={() => router.push("/who-we-are")}
                className={
                  router.pathname == "/who-we-are"
                    ? mobileActive
                    : mobileInactive
                }
              >
                About Us
              </div>
              <div
                onClick={() => router.push("/framework")}
                className={
                  router.pathname == "/framework"
                    ? mobileActive
                    : mobileInactive
                }
              >
                Framework
              </div>
              <div
                onClick={() => router.push("/projects")}
                className={
                  router.pathname == "/projects" ? mobileActive : mobileInactive
                }
              >
                Projects
              </div>
              <div
                onClick={() => router.push("/careers")}
                className={
                  router.pathname == "/careers" ? mobileActive : mobileInactive
                }
              >
                Careers
              </div>
            </div>
          </div>

          <div className="mt-28 space-y-10 bg-gradient-to-r from-dark-blue to-blue-500 px-10 pb-10 pt-10 text-white">
            <div className="border-white border-opacity-30 space-y-6">
              <div className="text-xs">
                Ace Strategy and Consult Limited 2023 &copy; All rights
                reserved.
              </div>
              <div className="flex items-center space-x-6">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                </a>

                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                  </svg>
                </a>

                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
