"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";

const budgets = [
  "Let's discuss",
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $40,000",
  "$40,000+",
];

type FormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone.trim() && !/^[+\d][\d\s().-]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number, or leave this blank.";
  }

  if (!values.service) {
    errors.service = "Please select a service.";
  }

  if (!values.budget) {
    errors.budget = "Please select a project budget.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Please tell us a little more about the project (at least 20 characters).";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-3xl border border-white/10 bg-navy-card/80 p-8 text-center sm:p-10"
        role="status"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-cyan" aria-hidden="true" />
        <h2 className="mt-4 font-display text-2xl font-semibold text-white">
          Thanks — we have your details
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Your message is ready on this page. Email delivery is not connected
          yet, so please also send your note to{" "}
          <a
            href="mailto:hello@codebabu.com"
            className="font-medium text-accent-soft underline-offset-4 hover:underline"
          >
            hello@codebabu.com
          </a>
          . We usually respond within one business day.
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => {
            setValues(initialValues);
            setErrors({});
            setSubmitted(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-white/10 bg-navy-card/80 p-5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          required
          error={errors.name}
          value={values.name}
          autoComplete="name"
          onChange={(value) => update("name", value)}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          error={errors.email}
          value={values.email}
          autoComplete="email"
          onChange={(value) => update("email", value)}
        />
        <Field
          id="company"
          label="Company"
          value={values.company}
          autoComplete="organization"
          onChange={(value) => update("company", value)}
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          error={errors.phone}
          value={values.phone}
          autoComplete="tel"
          onChange={(value) => update("phone", value)}
        />
        <SelectField
          id="service"
          label="Service"
          required
          error={errors.service}
          value={values.service}
          onChange={(value) => update("service", value)}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </SelectField>
        <SelectField
          id="budget"
          label="Project Budget"
          required
          error={errors.budget}
          value={values.budget}
          onChange={(value) => update("budget", value)}
        >
          <option value="">Select a range</option>
          {budgets.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </SelectField>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
            Message <span className="text-accent-soft">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={values.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            onChange={(event) => update("message", event.target.value)}
            className={inputClass(Boolean(errors.message))}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1.5 text-sm text-red-300">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "w-full rounded-xl border bg-ink/50 px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-muted/70",
    invalid
      ? "border-red-400/60 focus:border-red-300"
      : "border-white/10 focus:border-accent/60",
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-white">
        {label}
        {required ? <span className="text-accent-soft"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass(Boolean(error))}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-white">
        {label}
        {required ? <span className="text-accent-soft"> *</span> : null}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass(Boolean(error))}
      >
        {children}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
