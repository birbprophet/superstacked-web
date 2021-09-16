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
  allServices(locale: $locale) {
    title
    description
    icon
  }
  menu(locale: $locale) {
    servicesDropdownButtonText
    links {
      name
      path
    }
    customSectionTitle
    customSectionBadge
    customSectionDescription
    callToActionButtonText
  }
  legal(locale: $locale) {
    cookiesMessagePart1
    cookiesMessagePart2
    cookiesMessagePart3
    acceptCookiesMessage
  }
  page: home(locale: $locale) {
    seoTitle
    seoDescription
    promoSectionIcon
    promoSectionMain
    promoSectionCta
    heroTitlePart1
    heroTitlePart2
    heroTitlePart3
    heroDescription
    heroContactButtonText
    heroAboutButtonText
    logoCloudTitle
    logoCloud {
      name
      url
      logo {
        url
      }
    }
    processTitle
    processPart1Label
    processPart1Title
    processPart1Description
    processPart1Blocks {
      title
      description
    }
    processPart1Image {
      url
    }
    processPart2Label
    processPart2Title
    processPart2Description
    processPart2Blocks {
      title
      description
    }
    processPart2Image {
      url
    }
    processPart3Label
    processPart3Title
    processPart3Description
    processPart3Blocks {
      title
      description
    }
    processPart3Image {
      url
    }
    processPart4Label
    processPart4Title
    processPart4Description
    featuresSectionTitle
    features {
      name
      description
      icon
    }
    displayCtaFakeUrl
    displayCtaFakeAppName
    displayCtaTitlePart1
    displayCtaTitlePart2
    displayCtaDescription
    displayCtaButtonText
  }
}
`;
