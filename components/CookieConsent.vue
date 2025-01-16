<template>
  <div>
    <Transition
      enter-active-class="fade show"
      enter-from-class="opacity-0 translate-y-100"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="fade"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-100"
    >
      <div
        v-if="showConsentModal"
        class="fixed-bottom bg-white shadow border-top p-3"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-8 mb-3 mb-md-0">
              <div class="d-flex align-items-center gap-2 mb-2">
                <i class="bi bi-cookie text-primary h4 mb-0"></i>
                <h2 class="h5 fw-bold mb-0">Cookie Policy</h2>
              </div>
              <p class="mb-2">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                Please choose whether to accept or decline cookies.
              </p>
              <a 
                href="#"
                @click.prevent="showTermsModal = true"
                class="text-decoration-none small"
              >
                <i class="bi bi-info-circle me-1"></i>
                Learn more about how we use cookies
              </a>
            </div>
            <div class="col-md-4 text-md-end">
              <button
                @click="declineCookies"
                class="btn btn-outline-secondary me-2"
              >
                <i class="bi bi-x-circle me-1"></i>
                Decline
              </button>
              <button
                @click="acceptCookies"
                class="btn btn-primary"
              >
                <i class="bi bi-check-circle me-1"></i>
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Terms Modal -->
    <div
      class="modal fade"
      :class="{ show: showTermsModal }"
      tabindex="-1"
      :style="{ display: showTermsModal ? 'block' : 'none' }"
      aria-labelledby="termsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="termsModalLabel">Cookie Policy</h5>
            <button
              type="button"
              class="btn-close"
              @click="showTermsModal = false"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h2 class="h4 mb-3">Cookie Policy</h2>
            <p>This Cookie Policy explains how we use cookies and similar technologies on our website.</p>
            
            <h3 class="h5 mb-3 mt-4">What are cookies?</h3>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            
            <h3 class="h5 mb-3 mt-4">How we use cookies</h3>
            <ul class="list-unstyled">
              <li class="mb-2">
                <i class="bi bi-check2-circle text-success me-2"></i>
                <strong>Essential Cookies:</strong> Required for the website to function properly
              </li>
              <li class="mb-2">
                <i class="bi bi-check2-circle text-success me-2"></i>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
              </li>
              <li class="mb-2">
                <i class="bi bi-check2-circle text-success me-2"></i>
                <strong>Preference Cookies:</strong> Remember your settings and choices
              </li>
            </ul>
            
            <h3 class="h5 mb-3 mt-4">Managing Cookies</h3>
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies that are already 
              on your computer and you can set most browsers to prevent them from being placed.
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="showTermsModal = false"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Backdrop -->
    <div
      v-if="showTermsModal"
      class="modal-backdrop fade show"
    ></div>
  </div>
</template>

<script setup>
const { showConsentModal, acceptCookies, declineCookies } = useCookieConsent()
const showTermsModal = ref(false)
</script>

<style scoped>
.translate-y-100 {
  transform: translateY(100%);
}

.translate-y-0 {
  transform: translateY(0);
}

.fade {
  transition: opacity 0.2s ease-in-out, transform 0.3s ease-out;
}

.fixed-bottom {
  transition: transform 0.3s ease-out;
}

.gap-2 {
  gap: 0.5rem;
}

/* Prevent body scrolling when modal is open */
:global(body.modal-open) {
  overflow: hidden;
}
</style>