export const useCookieConsent = () => {
  const cookieConsent = useCookie('cookie-consent', {
    default: () => null,
    watch: true
  })

  const showConsentModal = computed(() => cookieConsent.value === null)

  const acceptCookies = () => {
    cookieConsent.value = 'accepted'
  }

  const declineCookies = () => {
    cookieConsent.value = 'declined'
  }

  return {
    cookieConsent,
    showConsentModal,
    acceptCookies,
    declineCookies
  }
}