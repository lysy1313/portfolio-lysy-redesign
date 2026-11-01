import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLanguage } from "../content/useLanguage";
import {
  DISCORD,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_HANDLE,
  LINKEDIN_URL,
  TELEGRAM_HANDLE,
  TELEGRAM_URL,
} from "../content/siteContent";
import { copyToClipboard } from "../lib/copyToClipboard";
import { sendContactForm } from "../lib/emailjs";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { copy } = useLanguage();
  const [emailCopied, setEmailCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const copyResetTimerRef = useRef<number | null>(null);

  const isSending = submitStatus === "sending";
  const feedback =
    submitStatus === "success"
      ? copy.contact.sent
      : submitStatus === "error"
        ? copy.contact.failed
        : "";

  useEffect(() => {
    return () => {
      if (copyResetTimerRef.current !== null) {
        window.clearTimeout(copyResetTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await copyToClipboard(EMAIL);
      setEmailCopied(true);
      if (copyResetTimerRef.current !== null) {
        window.clearTimeout(copyResetTimerRef.current);
      }
      copyResetTimerRef.current = window.setTimeout(() => {
        setEmailCopied(false);
        copyResetTimerRef.current = null;
      }, 2200);
    } catch {
      setEmailCopied(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) {
      return;
    }

    const form = event.currentTarget;
    setSubmitStatus("sending");

    try {
      await sendContactForm(form);
      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  };

  const handleFormChange = () => {
    if (submitStatus === "success" || submitStatus === "error") {
      setSubmitStatus("idle");
    }
  };

  return (
    <section
      className="contact section section--bordered"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="shell">
        <SectionHeading
          number="04"
          eyebrow={copy.contact.eyebrow}
          title={copy.contact.title}
          description={copy.contact.description}
          headingId="contact-title"
        />

        <div className="contact-grid">
          <div className="contact-panel scroll-reveal">
            <span className="contact-panel__label">DIRECT / CHANNELS</span>

            <div className="contact-panel__links">
              <a href={`mailto:${EMAIL}`} className="contact-method">
                <span className="contact-method__icon">
                  <Icon name="mail" width={22} height={22} />
                </span>
                <span>
                  <small>{copy.contact.emailLabel}</small>
                  <strong>{EMAIL}</strong>
                </span>
                <Icon name="arrow-up-right" width={20} height={20} />
              </a>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >
                <span className="contact-method__icon">
                  <Icon name="telegram" width={21} height={21} />
                </span>
                <span>
                  <small>Telegram</small>
                  <strong>{TELEGRAM_HANDLE}</strong>
                </span>
                <Icon name="arrow-up-right" width={20} height={20} />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >
                <span className="contact-method__icon">
                  <Icon name="linkedin" width={21} height={21} />
                </span>
                <span>
                  <small>LinkedIn</small>
                  <strong>{LINKEDIN_HANDLE}</strong>
                </span>
                <Icon name="arrow-up-right" width={20} height={20} />
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >
                <span className="contact-method__icon">
                  <Icon name="github" width={22} height={22} />
                </span>
                <span>
                  <small>GitHub</small>
                  <strong>@lysy1313</strong>
                </span>
                <Icon name="arrow-up-right" width={20} height={20} />
              </a>

              <div className="contact-method">
                <span className="contact-method__icon contact-method__icon--discord">
                  DS
                </span>
                <span>
                  <small>{copy.contact.discordLabel}</small>
                  <strong>{DISCORD}</strong>
                </span>
                <span className="contact-method__status">
                  <span className="availability-dot" />
                </span>
              </div>
            </div>

            <button
              className="copy-email"
              type="button"
              onClick={() => void handleCopyEmail()}
            >
              <Icon name={emailCopied ? "check" : "copy"} width={18} height={18} />
              {emailCopied ? copy.contact.copied : copy.contact.copyEmail}
            </button>

            <div className="contact-panel__signal" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <form
            className="contact-form scroll-reveal"
            onSubmit={(event) => void handleSubmit(event)}
            onChange={handleFormChange}
            aria-busy={isSending}
          >
            <div className="contact-form__header">
              <span>{copy.contact.formTitle}</span>
              <span>EMAILJS / 01</span>
            </div>

            <label className="form-field">
              <span>{copy.contact.nameLabel}</span>
              <input
                type="text"
                name="user_name"
                autoComplete="name"
                placeholder={copy.contact.namePlaceholder}
                minLength={2}
                required
              />
            </label>

            <label className="form-field">
              <span>{copy.contact.emailFieldLabel}</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder={copy.contact.emailPlaceholder}
                required
              />
            </label>

            <label className="form-field">
              <span>{copy.contact.subjectLabel}</span>
              <input
                type="text"
                name="title"
                placeholder={copy.contact.subjectPlaceholder}
                minLength={3}
                required
              />
            </label>

            <label className="form-field">
              <span>{copy.contact.messageLabel}</span>
              <textarea
                name="message"
                placeholder={copy.contact.messagePlaceholder}
                minLength={10}
                rows={4}
                required
              />
            </label>

            <div className="contact-form__footer">
              <p>{copy.contact.formHint}</p>
              <button
                className="button button--primary"
                type="submit"
                disabled={isSending}
              >
                {isSending ? (
                  <span className="button__spinner" aria-hidden="true" />
                ) : (
                  <Icon name="arrow-up-right" width={19} height={19} />
                )}
                <span>
                  {isSending ? copy.contact.sending : copy.contact.submit}
                </span>
              </button>
            </div>

            <p
              className={`form-feedback form-feedback--${submitStatus}`}
              aria-live="polite"
            >
              {feedback}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
