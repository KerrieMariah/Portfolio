"use client";

import { useState } from "react";
import styles from "./seo-revamp.module.css";

const goals = ["More phone calls", "A website I'm proud of", "Ranking on Google", "Showing up in AI answers"];
const meetingOptions = ["Coffee in Naples", "At my business", "Video call"];
const steps = ["Your goals", "Your business", "Your details"];

const BOOKING_URL = "https://schedule.kerriemariah.com/in-person-website-audit";

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({
    goals: [],
    business: "",
    website: "",
    industry: "",
    name: "",
    email: "",
    phone: "",
    meeting: meetingOptions[0],
  });

  const update = (field) => (event) => setData({ ...data, [field]: event.target.value });

  const toggleGoal = (goal) =>
    setData({
      ...data,
      goals: data.goals.includes(goal) ? data.goals.filter((g) => g !== goal) : [...data.goals, goal],
    });

  const canContinue = [data.goals.length > 0, data.business.trim() !== "", data.name.trim() !== "" && data.email.trim() !== ""][step];

  const submit = async (event) => {
    event.preventDefault();
    if (step < steps.length - 1) {
      if (canContinue) setStep(step + 1);
      return;
    }

    setStatus("sending");
    const msg = [
      `Business: ${data.business}`,
      `Website: ${data.website || "None yet"}`,
      `Industry: ${data.industry || "Not given"}`,
      `Goals: ${data.goals.join(", ")}`,
      `Prefers to meet: ${data.meeting}`,
      `Phone: ${data.phone || "Not given"}`,
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: `SEO Revamp lead: ${data.business}`,
          msg,
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      window.gtag?.("event", "generate_lead", { form: "seo_revamp", meeting: data.meeting });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className={`${styles.formCard} ${styles.formDone}`}>
        <span className={styles.doneIcon}>✓</span>
        <h3>Thanks, {data.name.split(" ")[0]}!</h3>
        <p>I&apos;ll be in touch shortly to set up a time to meet. Want to lock it in now?</p>
        <a className={styles.primaryButton} href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Pick a time <span>↗</span>
        </a>
      </div>
    );
  }

  return (
    <form className={styles.formCard} onSubmit={submit} noValidate={step < steps.length - 1}>
      <div className={styles.formProgress}>
        {steps.map((label, index) => (
          <span key={label} className={index <= step ? styles.formStepActive : undefined}>
            <b>{index + 1}</b>
            {label}
          </span>
        ))}
      </div>

      {step === 0 && (
        <fieldset className={styles.formFields}>
          <legend>What would help your business most?</legend>
          <div className={styles.chips}>
            {goals.map((goal) => (
              <button
                type="button"
                key={goal}
                className={data.goals.includes(goal) ? styles.chipActive : undefined}
                aria-pressed={data.goals.includes(goal)}
                onClick={() => toggleGoal(goal)}
              >
                {goal}
              </button>
            ))}
          </div>
          <small>Pick as many as you like.</small>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className={styles.formFields}>
          <legend>Tell me about your business.</legend>
          <label>
            Business name
            <input value={data.business} onChange={update("business")} placeholder="Gulf Coast Plumbing" required autoFocus />
          </label>
          <label>
            <span>Current website <em>optional</em></span>
            <input value={data.website} onChange={update("website")} placeholder="yourbusiness.com" />
          </label>
          <label>
            <span>What do you do? <em>optional</em></span>
            <input value={data.industry} onChange={update("industry")} placeholder="HVAC, salon, law firm..." />
          </label>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className={styles.formFields}>
          <legend>How can I reach you?</legend>
          <label>
            Your name
            <input value={data.name} onChange={update("name")} autoComplete="name" required autoFocus />
          </label>
          <div className={styles.formRow}>
            <label>
              Email
              <input type="email" value={data.email} onChange={update("email")} autoComplete="email" required />
            </label>
            <label>
              <span>Phone <em>optional</em></span>
              <input type="tel" value={data.phone} onChange={update("phone")} autoComplete="tel" />
            </label>
          </div>
          <div className={styles.meetChoice} role="radiogroup" aria-label="How would you like to meet?">
            {meetingOptions.map((option) => (
              <button
                type="button"
                role="radio"
                key={option}
                aria-checked={data.meeting === option}
                className={data.meeting === option ? styles.chipActive : undefined}
                onClick={() => setData({ ...data, meeting: option })}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {status === "error" && (
        <p className={styles.formError}>
          That didn&apos;t send. Email <a href="mailto:hello@kerriemariah.com">hello@kerriemariah.com</a> or{" "}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">book a time</a>.
        </p>
      )}

      <div className={styles.formActions}>
        {step > 0 && (
          <button type="button" className={styles.backButton} onClick={() => setStep(step - 1)}>
            ← Back
          </button>
        )}
        <button type="submit" className={styles.primaryButton} disabled={!canContinue || status === "sending"}>
          {step < steps.length - 1 ? "Continue" : status === "sending" ? "Sending..." : "Book my free audit"}
          <span>→</span>
        </button>
      </div>
      <p className={styles.formNote}>No spam. No pressure. Just a conversation.</p>
    </form>
  );
}
