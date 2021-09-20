/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
};

export default function Footer(props) {
  const { data } = props;
  return (
    <footer className="bg-gray-850">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <Link href="/services">
              <a className='className="text-base text-gray-400 hover:text-gray-300'>
                {data.menu.servicesDropdownButtonText}
              </a>
            </Link>
          </div>
          {data.menu.links.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.path}>
                <a className='className="text-base text-gray-400 hover:text-gray-300'>
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>

        <p className="mt-8 text-center text-base text-gray-300">
          &copy; {data.menu.copyrightMessage}
        </p>
      </div>
    </footer>
  );
}
