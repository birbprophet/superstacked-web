import DatoCmsMetadata from "@/components/meta/DatoCmsMetadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/contact/ContactSection";
import ServiceSection from "@/components/services/ServiceSection";
import { SERVICES_QUERY } from "@/queries/ServicesQuery";
import { createSubscriptionProps } from "@/scripts/datocms";
import { useQuerySubscription } from "react-datocms";

export async function getStaticProps(context) {
  const props = await createSubscriptionProps({
    query: SERVICES_QUERY,
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

  return (
    <>
      <DatoCmsMetadata {...{ data }} />
      <Header {...{ data }} />
      {data.allServices.map((serviceData) => (
        <ServiceSection {...{ serviceData, data }} key={data.name} />
      ))}
      <ContactSection {...{ data }} />
      <Footer {...{ data }} />
    </>
  );
}
