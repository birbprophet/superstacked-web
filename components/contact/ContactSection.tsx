import { CalendarIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { useForm } from "@formspree/react";
import Link from "next/link";

export default function ContactSection(props) {
  const { data } = props;
  const [formState, handleSubmit] = useForm("moqyrnlw");
  const { errors, succeeded } = formState;

  return (
    <div className="bg-gray-800">
      <main className="overflow-hidden">
        <div className="bg-gray-750">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold font-serif tracking-tight text-gray-100 sm:text-5xl lg:text-6xl">
                {data.contact.contactTitle}
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                {data.contact.contactDescription}
              </p>
              <br />
              <a
                className="font-bold text-xl text-primary-50"
                href="https://calendly.com/superstacked/30min"
                target="_blank"
                rel="noopener"
              >
                {data.contact.contactBookMeetingText} &rarr;
              </a>
            </div>
          </div>
        </div>
        <section
          className="relative bg-gray-800"
          aria-labelledby="contact-heading"
        >
          <div
            className="absolute w-full h-1/2 bg-gray-750"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-100 opacity-20"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gray-900 shadow-xl  rounded-2xl overflow-hidden">
              <h2 id="contact-heading" className="sr-only">
                {data.contact.contactInformationHeader}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-primary-700 to-primary-900 sm:px-10 xl:p-12">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    {data.contact.contactInformationHeader}
                  </h3>
                  <p className="mt-6 text-base text-primary-50 max-w-3xl">
                    {data.contact.contactInformationDescription}
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">
                        {data.contact.contactFormPhoneLabel}
                      </span>
                    </dt>
                    <dd className="flex text-base text-primary-50">
                      <PhoneIcon
                        className="flex-shrink-0 w-6 h-6 text-primary-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">
                        {data.contact.contactPhoneNumber}
                      </span>
                    </dd>
                    <dt>
                      <span className="sr-only">
                        {data.contact.contactFormEmailLabel}
                      </span>
                    </dt>
                    <dd className="flex text-base text-primary-50">
                      <MailIcon
                        className="flex-shrink-0 w-6 h-6 text-primary-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">{data.contact.contactEmail}</span>
                    </dd>
                    <dd className="flex text-base text-primary-50">
                      <CalendarIcon
                        className="flex-shrink-0 w-6 h-6 text-primary-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">
                        <a
                          className="font-bold text-primary-50"
                          href="https://calendly.com/superstacked/30min"
                          target="_blank"
                          rel="noopener"
                        >
                          {data.contact.contactBookMeetingText} &rarr;
                        </a>
                      </span>
                    </dd>
                  </dl>
                </div>
                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-gray-100 mb-4">
                    {data.contact.contactFormTitle}
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-100"
                          htmlFor="name"
                        >
                          {data.contact.contactFormNameLabel}
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="bg-gray-900 py-3 px-4 block w-full shadow-sm text-gray-100 focus:ring-gray-400 focus:border-gray-400 border-gray-500 rounded-md"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <label
                            className="block text-sm font-medium text-gray-100"
                            htmlFor="company"
                          >
                            {data.contact.contactFormCompanyLabel}
                          </label>
                          <span className="text-sm text-gray-500">
                            {data.contact.contactFormOptionalTag}
                          </span>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="company"
                            id="company"
                            autoComplete="company"
                            className="bg-gray-900 py-3 px-4 block w-full shadow-sm text-gray-100 focus:ring-gray-400 focus:border-gray-400 border-gray-500 rounded-md"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-100"
                        >
                          {data.contact.contactFormEmailLabel}
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="bg-gray-900 py-3 px-4 block w-full shadow-sm text-gray-100 focus:ring-gray-400 focus:border-gray-400 border-gray-500 rounded-md"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-100"
                          >
                            {data.contact.contactFormPhoneLabel}
                          </label>
                          <span
                            id="phone-optional"
                            className="text-sm text-gray-500"
                          >
                            {data.contact.contactFormOptionalTag}
                          </span>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            className="bg-gray-900 py-3 px-4 block w-full shadow-sm text-gray-100 focus:ring-gray-400 focus:border-gray-400 border-gray-500 rounded-md"
                            aria-describedby="phone-optional"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-100"
                        >
                          {data.contact.contactFormSubjectLabel}
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="bg-gray-900 py-3 px-4 block w-full shadow-sm text-gray-100 focus:ring-gray-400 focus:border-gray-400 border-gray-500 rounded-md"
                            required
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-100"
                          >
                            {data.contact.contactFormMessageLabel}
                          </label>
                          <span
                            id="message-max"
                            className="text-sm text-gray-500"
                          >
                            {data.contact.contactFormMessageTag}
                          </span>
                        </div>
                        <div className="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="bg-gray-900 py-3 px-4 block w-full shadow-sm text-gray-100 focus:ring-gray-400 focus:border-gray-400 border-gray-500 rounded-md"
                            aria-describedby="message-max"
                            defaultValue={""}
                            required
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2 sm:flex sm:justify-between items-center">
                        <div
                          className={
                            errors?.[0] ? "text-red-300" : "text-primary-200"
                          }
                        >
                          {errors?.[0]
                            ? data.contact.contactFormFailureMessage
                            : succeeded &&
                              data.contact.contactFormSuccessMessage}
                        </div>
                        <button
                          type="submit"
                          className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:w-auto"
                        >
                          {data.contact.contactFormSubmitButtonText}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact grid */}
        <section>
          <div className="max-w-7xl h-24 md:h-36"></div>
        </section>
      </main>
    </div>
  );
}
