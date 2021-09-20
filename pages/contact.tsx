import { createSubscriptionProps } from "@/scripts/datocms";
import { useQuerySubscription } from "react-datocms";
import { GetStaticPropsContext } from "next";

import DatoCmsMetadata from "@/components/meta/DatoCmsMetadata";
import Header from "@/components/layout/Header";
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

export default function Contact(props) {
  const { subscription } = props;
  const { data } = useQuerySubscription(subscription);

  return (
    <>
      <DatoCmsMetadata {...{ data }} />
      <Header {...{ data }} />
      <ContactSection {...{ data }} />
      <Footer {...{ data }} />
    </>
  );
}
