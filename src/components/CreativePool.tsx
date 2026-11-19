"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import SectionHeading from "@/components/SectionHeading";
import styles from "./CreativePool.module.css";

// Connect page, below the hero — an open call for collaborators rather
// than a client-project form (see ContactForm), so it only asks for an
// email and a role. Front-end only: submitting just shows the confirmation.
export default function CreativePool() {
  const [isJoined, setIsJoined] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Submit stays disabled until both fields actually have content — belt
  // and braces alongside the inputs' own `required`, since that only blocks
  // submission on click rather than communicating it up front.
  const canSubmit = email.trim() !== "" && role.trim() !== "";

  // Fades this section's copy in from below the first time it scrolls into
  // view — a one-time entrance, so the observer disconnects itself once
  // triggered (same pattern as the project stacks — see ProjectMedia.tsx).
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (canSubmit) setIsJoined(true);
  }

  return (
    <section
      ref={sectionRef}
      className={`section ${styles.pool}`}
      data-visible={isVisible || undefined}
    >
      <div className={`container ${styles.inner}`}>
        <SectionHeading
          align="left"
          className={styles.heading}
          eyebrow="Open Collaboration"
          title="I like putting good people together."
          description={
            <>
              Alongside client work, I connect with photographers, designers, developers, social media and marketing specialists, and other creatives whose work I rate — and bring them in when a project calls for it.
              Add your email below to join the pool, and I&rsquo;ll reach out when there&rsquo;s a
              fit.
            </>
          }
        />

        {isJoined ? (
          <p className={styles.success} role="status">
            You&rsquo;re on the list — I&rsquo;ll be in touch when a project calls for it.
          </p>
  
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className="visuallyHidden" htmlFor="poolEmail">
                  Email address
                </label>
                <input
                  id="poolEmail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className="visuallyHidden" htmlFor="poolRole">
                  Your role
                </label>
                <input
                  id="poolRole"
                  name="role"
                  type="text"
                  autoComplete="off"
                  placeholder="Your role, e.g. ai engineer"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className={styles.submit}
              disabled={!canSubmit}
            >
              <span className={styles.submitLabel}>
                Join the pool
              </span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
