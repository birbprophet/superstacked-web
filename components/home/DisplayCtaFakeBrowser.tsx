export default function DisplayCtaSvg() {
  return (
    <>
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
    </>
  );
}
