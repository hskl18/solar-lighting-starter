"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type FormState =
  | { status: "idle"; message: "" }
  | { status: "submitting"; message: "" }
  | { status: "success" | "error"; message: string };

const initialState: FormState = { status: "idle", message: "" };

export function QuoteForm() {
  const [state, setState] = useState<FormState>(initialState);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const wasSubmittingRef = useRef(false);

  useEffect(() => {
    if (state.status === "submitting") {
      wasSubmittingRef.current = true;
      return;
    }

    if (wasSubmittingRef.current) {
      wasSubmittingRef.current = false;
      submitButtonRef.current?.focus();
    }
  }, [state.status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setState({ status: "submitting", message: "" });

    const form = new FormData(formElement);
    const payload = {
      projectType: form.get("projectType"),
      fixtureCount: form.get("fixtureCount"),
      timeline: form.get("timeline"),
    };

    try {
      const [response] = await Promise.all([
        fetch("/api/quote", {
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
          method: "POST",
        }),
        new Promise((resolve) => window.setTimeout(resolve, 400)),
      ]);
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setState({
          status: "error",
          message: result.message || "Please check the form and try again.",
        });
        return;
      }

      formElement.reset();
      setState({
        status: "success",
        message: result.message || "Demo request validated.",
      });
    } catch {
      setState({
        status: "error",
        message: "The demo request could not be validated. Check your connection and try again.",
      });
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Project type
          <select autoComplete="off" defaultValue="" name="projectType" required>
            <option disabled value="">
              Select one
            </option>
            <option value="parking">Parking area</option>
            <option value="path">Path or park</option>
            <option value="campus">Campus</option>
          </select>
        </label>

        <label>
          Approximate fixture count
          <select autoComplete="off" defaultValue="" name="fixtureCount" required>
            <option disabled value="">
              Select one
            </option>
            <option value="1-10">1-10</option>
            <option value="11-30">11-30</option>
            <option value="31-plus">31+</option>
          </select>
        </label>

        <label>
          Planning timeline
          <select autoComplete="off" defaultValue="" name="timeline" required>
            <option disabled value="">
              Select one
            </option>
            <option value="research">Researching</option>
            <option value="this-year">This year</option>
            <option value="next-year">Next year</option>
          </select>
        </label>
      </div>

      <div className="form-actions">
        <button
          aria-busy={state.status === "submitting"}
          className="button"
          disabled={state.status === "submitting"}
          ref={submitButtonRef}
          type="submit"
        >
          {state.status === "submitting" ? (
            <span aria-hidden="true" className="button-spinner" />
          ) : null}
          Validate demo request
        </button>
        <p className="form-disclaimer">
          Demo only. No personal information is requested, stored, or sent.
        </p>
      </div>

      <p
        aria-live="polite"
        className={`form-message ${state.status === "error" ? "form-message-error" : ""}`}
        role="status"
      >
        {state.message}
      </p>
    </form>
  );
}
