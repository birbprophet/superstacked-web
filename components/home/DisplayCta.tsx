import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicSvg = dynamic(() => import("@/components/home/DisplayCtaSvg"), {
  loading: () => <></>,
});

export default function DisplayCta(props) {
  return (
    <>
      <div className="rounded-t-xl ring-1 ring-black ring-opacity-10 max-w-lg lg:max-w-4xl mx-auto hidden lg:grid">
        <div
          className="py-2 grid items-center gap-6 px-4 rounded-tr-xl sm:rounded-t-xl bg-gradient-to-b from-gray-50 to-gray-100"
          style={{
            gridTemplateColumns: "1fr minmax(min-content, 640px) 1fr",
          }}
        >
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
          </div>
          <div className="border border-black border-opacity-5 rounded-md overflow-hidden shadow-sm">
            <div className="bg-gradient-to-b from-white to-gray-50 text-sm py-1.5 text-center">
              <span>your-next-app-preview.superstacked.dev</span>
            </div>
          </div>
        </div>
        <div className="relative bg-white border-t border-gray-200">
          <div className="overflow-hidden h-72 flex flex-col">
            <div className="bg-white h-16 w-full border-b border-gray-200 shadow-sm flex justify-between items-center px-8">
              <div
                className="font-cabin font-extrabold text-xl text-gray-900"
                style={{
                  boxShadow:
                    "inset 0 -0.1666666667em 0 0 #fff, inset 0 -0.3333333333em 0 0 #BAE6FD",
                }}
              >
                your next app
              </div>
              <div className="flex space-x-2 items-center">
                <div className="bg-gray-200 h-6 w-14 rounded" />
                <div className="bg-gray-200 h-6 w-10 rounded" />
                <div className="bg-gray-200 h-6 w-16 rounded" />
                <div className="bg-gray-200 h-10 w-10 rounded-full ml-2" />
              </div>
            </div>
            <div className="bg-gray-50 h-10 w-full border-b border-gray-200 shadow-sm flex justify-between items-center px-8">
              <div className="flex space-x-2 items-center">
                <div className="bg-gray-200 h-4 w-12 rounded" />
                <p className="font-black text-gray-200">/</p>
                <div className="bg-gray-200 h-4 w-12 rounded" />
                <p className="font-black text-gray-200">/</p>
                <div className="bg-gray-200 h-4 w-12 rounded" />
              </div>
              <div className="flex space-x-2 items-center mr-4">
                <div className="bg-gray-200 h-5 w-24 rounded" />
                <svg
                  className="w-5 h-5 text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-gray-100 h-16 px-8 grid grid-cols-6 pt-4 space-x-2">
              <div className="col-span-2 bg-white h-8 rounded-xl ring-1 ring-gray-900 ring-opacity-5 px-3 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="col-span-1 bg-white h-8 rounded-xl ring-1 ring-gray-900 ring-opacity-5 px-3 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="col-span-1 bg-white h-8 rounded-xl ring-1 ring-gray-900 ring-opacity-5 px-3 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="col-span-1 bg-white h-8 rounded-xl ring-1 ring-gray-900 ring-opacity-5 px-3 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="col-span-1 bg-gray-400 h-8 rounded-xl ring-1 ring-primary-900 ring-opacity-5 px-3 flex items-center" />
            </div>
            <div className="bg-gray-100 flex-1 px-8 pt-2 grid grid-cols-5">
              <div className="bg-gray-50 rounded-t-lg" />
              <div className="col-span-3 bg-white mx-6 rounded-t-sm grid grid-cols-4 ring-1 ring-primary-900 ring-opacity-5 shadow-sm">
                <div className="bg-gray-200 flex">
                  <svg
                    className="w-12 h-12 text-gray-300 m-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="col-span-2 flex flex-col gap-1 p-4">
                  <div className="h-3 w-16 bg-gray-200 rounded" />
                  <div className="h-5 w-48 bg-gray-300 rounded" />
                  <div className="flex-1 w-36 bg-gray-100 rounded mt-1" />
                </div>
                <div className="col-span-1 flex flex-col items-end gap-1 p-4">
                  <svg
                    className="w-5 h-5 text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div className="flex-1" />
                  <div className="w-full h-7 bg-gray-400 rounded" />
                </div>
              </div>
              <div className="bg-gray-50 rounded-t-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-11 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 lg:col-span-6">
            <div className="lg:self-center flex flex-col h-full">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:leading-none">
                <span className="block text-primary-300">Start small.</span>
                <span className="block">Think global scale.</span>
              </h2>
              <p className="mt-4 lg:mt-8 text-lg leading-6 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                malesuada in justo sed consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam malesuada in justo sed
                consequat.
              </p>
              <div className="flex-1"></div>
              <div>
                <Link href="/signup">
                  <a className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-semibold text-gray-700 hover:text-gray-800 hover:bg-gray-100">
                    Get Started
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-16 pr-16 pl-8 hidden lg:grid lg:col-span-5">
            <DynamicSvg />
          </div>
        </div>
      </div>
    </>
  );
}
