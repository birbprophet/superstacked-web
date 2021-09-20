import { createSubscriptionProps } from "@/scripts/datocms";
import { useQuerySubscription } from "react-datocms";
import { GetStaticPropsContext } from "next";

import DatoCmsMetadata from "@/components/meta/DatoCmsMetadata";
import Header from "@/components/layout/Header";
import Hero from "@/components/about/Hero";
import TeamSection from "@/components/about/TeamSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";

import { ABOUT_QUERY } from "@/queries/AboutQuery";

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await createSubscriptionProps({
    query: ABOUT_QUERY,
    variables: { locale: context.locale },
    preview: context.preview,
  });

  return {
    props,
  };
}

export default function Contact(props) {
  const { subscription } = props;
  const { data } = useQuerySubscription(subscription);

  return (
    <>
      <DatoCmsMetadata {...{ data }} />
      <Header {...{ data }} />
      <Hero {...{ data }} />
      <TeamSection {...{ data }} />
      <ContactSection {...{ data }} />
      <Footer {...{ data }} />
    </>
  );
}
