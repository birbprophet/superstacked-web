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
    name
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
    copyrightMessage
  }
  legal(locale: $locale) {
    cookiesMessagePart1
    cookiesMessagePart2
    cookiesMessagePart3
    acceptCookiesMessage
  }
  contact(locale: $locale) {
    contactTitle
    contactDescription
    contactInformationHeader
    contactInformationDescription
    contactPhoneNumber
    contactEmail
    contactBookMeetingText
    contactFormTitle
    contactFormNameLabel
    contactFormCompanyLabel
    contactFormEmailLabel
    contactFormPhoneLabel
    contactFormSubjectLabel
    contactFormMessageLabel
    contactFormOptionalTag
    contactFormMessageTag
    contactFormSubmitButtonText
    contactFormSuccessMessage
    contactFormFailureMessage
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
      responsiveImage(imgixParams: { fit: crop, w: 480, h: 720 }) {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    processPart2Label
    processPart2Title
    processPart2Description
    processPart2Blocks {
      title
      description
    }
    processPart2Image {
      responsiveImage(imgixParams: { fit: crop, w: 480, h: 720 }) {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    processPart3Label
    processPart3Title
    processPart3Description
    processPart3Blocks {
      title
      description
    }
    processPart3Image {
      responsiveImage(imgixParams: { fit: crop, w: 480, h: 720 }) {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    processPart4Label
    processPart4Title
    processPart4Description
    evaluateTitlePart1
    evaluateTitlePart2
    evaluateDescriptionPart1
    evaluateDescriptionPart2
    evaluateDescriptionPart3
    evaluateButtonText
    displayCtaFakeUrl
    displayCtaFakeAppName
    displayCtaTitlePart1
    displayCtaTitlePart2
    displayCtaDescription
    displayCtaButtonText
    featuresSectionTitle
    features {
      name
      description
      icon
    }
  }
}
`;
