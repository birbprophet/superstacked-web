export const ABOUT_QUERY = `
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
  page: about(locale: $locale) {
    seoTitle
    seoDescription
    heroTitle
    heroDescription
    heroContactButtonText
    heroAboutButtonText
    teamTitle
    teamDescription
    teamProfiles {
      name
      title
      bio
      linkedinUrl
      personalSiteUrl
      profilePicture {
        responsiveImage(imgixParams: { fit: crop, w: 400, h: 400 }) {
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
  }
}
`;
