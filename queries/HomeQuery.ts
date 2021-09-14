export const HOME_QUERY = `
query MyQuery($locale: SiteLocale = en) {
  site: _site(locale: $locale) {
    globalSeo {
      siteName
      titleSuffix
      fallbackSeo {
        description
      }
    }
  }
  allServices {
    title
    description
    icon
  }
  page: home(locale: $locale) {
    heroDescription
  }
}
`;
