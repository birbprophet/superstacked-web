import { iconStringToIcon } from "@/utils/iconUtils";
import Link from "next/link";

export default function Hero(props) {
  const { data } = props;
  return (
    <main className="mt-16 mx-auto max-w-5xl px-4 sm:mt-24">
      <div className="text-center">
        <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-7xl md:text-[5rem] font-serif cursor-default">
          {data.page.heroTitle}
        </h1>
        <p className="mt-5 max-w-md mx-auto text-xl text-gray-400 sm:text-2xl sm:max-w-3xl sm:mt-8 md:text-2xl md:max-w-3xl">
          {data.page.heroDescription}
        </p>
        <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
          <div className="rounded-md shadow">
            <Link href="/contact">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-650 hover:bg-primary-700 md:py-4 md:text-lg md:px-10">
                {data.page.heroContactButtonText}
              </a>
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link href="/services">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-650 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                {data.page.heroAboutButtonText}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
