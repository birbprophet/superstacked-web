import Metadata from "@/components/meta/Metadata";

export default function DatoCmsMetadata(props) {
  const { data } = props;
  return (
    <Metadata
      title={
        data.page?.seoTitle ||
        data.site.globalSeo.siteName + data.site.globalSeo.titleSuffix
      }
      description={
        data.page?.seoDescription ||
        data.site.globalSeo.siteName +
          data.site.globalSeo.fallbackSeo.description
      }
    />
  );
}
