import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookiesBanner(props) {
  const { data } = props;
  const [localStorageCookieClicked, setLocalStorageCookieClicked] =
    useState(true);

  const handleCookieClick = () => {
    if (process.browser) {
      window.localStorage.setItem("cookieClicked", "true");
    }
    setLocalStorageCookieClicked(true);
  };

  useEffect(() => {
    if (
      process.browser &&
      window.localStorage.getItem("cookieClicked") === null
    ) {
      if (localStorageCookieClicked) {
        setLocalStorageCookieClicked(false);
      }
    }
  }, []);

  return (
    <div
      className={`${
        localStorageCookieClicked
          ? "hidden"
          : "block fixed bottom-0 inset-x-0 pb-2 sm:pb-5"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-gray-700 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-gray-800">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="">
                  {data.legal.cookiesMessagePart1}{" "}
                  <Link href="/legal/cookies">
                    <a className="underline" onClick={handleCookieClick}>
                      {data.legal.cookiesMessagePart2}
                    </a>
                  </Link>{" "}
                  {data.legal.cookiesMessagePart3}
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <div className="rounded-md shadow-sm">
                <a
                  className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-600 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 cursor-pointer"
                  onClick={handleCookieClick}
                >
                  {data.legal.acceptCookiesMessage}
                </a>
              </div>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition ease-in-out duration-150"
                aria-label="Dismiss"
                onClick={handleCookieClick}
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
