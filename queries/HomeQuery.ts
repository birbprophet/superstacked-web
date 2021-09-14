export const HOME_QUERY = `
query HomeQuery($locale: SiteLocale = en) {
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
  home(locale: $locale) {
    heroTitle
    heroDescription
  }
}
`;
