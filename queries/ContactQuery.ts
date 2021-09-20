export const CONTACT_QUERY = `
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
}
`;
