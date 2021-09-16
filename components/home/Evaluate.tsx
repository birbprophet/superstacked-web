import { useState } from "react";

export default function Evaluate(props) {
  const [url, setUrl] = useState("");
  const checkIsValidUrl = (url) => {
    return url.match(
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    );
  };
  const finalUrl = "https://" + url;
  const urlIsValid = checkIsValidUrl(finalUrl);

  return (
    <div className="py-16 px-4 sm:py-24 sm:px-6 lg:px-8" id="evaluate">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center">
          <p className="mt-1 text-5xl font-bold sm:text-6xl sm:tracking-tight lg:text-7xl font-serif text-white">
            The Need For{" "}
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-primary-400 to-primary-100">
              Speed
            </span>
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-lg sm:text-xl text-gray-400">
            How does your current site or web app perform? Find out by
            evaluating your site's performance below. You can also compare it
            against{" "}
            <a
              href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsuperstacked.dev%2F&tab=desktop"
              target="_blank"
              rel="noopener"
              className="underline text-gray-300"
            >
              our site
            </a>
            .
          </p>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-6 flex flex-col items-center">
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 font-medium text-xl sm:text-2xl">
              https://
            </span>
          </div>
          <input
            type="text"
            className="focus:ring-primary-300 focus:border-primary-200 block w-full pl-[5.2rem] sm:pl-[6.1rem] border-gray-200 border-2 rounded-md bg-transparent font-medium text-xl sm:text-2xl text-gray-200"
            placeholder="superstacked.dev"
            value={url}
            onChange={(e) => setUrl(e.target.value.toLowerCase())}
          />
        </div>
        {urlIsValid ? (
          <a
            href={`https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2F${url}`}
            target="_blank"
            rel="noopener"
          >
            <button
              type="button"
              className={`inline-flex items-center px-6 py-3 text-lg font-medium rounded-md text-white bg-gradient-to-r ${
                urlIsValid
                  ? "from-primary-650 to-primary-800 hover:from-primary-600 hover:to-primary-700"
                  : "from-gray-600 to-gray-600"
              } focus:outline-none mt-6`}
            >
              Evaluate Your Site
            </button>
          </a>
        ) : (
          <button
            type="button"
            className={`inline-flex items-center px-6 py-3 text-lg font-medium rounded-md text-white bg-gradient-to-r ${
              urlIsValid
                ? "from-primary-650 to-primary-800 hover:from-primary-600 hover:to-primary-700"
                : "from-gray-600 to-gray-600"
            } focus:outline-none mt-6`}
          >
            Evaluate Your Site
          </button>
        )}
      </div>
    </div>
  );
}
