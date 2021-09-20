import { createSubscriptionProps } from "@/scripts/datocms";
import { useQuerySubscription } from "react-datocms";
import { GetStaticPropsContext } from "next";

import DatoCmsMetadata from "@/components/meta/DatoCmsMetadata";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import LogoCloud from "@/components/home/LogoCloud";
import Evaluate from "@/components/home/Evaluate";
import Process from "@/components/home/Process";
import DisplayCta from "@/components/home/DisplayCta";
import Features from "@/components/home/Features";
import ContactSection from "@/components/contact/ContactSection";
import CookiesBanner from "@/components/layout/CookiesBanner";

import { HOME_QUERY } from "@/queries/HomeQuery";

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await createSubscriptionProps({
    query: HOME_QUERY,
    variables: { locale: context.locale },
    preview: context.preview,
  });

  return {
    props,
  };
}

export default function Home(props) {
  const { subscription } = props;
  const { data } = useQuerySubscription(subscription);

  return (
    <>
      <DatoCmsMetadata {...{ data }} />
      <Header {...{ data }} />
      <Hero {...{ data }} />
      <LogoCloud {...{ data }} />
      <Process {...{ data }} />
      <DisplayCta {...{ data }} />
      <Evaluate {...{ data }} />
      <Features {...{ data }} />
      <ContactSection {...{ data }} />
      <CookiesBanner {...{ data }} />
    </>
  );
}
