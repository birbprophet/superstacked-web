import DatoCmsMetadata from "@/components/meta/DatoCmsMetadata";
import Header from "@/components/layout/Header";
import { HOME_QUERY } from "@/queries/HomeQuery";
import { createSubscriptionProps } from "@/scripts/datocms";
import { useQuerySubscription } from "react-datocms";

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

  return (
    <>
      <DatoCmsMetadata {...{ data }} />
      <Header {...{ data }} />
    </>
  );
}
