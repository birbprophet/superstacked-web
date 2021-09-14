import DatoCmsMetadata from "@/components/meta/DatoCmsMetadata";
import Header from "@/components/layout/Header";
import { HOME_QUERY } from "@/queries/HomeQuery";
import { datoCmsRequest } from "@/scripts/datocms";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import LogoCloud from "@/components/home/LogoCloud";

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
      <Hero {...{ data }} />
      <LogoCloud {...{ data }} />
      <Process {...{ data }} />
    </>
  );
}
