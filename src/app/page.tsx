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
                <h1 className="text-xl xl:text-2xl font-extrabold text-center">
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
                      I agree to abide by InternWell
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
                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat flex justify-center items-center"
              >
                <img src="./img/login2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="REMOVE-THIS-ELEMENT-IF-YOU-ARE-USING-THIS-PAGE hidden treact-popup fixed inset-0 items-center justify-center">
            <div className="max-w-lg p-8 sm:pb-4 bg-white rounded shadow-lg text-center sm:text-left">

              <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex flex-col sm:flex-row items-center">
                <div className="bg-green-200 p-2 rounded-full flex items-center mb-4 sm:mb-0 sm:mr-2">
                </div>

              </h3>
            </div>
          </div>
        </body>
      </div>
    </>
  )
}