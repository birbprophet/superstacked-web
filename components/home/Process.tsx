export default function Process(props) {
  const { data } = props;
  return (
    <div className="flex flex-col py-28 sm:pt-36 items-center">
      <div className="text-gray-100 font-bold uppercase text-sm tracking-widest">
        {data.page.processTitle}
      </div>
      <div className="flex flex-col text-center items-center mt-14">
        <div
          className="h-32 w-0.5 bg-gradient-to-b from-transparent to-primary-400"
          id={data.page.processPart1Label.toLowerCase()}
        ></div>
        <div className="h-10 w-10 rounded-full flex bg-gradient-to-br from-primary-400 to-primary-600">
          <div className="text-white text-lg font-bold m-auto">1</div>
        </div>
        <div className="mt-4">
          <div className="font-bold text-3xl text-transparent bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text">
            {data.page.processPart1Label}
          </div>
        </div>
        <div className="text-4xl sm:text-6xl lg:text-7xl text-gray-100 leading-none font-extrabold tracking-tight mt-6 sm:mt-8 mb-10 sm:mb-8">
          {data.page.processPart1Title}
        </div>
        <div className="max-w-4xl mx-auto text-center text-2xl leading-9 font-normal text-gray-400 flex flex-col space-y-8">
          <p>{data.page.processPart1Description}</p>
        </div>
        <div className="max-w-5xl sm:flex w-full mt-4">
          <div className="hidden sm:grid flex-1 px-4 sm:px-10 pt-14">
            <div className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="hidden sm:flex flex-col items-center mx-6">
            <div className="w-0.5 bg-gradient-to-b from-transparent to-gray-300 h-1/4"></div>
            <div className="rounded-full w-2 h-2 ring-2 ring-gray-300"></div>
            <div className="w-0.5 bg-gradient-to-b from-gray-300 to-gray-400 h-1/4"></div>
            <div className="rounded-full w-2 h-2 ring-2 ring-gray-400"></div>
            <div className="w-0.5 bg-gradient-to-b from-gray-400 to-gray-500 h-1/4"></div>
            <div className="rounded-full w-2 h-2 ring-2 ring-gray-500"></div>
            <div className="w-0.5 bg-gradient-to-b from-gray-500 to-primary-300 h-1/4"></div>
          </div>
          <div className="flex-1 px-4 sm:px-10 py-16 md:mt-8 flex flex-col space-y-8 sm:text-left">
            {data.page.processPart1Blocks.map((item) => (
              <div className="flex flex-1" key={item.title}>
                <div className="flex flex-col m-auto">
                  <div className="text-2xl font-bold text-gray-200 tracking-tight">
                    {item.title}
                  </div>
                  <div className="text-gray-400 text-lg mt-2">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center items-center">
        <div
          className="h-32 w-0.5 bg-gradient-to-b from-primary-300 to-primary-400"
          id={data.page.processPart2Label.toLowerCase()}
        ></div>
        <div className="h-10 w-10 rounded-full flex bg-gradient-to-br from-primary-400 to-primary-600">
          <div className="text-white text-lg font-bold m-auto">2</div>
        </div>
        <div className="mt-4">
          <div className="font-bold text-3xl text-transparent bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text">
            {data.page.processPart2Label}
          </div>
        </div>
        <div className="text-4xl sm:text-6xl lg:text-7xl text-gray-100 leading-none font-extrabold tracking-tight mt-6 sm:mt-8 mb-10 sm:mb-8">
          {data.page.processPart2Title}
        </div>
        <div className="max-w-4xl mx-auto text-center text-2xl leading-9 font-normal text-gray-400 flex flex-col space-y-8">
          <p>{data.page.processPart2Description}</p>
        </div>
        <div className="max-w-5xl sm:flex w-full">
          <div className="flex-1 px-4 sm:px-10 py-16 md:mt-8 flex flex-col space-y-8 sm:text-right">
            {data.page.processPart2Blocks.map((item) => (
              <div className="flex flex-1" key={item.title}>
                <div className="flex flex-col m-auto">
                  <div className="text-2xl font-bold text-gray-200 tracking-tight">
                    {item.title}
                  </div>
                  <div className="text-gray-400 text-lg mt-2">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden sm:flex flex-col items-center mx-6 mt-4">
            <div className="w-0.5 bg-gradient-to-b from-transparent to-gray-300 h-1/4"></div>
            <div className="rounded-full w-2 h-2 ring-2 ring-gray-300"></div>
            <div className="w-0.5 bg-gradient-to-b from-gray-300 to-gray-400 h-1/4"></div>
            <div className="rounded-full w-2 h-2 ring-2 ring-gray-400"></div>
            <div className="w-0.5 bg-gradient-to-b from-gray-400 to-gray-500 h-1/4"></div>
            <div className="rounded-full w-2 h-2 ring-2 ring-gray-500"></div>
            <div className="w-0.5 bg-gradient-to-b from-gray-500 to-primary-300 h-1/4"></div>
          </div>
          <div className="hidden sm:grid flex-1 px-4 sm:px-10 pt-14">
            <div className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center items-center">
        <div
          className="h-32 w-0.5 bg-gradient-to-b from-primary-300 to-primary-400"
          id={data.page.processPart3Label.toLowerCase()}
        ></div>
        <div className="h-10 w-10 rounded-full flex bg-gradient-to-br from-primary-400 to-primary-600">
          <div className="text-white text-lg font-bold m-auto">2</div>
        </div>
        <div className="mt-4">
          <div className="font-bold text-3xl text-transparent bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text">
            {data.page.processPart3Label}
          </div>
        </div>
        <div className="text-4xl sm:text-6xl lg:text-7xl text-gray-100 leading-none font-extrabold tracking-tight mt-6 sm:mt-8 mb-10 sm:mb-8">
          {data.page.processPart3Title}
        </div>
        <div className="max-w-4xl mx-auto text-center text-2xl leading-9 font-normal text-gray-400 flex flex-col space-y-8">
          <p>{data.page.processPart3Description}</p>
        </div>
        <div className="max-w-5xl sm:flex w-full mt-4">
          <div className="hidden sm:grid flex-1 px-4 sm:px-10 pt-14">
            <div className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="hidden sm:flex flex-col items-center mx-6">
            <div className="w-0.5 bg-gradient-to-b from-transparent to-gray-300 h-1/4"></div>
            <div className="rounded-full w-2 h-2 ring-2 ring-gray-300"></div>
            <div className="w-0.5 bg-gradient-to-b from-gray-300 to-gray-400 h-1/4"></div>
            <div className="rounded-full w-2 h-2 ring-2 ring-gray-400"></div>
            <div className="w-0.5 bg-gradient-to-b from-gray-400 to-gray-500 h-1/4"></div>
            <div className="rounded-full w-2 h-2 ring-2 ring-gray-500"></div>
            <div className="w-0.5 bg-gradient-to-b from-gray-500 to-primary-300 h-1/4"></div>
          </div>
          <div className="flex-1 px-4 sm:px-10 py-16 md:mt-8 flex flex-col space-y-8 sm:text-left">
            {data.page.processPart2Blocks.map((item) => (
              <div className="flex flex-1" key={item.title}>
                <div className="flex flex-col m-auto">
                  <div className="text-2xl font-bold text-gray-200 tracking-tight">
                    {item.title}
                  </div>
                  <div className="text-gray-400 text-lg mt-2">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center items-center">
        <div
          className="h-32 w-0.5 bg-gradient-to-b from-transparent sm:from-primary-300 to-primary-400"
          id={data.page.processPart4Label.toLowerCase()}
        ></div>
        <div className="h-10 w-10 rounded-full flex bg-gradient-to-br from-primary-400 to-primary-600">
          <div className="text-white text-lg font-bold m-auto">+</div>
        </div>
        <div className="mt-4">
          <div className="font-bold text-3xl text-transparent bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text">
            {data.page.processPart4Label}
          </div>
        </div>
        <div className="text-4xl sm:text-6xl lg:text-7xl text-gray-100 leading-none font-extrabold tracking-tight mt-6 sm:mt-8 mb-10 sm:mb-8">
          {data.page.processPart4Title}
        </div>
        <div className="max-w-4xl mx-auto text-center text-2xl leading-9 font-normal text-gray-400 flex flex-col space-y-8">
          <p>{data.page.processPart4Description}</p>
        </div>
      </div>
    </div>
  );
}
