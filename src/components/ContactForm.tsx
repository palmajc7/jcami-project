"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Inquiry starts at the same one-line height as the fields above
  // it, then grows downward as the visitor types past that — resetting to
  // "auto" first so it can shrink back too (e.g. after deleting a line),
  // not just grow. rows={1} + CSS resize:none/overflow:hidden hand all
  // sizing to this instead of the browser's native drag handle.
  function autoGrowInquiry(event: FormEvent<HTMLTextAreaElement>) {
    const el = event.currentTarget;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSent(true);
  }

  if (isSent) {
    return (
      <div className={styles.success} role="status">
        <h3>Message sent.</h3>
        <p>Your message was sent successfully.</p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onInput={(event) => setIsComplete(event.currentTarget.checkValidity())}
      noValidate
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label className="visuallyHidden" htmlFor="fullName">Full name*</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Full name*"
            required
          />
        </div>
        <div className={styles.field}>
          <label className="visuallyHidden" htmlFor="email">Email*</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email*"
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className="visuallyHidden" htmlFor="website">Website or social (optional)</label>
        <input id="website" name="website" type="text" placeholder="Website or social (optional)" />
      </div>

      <div className={styles.field}>
        <label className="visuallyHidden" htmlFor="inquiry">Inquiry</label>
        <textarea
          id="inquiry"
          name="inquiry"
          rows={1}
          placeholder="Inquiry"
          onInput={autoGrowInquiry}
        />
      </div>

      <button type="submit" className={styles.submit} disabled={!isComplete}>
        <span>Submit</span>
      </button>
    </form>
  );
}
