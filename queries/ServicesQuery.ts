export const SERVICES_QUERY = `
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
    title
    description
    icon
    viewMoreButtonText
    sectionTitle
    sectionDescription
    sectionImage {
      responsiveImage(imgixParams: { fit: crop, w: 400, h: 500 }) {
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
  page: service(locale: $locale) {
    seoTitle
    seoDescription
  }
}
`;
