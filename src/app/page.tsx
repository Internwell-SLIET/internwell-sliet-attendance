/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <div>
        <body className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
          <div
            className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
          >
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex justify-center items-center flex-col">
              <div>
                <img src="./logo/iw-wbg.png" className="h-24" />
              </div>
              <div className="mt-2 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
                  InternWell Attendance Portal
                </h1>
                <div className="w-full flex-1 mt-8">

                  <div className="mx-auto max-w-xs">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Password"
                    />
                    <div className="flex justify-around items-center py-6">
                      <div className="flex items-center">
                        <input id="admin" type="radio" value="" name="role" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="admin" className="ml-2 text-lg font-medium text-black">Admin</label>
                      </div>
                      <div className="flex items-center">
                        <input id="member" type="radio" value="" name="role" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="member" className="ml-2 text-lg font-medium text-black">Member</label>
                      </div>
                    </div>
                    <button
                      className="mt-2 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <span className="ml-3">
                        Login Now
                      </span>
                    </button>
                    <p className="mt-6 text-xs text-gray-600 text-center">
                      I agree to abide by templatanas
                      <a href="#" className="border-b border-gray-500 border-dotted">
                        Terms of Service
                      </a>
                      and its
                      <a href="#" className="border-b border-gray-500 border-dotted">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
              <div
                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              ></div>
            </div>
          </div>
          <div className="REMOVE-THIS-ELEMENT-IF-YOU-ARE-USING-THIS-PAGE hidden treact-popup fixed inset-0 items-center justify-center">
            <div className="max-w-lg p-8 sm:pb-4 bg-white rounded shadow-lg text-center sm:text-left">

              <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex flex-col sm:flex-row items-center">
                <div className="bg-green-200 p-2 rounded-full flex items-center mb-4 sm:mb-0 sm:mr-2">
                  <svg className="text-green-800 inline-block w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                </div>
                Free TailwindCSS Component Kit!
              </h3>
              <p>I recently released Treact, a <span className="font-bold">free</span> TailwindCSS Component Kit built with React.</p>
              <p className="mt-2">It has 52 different UI components, 7 landing pages, and 8 inner pages prebuilt. And they are customizable!</p>
              <div className="mt-8 pt-8 sm:pt-4 border-t -mx-8 px-8 flex flex-col sm:flex-row justify-end leading-relaxed">
                <button className="close-treact-popup px-8 py-3 sm:py-2 rounded border border-gray-400 hover:bg-gray-200 transition duration-300">Close</button>
                <a className="font-bold mt-4 sm:mt-0 sm:ml-4 px-8 py-3 sm:py-2 rounded bg-purple-700 text-gray-100 hover:bg-purple-900 transition duration-300 text-center" href="https://treact.owaiskhan.me" target="_blank">See Treact</a>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  )
}