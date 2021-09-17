import DatoCmsMetadata from "@/components/meta/DatoCmsMetadata";
import Header from "@/components/layout/Header";
import { HOME_QUERY } from "@/queries/HomeQuery";
import { createSubscriptionProps } from "@/scripts/datocms";
import Hero from "@/components/home/Hero";
import LogoCloud from "@/components/home/LogoCloud";
import Evaluate from "@/components/home/Evaluate";
import Process from "@/components/home/Process";
import DisplayCta from "@/components/home/DisplayCta";
import Features from "@/components/home/Features";
import { useQuerySubscription } from "react-datocms";
import CookiesBanner from "@/components/layout/CookiesBanner";
import { useEffect } from "react";
import redirect from "nextjs-redirect";

export async function getStaticProps(context) {
  const props = await createSubscriptionProps({
    query: HOME_QUERY,
    variables: { locale: "en" },
    preview: context.preview,
  });

  return {
    props,
  };
}

export default function Home(props) {
  const { subscription } = props;
  const { data } = useQuerySubscription(subscription);
  useEffect(() => {
    if (
      window &&
      window?.location?.href &&
      window?.location?.href?.includes("https://www.superstacked.dev")
    ) {
      redirect("https://superstacked.dev/");
    }
  }, []);

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
      <CookiesBanner {...{ data }} />
    </>
  );
}
