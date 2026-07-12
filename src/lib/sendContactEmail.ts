const DEFAULT_EMAILJS_CONFIG = {
  serviceId: "service_1vlrsbi",
  templateId: "template_udsi22r",
  publicKey: "gVP_hMOVbsZwFms1D",
} as const;

function getConfigValue(value: string | undefined, fallback: string) {
  const normalizedValue = value?.trim();
  return normalizedValue || fallback;
}

export async function sendContactEmail(form: HTMLFormElement) {
  const { default: emailjs } = await import("@emailjs/browser");

  const serviceId = getConfigValue(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    DEFAULT_EMAILJS_CONFIG.serviceId,
  );
  const templateId = getConfigValue(
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    DEFAULT_EMAILJS_CONFIG.templateId,
  );
  const publicKey = getConfigValue(
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    DEFAULT_EMAILJS_CONFIG.publicKey,
  );

  return emailjs.sendForm(serviceId, templateId, form, {
    publicKey,
    limitRate: {
      id: "portfolio-contact-form",
      throttle: 10_000,
    },
  });
}
