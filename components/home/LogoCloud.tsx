import Image from "next/image";

export default function LogoCloud(props) {
  const { data } = props;
  return (
    <div className="text-center pt-24 pb-6">
      <div className="text-gray-400 uppercase text-sm tracking-wider font-semibold mb-8 md:text-base md:mb-10">
        {data.page.logoCloudTitle}
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {data.page.logoCloud.slice(0, 4).map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
            >
              <Image src={item.logo.url} height={80} width={240} />
            </a>
          ))}
          <a
            className="hidden col-span-1 md:flex justify-center md:col-span-1 lg:col-span-1"
            href={data.page.logoCloud[4].url}
            target="_blank"
          >
            <Image
              src={data.page.logoCloud[4].logo.url}
              key={data.page.logoCloud[4].name}
              height={80}
              width={240}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
