import Link from "next/link";
import { Image } from "react-datocms";
import ReactMarkdown from "react-markdown";

export default function ServiceSection(props) {
  const { data, serviceData } = props;
  return (
    <div
      className="py-16 mx-auto max-w-5xl px-4 sm:py-24"
      id={serviceData.name.toLowerCase()}
    >
      <div className="text-center">
        <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
          {serviceData.name}
        </span>
        <h1 className="mt-4 text-5xl tracking-tight font-extrabold text-white sm:text-6xl font-serif cursor-default">
          {serviceData.title}
        </h1>
        <p className="mt-5 max-w-md mx-auto text-xl text-gray-400 sm:text-2xl sm:max-w-3xl sm:mt-8 md:text-2xl md:max-w-3xl">
          <ReactMarkdown>{serviceData.description}</ReactMarkdown>
        </p>
        <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link href="/contact">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-650 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 whitespace-nowrap">
                {data.menu.callToActionButtonText}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8 mt-10">
        <div className="py-10 px-6 bg-gray-900 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              {serviceData.sectionTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-primary-100">
              <ReactMarkdown>{serviceData.sectionDescription}</ReactMarkdown>
            </p>
            <div className="mt-3 rounded-md shadow sm:mt-8">
              <Link href="/contact">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-650 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 whitespace-nowrap">
                  {serviceData.viewMoreButtonText}
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1 lg:pl-8">
            <Image
              data={serviceData.sectionImage.responsiveImage}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
