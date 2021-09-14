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
    title(locale: $locale)
    description(locale: $locale)
    icon
  }
  page: home(locale: $locale) {
    seoDescription(locale: $locale)
    seoTitle(locale: $locale)
    heroDescription(locale: $locale)
    logoCloudTitle(locale: $locale)
    logoCloud {
      name
      url
      logo {
        url
      }
    }
    processTitle(locale: $locale)
    processPart1Label(locale: $locale)
    processPart1Title(locale: $locale)
    processPart1Description(locale: $locale)
    processPart1Blocks(locale: $locale) {
      title
      description
    }
    processPart2Label(locale: $locale)
    processPart2Title(locale: $locale)
    processPart2Description(locale: $locale)
    processPart2Blocks(locale: $locale) {
      title
      description
    }
    processPart3Label(locale: $locale)
    processPart3Title(locale: $locale)
    processPart3Description(locale: $locale)
    processPart3Blocks(locale: $locale) {
      title
      description
    }
    processPart4Label(locale: $locale)
    processPart4Title(locale: $locale)
    processPart4Description(locale: $locale)
  }
}
`;
