import Link from "next/link";

export default function PageFor500() {
  return (
    <div className="bg-gray-800 min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-primary-600 sm:text-5xl">
            500
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold text-gray-100 tracking-tight sm:text-5xl font-serif">
                Server error occurred
              </h1>
              <p className="mt-2 text-base text-gray-400">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link href="/">
                <a className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  Go back home
                </a>
              </Link>
              <Link href="/contact">
                <a className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  Contact support
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
