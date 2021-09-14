import DatoCmsMetadata from "@/components/meta/DatoCmsMetadata";
import Header from "@/components/layout/Header";
import { HOME_QUERY } from "@/queries/HomeQuery";
import { datoCmsRequest } from "@/scripts/datocms";

export async function getStaticProps(context) {
  const data = await datoCmsRequest({
    query: HOME_QUERY,
    variables: { locale: "en" },
    preview: context.preview,
  });
  return {
    props: { data },
  };
}

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <DatoCmsMetadata {...{ data, pageData: data.home }} />
      <Header {...{ data }} />
    </>
  );
}
