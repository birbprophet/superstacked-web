import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicSvg = dynamic(() => import("@/components/home/DisplayCtaSvg"), {
  loading: () => <></>,
});
const DynamicFakeBrowser = dynamic(
  () => import("@/components/home/DisplayCtaFakeBrowser"),
  {
    loading: () => <></>,
  }
);

export default function DisplayCta(props) {
  return (
    <>
      <div className="rounded-t-xl ring-1 ring-black ring-opacity-10 max-w-lg lg:max-w-4xl mx-auto hidden lg:grid">
        <div
          className="py-2 grid items-center gap-6 px-4 rounded-tr-xl sm:rounded-t-xl bg-gradient-to-b from-gray-50 to-gray-100"
          style={{
            gridTemplateColumns: "1fr minmax(min-content, 640px) 1fr",
          }}
        >
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
          </div>
          <div className="border border-black border-opacity-5 rounded-md overflow-hidden shadow-sm">
            <div className="bg-gradient-to-b from-white to-gray-50 text-sm py-1.5 text-center">
              <span>your-next-app-preview.superstacked.dev</span>
            </div>
          </div>
        </div>
        <div className="relative bg-white border-t border-gray-200">
          <div className="overflow-hidden h-72 flex flex-col">
            <div className="bg-white h-16 w-full border-b border-gray-200 shadow-sm flex justify-between items-center px-8">
              <div
                className="font-cabin font-extrabold text-xl text-gray-900"
                style={{
                  boxShadow:
                    "inset 0 -0.1666666667em 0 0 #fff, inset 0 -0.3333333333em 0 0 #BAE6FD",
                }}
              >
                your next app
              </div>
              <div className="flex space-x-2 items-center">
                <div className="bg-gray-200 h-6 w-14 rounded" />
                <div className="bg-gray-200 h-6 w-10 rounded" />
                <div className="bg-gray-200 h-6 w-16 rounded" />
                <div className="bg-gray-200 h-10 w-10 rounded-full ml-2" />
              </div>
            </div>
            <DynamicFakeBrowser />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-11 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 lg:col-span-6">
            <div className="lg:self-center flex flex-col h-full">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:leading-none">
                <span className="block text-primary-300">Start small.</span>
                <span className="block">Think global scale.</span>
              </h2>
              <p className="mt-4 lg:mt-8 text-lg leading-6 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                malesuada in justo sed consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam malesuada in justo sed
                consequat.
              </p>
              <div className="flex-1"></div>
              <div>
                <Link href="/signup">
                  <a className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-semibold text-gray-700 hover:text-gray-800 hover:bg-gray-100">
                    Get Started
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-16 pr-16 pl-8 hidden lg:grid lg:col-span-5">
            <DynamicSvg />
          </div>
        </div>
      </div>
    </>
  );
}
