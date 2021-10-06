import Link from "next/link";

export default function Hero(props) {
  const { data } = props;
  return (
    <main className="max-w-5xl px-4 mx-auto mt-16 sm:mt-24">
      <div className="text-center">
        <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-7xl md:text-[5rem] font-serif cursor-default">
          {data.page.heroTitle}
        </h1>
        <p className="max-w-md mx-auto mt-5 text-xl text-gray-400 sm:text-2xl sm:max-w-3xl sm:mt-8 md:text-2xl md:max-w-3xl">
          {data.page.heroDescription}
        </p>
        <div className="max-w-md mx-auto mt-8 sm:flex sm:justify-center md:mt-10">
          <div className="rounded-md shadow">
            <Link href="/contact">
              <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-650 hover:bg-primary-700 md:py-4 md:text-lg md:px-10">
                {data.page.heroContactButtonText}
              </a>
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link href="/services">
              <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-primary-650 hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                {data.page.heroAboutButtonText}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
