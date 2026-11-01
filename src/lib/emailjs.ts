interface EmailJsEnvironment {
  readonly VITE_EMAILJS_SERVICE_ID?: unknown;
  readonly VITE_EMAILJS_TEMPLATE_ID?: unknown;
  readonly VITE_EMAILJS_PUBLIC_KEY?: unknown;
}

const DEFAULT_EMAILJS_CONFIG = {
  serviceId: "service_1vlrsbi",
  templateId: "template_udsi22r",
  publicKey: "gVP_hMOVbsZwFms1D",
} as const;

function readEnvironmentValue(value: unknown, fallback: string): string {
  if (typeof value !== "string") {
    return fallback;
  }

  const normalizedValue = value.trim();
  return normalizedValue || fallback;
}

const environment = import.meta.env as EmailJsEnvironment;

const EMAILJS_CONFIG = {
  serviceId: readEnvironmentValue(
    environment.VITE_EMAILJS_SERVICE_ID,
    DEFAULT_EMAILJS_CONFIG.serviceId,
  ),
  templateId: readEnvironmentValue(
    environment.VITE_EMAILJS_TEMPLATE_ID,
    DEFAULT_EMAILJS_CONFIG.templateId,
  ),
  publicKey: readEnvironmentValue(
    environment.VITE_EMAILJS_PUBLIC_KEY,
    DEFAULT_EMAILJS_CONFIG.publicKey,
  ),
} as const;

export async function sendContactForm(form: HTMLFormElement) {
  const { sendForm } = await import("@emailjs/browser");

  return sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, form, {
    publicKey: EMAILJS_CONFIG.publicKey,
    limitRate: {
      id: "portfolio-contact-form",
      throttle: 10_000,
    },
  });
}
