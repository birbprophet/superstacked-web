import Metadata from "@/components/meta/Metadata";

export default function DatoCmsMetadata(props) {
  const { data, pageData } = props;
  return (
    <Metadata
      title={
        pageData?.seoTitle ||
        data.site.globalSeo.siteName + data.site.globalSeo.titleSuffix
      }
      description={
        pageData?.seoDescription ||
        data.site.globalSeo.siteName +
          data.site.globalSeo.fallbackSeo.description
      }
    />
  );
}
