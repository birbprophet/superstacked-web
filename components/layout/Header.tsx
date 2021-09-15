/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import * as HeroIcons from "@heroicons/react/outline";
import Link from "next/link";
import { classNames } from "@/utils/styleUtils";
import Logo from "@/components/brand/Logo";
import { iconStringToIcon } from "@/utils/iconUtils";
import * as _ from "lodash";

export default function Header(props) {
  const { data } = props;
  return (
    <header className="relative w-full z-20">
      <Popover className="relative max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-6 py-6 md:justify-start md:space-x-10">
          <div className="md:mr-4">
            <Link href="/">
              <a className="flex items-center">
                <span className="sr-only">SuperStacked</span>
                <Logo className="h-12 w-12" />
                <span className="ml-3 mb-1.5 inline text-2xl md:hidden lg:inline font-bold text-primary-50 font-serif underline underline-thickness-1 decoration-gray-500">
                  <span className="text-primary-200">super</span>stacked
                </span>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Open menu</span>
              <HeroIcons.MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-100" : "text-gray-300",
                        "group rounded-md inline-flex items-center text-base font-medium text-gray-300 hover:text-gray-100 focus:outline-none"
                      )}
                    >
                      <span>{data.menu.servicesDropdownButtonText}</span>
                      <HeroIcons.ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-100" : "text-gray-300",
                          "ml-2 h-5 w-5 group-hover:text-gray-100"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-gray-850 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {data.allServices
                              .map((item) => ({
                                ...item,
                                icon: iconStringToIcon(item.icon),
                              }))
                              .map((item) => (
                                <Link
                                  href={`/service#${item.title.toLowerCase()}`}
                                  key={item.title}
                                >
                                  <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-750">
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
                                      <item.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-100">
                                        {item.title}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-400">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                          </div>
                          <div className="p-5 bg-gray-900 sm:p-8">
                            <Link href={`/contact`}>
                              <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-850">
                                <div className="flex items-center">
                                  <div className="text-base font-medium text-gray-100">
                                    {data.menu.customSectionTitle}
                                  </div>
                                  <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-primary-100 text-primary-800">
                                    {data.menu.customSectionBadge}
                                  </span>
                                </div>
                                <p className="mt-1 text-sm text-gray-400">
                                  {data.menu.customSectionDescription}
                                </p>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {data.menu.links.map(({ name, path }) => (
                <Link key={path} href={path}>
                  <a className="text-base font-medium text-gray-300 hover:text-gray-100">
                    {name}
                  </a>
                </Link>
              ))}
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <Link href="/start">
                <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-650 hover:bg-primary-700">
                  {data.menu.callToActionButtonText}
                </a>
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-750 divide-y-2 divide-gray-700">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/">
                      <a className="flex items-center">
                        <span className="sr-only">SuperStacked</span>
                        <Logo className="h-12 w-12" />
                        <span className="ml-3 mb-1.5 inline text-2xl md:hidden lg:inline font-bold text-primary-50 font-serif underline underline-thickness-1 decoration-gray-500">
                          <span className="text-primary-200">super</span>stacked
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                      <span className="sr-only">Close menu</span>
                      <HeroIcons.XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-8">
                  <nav className="grid gap-6">
                    {data.allServices
                      .map((item) => ({
                        ...item,
                        icon: iconStringToIcon(item.icon),
                      }))
                      .map((item) => (
                        <Link
                          key={item.title}
                          href={`/service#${item.title.toLowerCase()}`}
                        >
                          <a className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-700">
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-600 text-white sm:h-12 sm:w-12">
                              <item.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-100">
                              {item.title}
                            </div>
                          </a>
                        </Link>
                      ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <Link href={"/services"}>
                    <a className="text-base font-medium text-gray-100 hover:text-gray-200">
                      {data.menu.servicesDropdownButtonText}
                    </a>
                  </Link>
                  {data.menu.link.map(({ name, path }) => (
                    <Link key={path} href={path}>
                      <a className="text-base font-medium text-gray-100 hover:text-gray-200">
                        {name}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/start">
                    <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-650 hover:bg-primary-700">
                      {data.menu.callToActionButtonText}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
