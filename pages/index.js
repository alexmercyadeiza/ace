import Footer from "@/components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      {/* <!-- Hero --> */}
      <div className="grid pb-20 md:grid-cols-2">
        <div className="space-y-10 place-self-center px-6 py-10 md:px-28 md:py-40">
          <div className="text-4xl font-semibold capitalize text-dark-blue md:text-6xl">
            ACE strategy & Consult limited
          </div>
          <div className="text-xl text-gray-700 md:text-2xl">
            We empower individuals and organizations with innovative solutions
            and real-time insights. Focused on data-driven decisions, we enhance
            systems through evidence-backed strategies and prioritize
            human-centric resilience.
          </div>
          <div className="inline-flex cursor-pointer bg-dark-blue px-12 py-6 text-sm font-semibold uppercase tracking-widest text-white hover:bg-light-blue hover:text-dark-blue">
            view our projects
          </div>
        </div>
        <div
          className="h-80 w-full place-self-center bg-slate-300 bg-cover bg-center bg-no-repeat md:h-3/5 md:p-10"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/daojlqwdo/image/upload/v1692577688/ace/pexels-monstera-9430883_bqsij3.png')`,
          }}
        ></div>
      </div>

      {/* <!-- Core Strength --> */}
      <div className="grid gap-10 bg-gradient-to-r from-dark-blue to-blue-500 px-6 py-10 md:grid-cols-5 md:gap-20 md:px-10 md:py-32">
        <div className="text-4xl font-bold capitalize text-white">
          Our core <br />
          strength
        </div>

        <div className="col-span-4 grid gap-10 md:grid-cols-3">
          <div className="space-y-6 bg-gray-200 p-6 md:p-10">
            <div className="">
              <svg
                width="24"
                height="24"
                className="fill-current text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M4.991 19.053c-.365-4.385 4.436-7.43 4.468-8.513.003-.084-.058-.09-.114-.088-.527.02-2.061 1.722-3.939 1.108-1.194-.389-1.89-1.705-1.96-2.805-.065-1.021.378-1.859 1.186-2.242.984-.466 1.279-1.209 1.592-1.997.182-.456.72-2.238 2.696-2.238.305 0 .578.044.821.086.119-.565-.254-1.828-.883-2.364 8.276.037 11.226 5.967 11.226 9.652 0 5.012-2.729 7.166-1.37 9.357 1.585.138 2.286 1.511 2.286 2.491 0 1.198-.953 2.5-2.5 2.5h-13c-1.196 0-2.5-.946-2.5-2.5 0-1.197.847-2.211 1.991-2.447zm14.009 2.447c0-.276-.223-.5-.5-.5h-13c-.276 0-.5.224-.5.5 0 .277.224.5.5.5h13c.277 0 .5-.223.5-.5zm-1.149-13.5c-.602-2.197-2.408-4.682-5.981-5.655.332 1.324-.543 2.323-2.416 2-.955-.169-.998-.027-1.371.911-.359.9-.9 2.262-2.594 3.065-.181.194.102 1.196.536 1.337.852.278 1.93-1.201 3.339-1.201 1.207 0 2.076 1.099 2.094 2.041.027 1.135-.914 2.111-2.003 3.239-1.392 1.444-2.678 3.247-2.467 5.263h9.503c-.256-.91-.156-2.205.423-4h-1.195c-.239 0-.5-.189-.5-.5 0-.31.26-.5.5-.5h1.541c.11-.319.222-.651.323-1h-1.251c-.31 0-.5-.259-.5-.5 0-.239.19-.5.5-.5h1.506c.068-.318.124-.65.166-1h-1.285c-.239 0-.5-.189-.5-.5 0-.31.26-.5.5-.5h1.36c.01-.382.008-.643-.034-1h-1.491c-.239 0-.5-.189-.5-.5 0-.31.26-.5.5-.5h1.297zm-7.911-2.684c.519 0 .94.378.94.842 0 .465-.421.842-.94.842-.518 0-.94-.377-.94-.842 0-.464.422-.842.94-.842z" />
              </svg>
            </div>

            <div className="text-2xl font-medium text-dark-blue">
              Strategy Development
            </div>

            <div className="text-gray-700">
              We aid organizations to design iterative, evidence-based,
              human-centred and actionable solutions.
            </div>

            <div className="hidden cursor-pointer font-medium hover:underline md:flex">
              Learn more
            </div>
          </div>
          <div className="space-y-6 bg-gray-200 p-6 md:p-10">
            <div className="">
              <svg
                width="24"
                height="24"
                className="fill-current text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M10.052 19.001l.051.002.051.003.05.004.051.006.05.007.049.008.049.01.049.01.048.012.048.013.047.014.046.015.047.016.045.018.045.018.045.02.044.02.043.022.043.022.043.024.041.025.041.025.04.027.04.027.039.028.038.03.037.03.037.031.036.032.035.032.034.034.034.034.032.035.032.036.031.037.03.037.03.038.028.039.027.04.027.04.025.041.025.041.024.043.022.042.022.044.02.044.02.045.018.045.018.045.016.047.015.046.014.047.013.048.012.048.01.049.01.049.008.049.007.05.006.051.004.05.003.051.002.051.001.052v1h1v2h-13v-2h1v-1l.001-.052.002-.051.003-.051.004-.05.006-.051.007-.05.008-.049.01-.049.01-.049.012-.048.013-.048.014-.047.015-.046.016-.047.018-.045.018-.045.02-.045.02-.044.022-.044.022-.042.024-.043.025-.041.025-.041.027-.04.027-.04.028-.039.03-.038.03-.037.031-.037.032-.036.032-.035.034-.034.034-.034.035-.032.036-.032.037-.031.037-.03.038-.03.039-.028.04-.027.04-.027.041-.025.041-.025.043-.024.043-.022.043-.022.044-.02.045-.02.045-.018.045-.018.047-.016.046-.015.047-.014.048-.013.048-.012.049-.01.049-.01.049-.008.05-.007.051-.006.05-.004.051-.003.051-.002.052-.001h7l.052.001zm-7.039 1.999h-.013v1h7v-1h-6.987zm9.356-20.999l.05.001.05.003.049.005.049.005.049.007.049.007.048.009.048.011.048.011.047.012.047.014.046.014.046.016.046.017.045.018.045.019.044.021.044.021.043.022.043.024.042.025.041.025.041.027.041.028.039.029.039.029.039.031.038.032.037.033.036.034.036.035 4.949 4.949.035.036.034.036.033.038.032.037.031.039.03.039.029.04.027.04.027.042.026.041.024.042.024.043.022.043.022.044.02.044.019.045.018.045.017.046.016.046.015.046.013.047.012.047.012.048.01.048.009.048.007.049.007.048.005.049.005.05.003.049.001.05.001.05-.001.061-.003.061-.004.06-.006.06-.008.059-.01.058-.011.058-.013.057-.015.056-.016.056-.018.055-.019.054-.02.053-.023.053-.023.051-.025.051-.027.05-.027.05-.029.048-.031.047-.031.046-.033.046-.034.044-.036.044-.036.042-.038.041-.038.041-.04.039-.041.038-.041.037-.043.035-.044.035-.044.033-.046.032-.046.031-.047.029-.049.029-.048.027-.05.025-.05.024-.051.023-.052.021-.052.02-.053.019-.054.017-.054.016-.054.014-.056.012-.055.011-.056.009-.057.008-.057.006-.057.005-.057.003-.058.001-.058-.001-.059-.002-.058-.004-.059-.006-.059-.008-.059-.009-.059-.012-.06-.013-.059-.015-1.219 1.22 2.099 1.947 1.696 1.57 1.33 1.229 1.003.924.714.656.463.424.249.227.075.068.05.051.049.052.047.053.045.054.045.055.042.056.041.056.04.057.038.058.037.059.035.059.034.06.032.061.031.061.028.062.028.063.026.063.024.064.023.064.02.065.02.065.018.066.016.066.014.067.013.067.011.067.009.068.008.067.006.069.005.068.002.069.001.069-.001.073-.003.072-.005.072-.006.071-.009.071-.011.07-.012.07-.014.069-.016.069-.017.068-.02.068-.021.066-.022.067-.025.065-.026.065-.027.064-.029.063-.031.062-.032.061-.034.061-.035.06-.036.059-.038.057-.04.057-.041.056-.042.055-.043.054-.045.052-.046.052-.047.05-.049.05-.05.048-.05.047-.052.045-.054.045-.054.043-.055.042-.057.04-.057.039-.058.038-.06.036-.06.035-.061.034-.063.031-.063.031-.063.028-.065.028-.066.025-.066.024-.067.023-.068.02-.068.019-.069.017-.07.016-.071.013-.071.012-.071.01-.073.008-.072.006-.074.005-.073.002h-.074l-.075-.001-.075-.004-.063-.005-.062-.006-.062-.007-.062-.009-.062-.011-.061-.012-.061-.013-.061-.015-.06-.017-.06-.018-.06-.019-.059-.021-.059-.022-.059-.024-.058-.025-.058-.026-.057-.028-.057-.03-.056-.031-.056-.032-.056-.033-.055-.035-.054-.037-.054-.037-.054-.039-.053-.041-.052-.042-.052-.043-.051-.044-.051-.046-.05-.047-.049-.049-.042-.044-.075-.082-.241-.269-.349-.392-.437-.495-1.071-1.216-1.213-1.38-1.213-1.381-1.068-1.218-1.133-1.292-1.313 1.312.015.061.013.061.011.061.009.06.007.061.006.06.003.059.002.06.001.059-.002.059-.003.058-.005.058-.006.058-.009.057-.009.056-.012.056-.012.056-.015.055-.016.054-.017.054-.019.053-.02.052-.022.052-.023.051-.025.05-.026.049-.027.049-.028.048-.03.046-.031.047-.032.045-.034.044-.035.043-.035.042-.037.042-.039.04-.039.039-.04.038-.041.037-.043.036-.043.035-.045.033-.045.033-.046.031-.047.029-.048.029-.049.027-.05.026-.051.024-.051.023-.053.022-.053.02-.053.019-.055.017-.055.016-.056.014-.056.013-.057.011-.058.009-.058.008-.059.006-.059.004-.06.003-.06.001-.05-.001-.05-.002-.05-.003-.05-.004-.049-.005-.049-.007-.048-.008-.049-.009-.048-.01-.047-.011-.047-.013-.047-.014-.047-.014-.046-.016-.045-.017-.045-.018-.045-.019-.044-.021-.044-.021-.043-.022-.043-.024-.042-.025-.041-.025-.041-.027-.041-.028-.039-.029-.04-.029-.038-.031-.038-.032-.037-.033-.036-.034-.036-.035-4.949-4.948-.004-.004-.035-.036-.033-.036-.033-.038-.032-.038-.031-.038-.029-.039-.029-.04-.028-.041-.026-.041-.026-.041-.024-.042-.023-.043-.023-.043-.021-.043-.02-.045-.019-.044-.018-.045-.017-.046-.015-.045-.015-.047-.013-.046-.013-.047-.011-.048-.01-.047-.009-.048-.008-.049-.006-.048-.005-.049-.005-.049-.003-.05-.001-.049-.001-.05.001-.05.001-.049.003-.05.004-.049.006-.049.006-.049.008-.048.009-.048.01-.048.011-.047.012-.047.014-.047.014-.047.016-.046.017-.045.018-.045.019-.045.02-.044.021-.044.023-.043.023-.043.025-.042.025-.042.027-.041.028-.04.029-.04.029-.04.031-.038.032-.038.033-.038.034-.036.035-.036.051-.049.052-.047.054-.045.054-.042.055-.041.056-.038.058-.036.058-.034.058-.032.06-.029.06-.028.061-.025.061-.023.062-.021.062-.019.063-.017.063-.015.063-.013.063-.01.064-.009.064-.006.063-.005.064-.002.064-.001.063.002.064.004.063.005.063.008.063.009.062.012.062.013.061.016 5.679-5.679-.016-.062-.013-.063-.012-.063-.01-.063-.007-.064-.006-.064-.003-.064-.002-.064.001-.064.003-.064.004-.064.007-.063.009-.064.011-.063.013-.063.015-.063.017-.063.019-.062.021-.061.023-.061.025-.06.028-.06.029-.059.032-.058.033-.057.036-.057.038-.055.04-.055.042-.053.044-.053.046-.051.048-.05.036-.035.036-.034.037-.033.038-.032.039-.031.039-.03.04-.029.04-.028.041-.027.042-.025.042-.025.043-.024.043-.022.044-.022.044-.02.045-.019.045-.018.046-.017.046-.016.046-.015.047-.013.047-.013.048-.011.048-.01.048-.009.049-.008.049-.007.049-.005.049-.005.05-.003.05-.001.05-.001.05.001zm-5.349 8.712l3.536 3.537 1.773-1.774 1.107 1.211 2.532 2.775 1.432 1.57 1.345 1.478.594.654.518.571.421.466.308.343.028.032.029.032.031.031.033.029.034.029.035.027.037.026.038.024.038.023.04.02.04.018.041.016.041.013.042.01.021.004.021.003.021.002.021.002.027.001.026.001.025-.001.025-.001.024-.003.024-.002.024-.004.023-.004.044-.011.041-.012.04-.015.037-.016.035-.017.033-.018.03-.019.029-.019.025-.019.024-.019.021-.018.018-.017.029-.028.027-.029.026-.031.023-.031.023-.032.02-.033.018-.034.017-.035.015-.035.013-.035.011-.037.009-.036.008-.037.005-.037.003-.038.001-.037-.001-.038-.003-.039-.005-.038-.007-.037-.009-.037-.011-.037-.014-.037-.015-.036-.016-.035-.019-.035-.021-.034-.022-.034-.025-.034-.026-.032-.028-.033-.03-.031-.078-.07-.041-.034-.024-.02-.016-.015-.189-.174-.217-.202-.242-.226-.265-.25-.591-.559-.656-.625-.705-.674-.735-.705-.748-.719-.744-.717-1.405-1.356-1.177-1.138-1.11-1.076 1.634-1.635-3.537-3.536-3.882 3.884zm-1.415 1.415l-1.411.003-.001.001 4.947 4.946.001-1.413-3.535-3.537h-.001zm6.714-6.716l-.002.003 3.536 3.536.002-.002 1.412-.002-4.948-4.948v1.413z" />
              </svg>
            </div>

            <div className="text-2xl font-medium text-dark-blue">
              Policy <br />
              Development
            </div>

            <div className="text-gray-700">
              We support clients to develop policies using global standards and
              best practices.
            </div>

            <div className="hidden cursor-pointer font-medium hover:underline md:flex">
              Learn more
            </div>
          </div>
          <div className="space-y-6 bg-gray-200 p-6 md:p-10">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-gray-700"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M23.948.042c-.413-.028-.817-.042-1.214-.042-8.6 0-13.497 6.557-15.278 11.833l4.727 4.727c5.428-1.944 11.817-6.66 11.817-15.168 0-.44-.017-.89-.052-1.35zm-11.277 14.178l-2.883-2.883c1.221-2.859 4.691-8.945 12.199-9.32-.251 5.775-4.041 9.932-9.316 12.203zm5.471 1.538c-.547.373-1.09.71-1.628 1.011-.187.891-.662 1.842-1.351 2.652-.002-.576-.162-1.156-.443-1.738-.495.225-.966.418-1.414.588.66 1.709-.012 2.971-.915 4.154 1.296-.098 2.656-.732 3.728-1.805 1.155-1.155 1.967-2.823 2.023-4.862zm-11.82-6.469c-.579-.28-1.158-.438-1.732-.441.803-.681 1.744-1.153 2.626-1.345.314-.552.667-1.097 1.039-1.633-2.039.055-3.708.867-4.864 2.023-1.071 1.071-1.706 2.433-1.804 3.728 1.184-.904 2.446-1.576 4.155-.914.173-.471.366-.944.58-1.418zm7.738.663c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0c.391.392.391 1.024 0 1.415s-1.024.39-1.414-.001zm4.949-4.951c-.78-.78-2.047-.78-2.828 0-.781.781-.781 2.049 0 2.829.781.781 2.048.781 2.829 0 .78-.78.78-2.047-.001-2.829zm-1.908 1.911c-.273-.273-.273-.718 0-.99.271-.273.717-.273.99 0 .272.272.271.717 0 .99-.274.272-.718.272-.99 0zm-6.747 10.65c-1.492 3.81-5.803 6.208-10.354 6.438.219-4.289 2.657-8.676 6.64-10.153l.805.806c-4.331 2.755-4.653 5.346-4.665 6.575 1.268-.015 4.054-.344 6.778-4.464l.796.798z" />
              </svg>
            </div>

            <div className="text-2xl font-medium text-dark-blue">
              Program Implementation
            </div>

            <div className="text-gray-700">
              We aid organizations to design iterative, evidence-based,
              human-centred and actionable solutions.
            </div>

            <div className="hidden cursor-pointer font-medium hover:underline md:flex">
              Learn more
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Featured Projects --> */}
      <div className="space-y-10 bg-gradient-to-r from-gray-100 to-gray-200 px-6 pt-10 md:space-y-20 md:px-10 md:py-20">
        <div className="border-b border-gray-300 pb-10 text-center text-4xl font-bold capitalize text-dark-blue">
          Featured Projects
        </div>

        <div className="mx-auto md:w-3/4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="h-1 bg-light-blue"></div>
              <div
                className="h-56 bg-gray-400 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/daojlqwdo/image/upload/v1691868033/ace/BF05993B-0FD4-4983-AFD8-4AEAB857C39C_w1080_h608_s.jpg_wqsory.avif')`,
                }}
              ></div>
              <div className="space-y-6 bg-gray-200 p-6 md:p-10">
                <div className="text-2xl font-medium text-dark-blue">
                  Immunization REW Micro Plan
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mb-0.5 h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  <div className="text-sm font-semibold uppercase tracking-widest text-gray-700">
                    Strategy Development
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="border-b border-t border-gray-300 py-3">
                    The Zamfara State Primary Health Care Board
                  </div>
                  <div>
                    The Gombe State Primary Health Care Development Agency
                  </div>
                </div>

                <div className="inline-flex cursor-pointer bg-black px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                  view project
                </div>
              </div>
            </div>

            <div>
              <div className="h-1 bg-light-blue"></div>
              <div
                className="h-56 bg-gray-400 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/daojlqwdo/image/upload/v1691875296/ace/pexels-jane-doan-1132047_ylsexg.jpg')`,
                }}
              ></div>
              <div className="space-y-6 bg-gray-200 p-6 md:p-10">
                <div className="text-2xl font-medium text-dark-blue">
                  Development of a Policy Brief on Food Safety and Security
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mb-0.5 h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  <div className="text-sm font-semibold uppercase tracking-widest text-gray-700">
                    Policy Development
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="border-t border-gray-300 py-3">
                    The Nigeria Economic Summit Group
                  </div>
                </div>

                <div className="inline-flex cursor-pointer bg-black px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                  view project
                </div>
              </div>
            </div>

            <div>
              <div className="h-1 bg-light-blue"></div>
              <div
                className="h-56 bg-gray-400 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/daojlqwdo/image/upload/v1691875505/ace/pexels-elle-hughes-1660027_j4irzl.jpg')`,
                }}
              ></div>
              <div className="space-y-6 bg-gray-200 p-6 md:p-10">
                <div className="text-2xl font-medium text-dark-blue">
                  Implementation of Nutrition Intervention
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mb-0.5 h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  <div className="text-sm font-semibold uppercase tracking-widest text-gray-700">
                    Program Implementation
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="border-t border-gray-300 py-3 capitalize">
                    United Nations International Children&lsquo;s Fund
                  </div>
                </div>

                <div className="inline-flex cursor-pointer bg-black px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                  view project
                </div>
              </div>
            </div>

            <div>
              <div className="h-1 bg-light-blue"></div>
              <div
                className="h-56 bg-gray-400 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/daojlqwdo/image/upload/v1691875505/ace/pexels-elle-hughes-1660027_j4irzl.jpg')`,
                }}
              ></div>
              <div className="space-y-6 bg-gray-200 p-6 md:p-10">
                <div className="text-2xl font-medium text-dark-blue">
                  Immunization Coverage Survey
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mb-0.5 h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  <div className="text-sm font-semibold uppercase tracking-widest text-gray-700">
                    Data Management
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="border-t border-gray-300 py-3 capitalize">
                    The Kebbi State Primary Health Care Development Agency
                  </div>
                  <div className="border-t border-gray-300 py-3 capitalize">
                    The Gombe State Primary Health Care Development Agency
                  </div>
                  <div className="border-t border-gray-300 py-3 capitalize">
                    The Zamfara State Primary Health Care Board
                  </div>
                </div>

                <div className="inline-flex cursor-pointer bg-black px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                  view project
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Our Partners --> */}
      <div className="space-y-10 bg-gray-100 md:py-20 py-10">
        <div className="text-center text-4xl font-bold capitalize text-light-blue">
          Our partners
        </div>
        <div className="mx-auto grid grid-cols-3 gap-8 px-6 md:w-2/3 md:grid-cols-6">
          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875981/ace/partners/p3-2_ak8nrg.png"
            className="w-36 cursor-pointer grayscale hover:grayscale-0"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875947/ace/partners/p4_ask3lm.png"
            className="w-36 cursor-pointer grayscale hover:grayscale-0"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875946/ace/partners/p2-2_cuo3ib.png"
            className="w-36 cursor-pointer grayscale hover:grayscale-0"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875878/ace/partners/p1_kgqiyx.png"
            className="w-36 cursor-pointer grayscale hover:grayscale-0"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875875/ace/partners/p5_kg2qbk.png"
            className="w-36 cursor-pointer grayscale hover:grayscale-0"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875871/ace/partners/p6_a0kxl8.png"
            className="w-36 cursor-pointer grayscale hover:grayscale-0"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875868/ace/partners/p7_yt4nen.png"
            className="w-36 cursor-pointer grayscale hover:grayscale-0"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875864/ace/partners/p8_oo0p4u.png"
            className="w-36 cursor-pointer grayscale hover:grayscale-0"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875862/ace/partners/p9_j5qgwn.png"
            className="w-36 cursor-pointer grayscale hover:grayscale-0"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875861/ace/partners/p10_bmf4g3.png"
            className="w-36 cursor-pointer grayscale hover:grayscale-0"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875859/ace/partners/p11-2_ou2i9m.png"
            className="w-36 cursor-pointer grayscale hover:grayscale-0"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
