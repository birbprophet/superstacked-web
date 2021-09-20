import Link from "next/link";
import { createSubscriptionProps } from "@/scripts/datocms";
import { useQuerySubscription } from "react-datocms";
import { GetStaticPropsContext } from "next";

import DatoCmsMetadata from "@/components/meta/DatoCmsMetadata";
import Header from "@/components/layout/Header";
import Hero from "@/components/about/Hero";
import TeamSection from "@/components/about/TeamSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";

import { CONTACT_QUERY } from "@/queries/ContactQuery";

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await createSubscriptionProps({
    query: CONTACT_QUERY,
    variables: { locale: context.locale },
    preview: context.preview,
  });

  return {
    props,
  };
}

export default function PortfolioMaintenancePage(props) {
  const { subscription } = props;
  const { data } = useQuerySubscription(subscription);
  return (
    <>
      <DatoCmsMetadata {...{ data }} />
      <Header {...{ data }} />
      <div className="bg-gray-800 min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 -mt-24">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold text-gray-100 tracking-tight sm:text-5xl font-serif">
                  Under construction
                </h1>
                <p className="mt-2 text-base text-gray-400 max-w-lg">
                  Our portfolio is currently under construction. If you would
                  like to see examples of our projects, please{" "}
                  <a
                    href="https://calendly.com/superstacked/30min"
                    className="text-gray-300 font-medium underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    schedule a meeting with us
                  </a>
                  .
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link href="/">
                  <a className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    Go back home
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    Contact us
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer {...{ data }} />
    </>
  );
}
