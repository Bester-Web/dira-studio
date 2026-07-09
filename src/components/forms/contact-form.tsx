"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import { submitContactForm } from "@/app/contact/actions";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  /** Preselect a service/package, e.g. from /contact?package=professional */
  defaultService?: string;
}

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  htmlFor: string;
}

function Field({ label, error, children, htmlFor }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ defaultService = "" }: ContactFormProps) {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { service: defaultService },
  });

  async function onSubmit(values: ContactFormValues) {
    setServerError("");
    const result = await submitContactForm(values);
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setServerError(result.error ?? "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="ds-card flex flex-col items-center gap-4 p-10 text-center"
      >
        <CheckCircle2 className="size-12 text-success" aria-hidden />
        <h3 className="font-display text-xl font-semibold text-foreground">
          Message received. We&apos;re on it.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Expect a reply within one business day, usually much sooner. If it&apos;s
          urgent, WhatsApp or call us and we&apos;ll pick up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Honeypot — hidden from humans, tempting to bots */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            placeholder="John Smith"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field label="Business name" htmlFor="business" error={errors.business?.message}>
          <Input
            id="business"
            autoComplete="organization"
            placeholder="Smith Electrical"
            aria-invalid={!!errors.business}
            {...register("business")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="john@smithelectrical.co.za"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="phone" error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+27 82 123 4567"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field label="What are you interested in?" htmlFor="service" error={errors.service?.message}>
        <select
          id="service"
          aria-invalid={!!errors.service}
          className={cn(
            "flex h-12 w-full cursor-pointer appearance-none rounded-md border border-border bg-surface px-4 text-sm text-foreground transition-colors duration-300 ease-premium",
            "hover:border-border-strong focus:border-accent/60 focus:bg-surface-hover focus:outline-none"
          )}
          {...register("service")}
        >
          <option value="" className="bg-background-elevated">
            Choose an option…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug} className="bg-background-elevated">
              {s.name}
            </option>
          ))}
          <option value="not-sure" className="bg-background-elevated">
            Not sure yet, advise me
          </option>
        </select>
      </Field>

      <Field label="Tell us about your business" htmlFor="message" error={errors.message?.message}>
        <Textarea
          id="message"
          placeholder="What do you do, where do you operate, and what would make this project a win for you?"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      {status === "error" && serverError && (
        <p role="alert" className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <Button type="submit" size="xl" disabled={isSubmitting} className="mt-2 w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Send my enquiry
            <ArrowRight aria-hidden />
          </>
        )}
      </Button>
      <p className="text-xs text-faint">
        No spam, no obligation. We reply within one business day.
      </p>
    </form>
  );
}
