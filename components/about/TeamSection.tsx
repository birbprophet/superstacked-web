import { Image } from "react-datocms";
import { GlobeAltIcon } from "@heroicons/react/outline";

export default function Example(props) {
  const { data } = props;
  return (
    <div className="">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 mt-20">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl font-serif text-gray-100">
              {data.page.teamTitle}
            </h2>
            <p className="text-xl text-gray-400">{data.page.teamDescription}</p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {data.page.teamProfiles.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <Image
                      data={person.profilePicture.responsiveImage}
                      className="rounded-xl"
                    />
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1 mt-12 sm:mt-0">
                          <h3 className="text-3xl font-serif font-bold text-white">
                            {person.name}
                          </h3>
                          <p className="text-primary-300 text-lg">
                            {person.title}
                          </p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-400">{person.bio}</p>
                        </div>
                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a
                              href={person.linkedinUrl}
                              className="text-gray-400 hover:text-gray-500"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href={person.personalSiteUrl}
                              className="text-gray-400 hover:text-gray-500"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GlobeAltIcon className="w-5 h-5" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
