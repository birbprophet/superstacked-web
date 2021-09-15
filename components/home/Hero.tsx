import { iconStringToIcon } from "@/utils/iconUtils";
import Link from "next/link";

export default function Hero(props) {
  const { data } = props;
  const HeroPromoIcon: any = iconStringToIcon(data.page.promoSectionIcon);
  return (
    <main className="mt-16 mx-auto max-w-5xl px-4 sm:mt-24">
      <div className="text-center">
        <div className="mb-8 md:mb-14">
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-700 to-primary-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Link href="/start">
                <button className="relative px-5 sm:px-7 py-2.5 sm:py-4 bg-gray-900 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <span className="flex items-center space-x-5">
                    <HeroPromoIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-200" />
                    <span className="pr-0 sm:pr-6 text-sm sm:text-base text-gray-200 font-medium">
                      {data.page.promoSectionMain}
                    </span>
                  </span>
                  <span className="hidden sm:inline pl-6 text-primary-300 group-hover:text-gray-100 transition duration-200">
                    {data.page.promoSectionCta} &rarr;
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-7xl md:text-[5rem] font-serif cursor-default">
          {data.page.heroTitlePart1} <br className="inline sm:hidden" />
          <span className="text-transparent bg-gradient-to-br from-primary-400 to-primary-200 bg-clip-text hover:bg-gradient-to-tl">
            {data.page.heroTitlePart2}
          </span>{" "}
          <br className="inline sm:hidden md:inline" />
          {data.page.heroTitlePart3}
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
            <Link href="/about">
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
