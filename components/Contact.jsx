import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { AxisHeading, ease } from "@/components/motion";
import { sendContactForm } from "@/lib/api";
import { profile } from "@/data/content";

const initValues = { fullname: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

// Contact sits on the same ground as every other panel, so the fields are
// outlined against the page rather than filled against a dark banner.
const fieldClass =
  "w-full rounded-card border border-rule bg-paper px-3.5 py-2.5 text-lede text-ink placeholder:text-muted/60 transition-colors focus:border-ink focus:outline-none";

const Contact = () => {
  const toast = useToast();
  const reduced = useReducedMotion();
  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }));

  const handleSubmit = async (event) => {
    // The form submits through the API route, so stop the native navigation.
    event.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true, error: "" }));
    try {
      await sendContactForm(values);
      setState(initState);
      toast({
        title: "Message sent.",
        description: "Andre will get back to you by email.",
        status: "success",
        duration: 4000,
        position: "bottom-right",
      });
    } catch (err) {
      setState((prev) => ({ ...prev, isLoading: false, error: err.message }));
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-5 short:py-3 sm:px-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-14">
          <div>
            <AxisHeading className="text-h2 font-bold text-ink" from={108}>
              Get in touch
            </AxisHeading>
            <p className="mt-4 max-w-prose text-body text-muted">
              I am looking for full-time software engineering roles starting after I
              graduate in December 2026. If you are hiring, or you just want to talk
              about something you are building, use the form and it will reach me
              directly.
            </p>

            <dl className="mt-6 space-y-3 text-body">
              <div>
                <dt className="text-muted">Based in</dt>
                <dd className="text-ink">{profile.location}</dd>
              </div>
            </dl>
          </div>

          <form onSubmit={handleSubmit} noValidate={false}>
            {error && (
              <motion.p
                role="alert"
                initial={{ opacity: 0, y: reduced ? 0 : -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease }}
                className="mb-5 rounded-card border border-signal/50 bg-signal/10 px-3.5 py-2.5 text-body text-signal"
              >
                {error} Try sending again in a moment.
              </motion.p>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullname" className="block text-body text-muted mb-2">
                  Full name
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  required
                  value={values.fullname}
                  onChange={handleChange}
                  placeholder="Eric Winters"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-body text-muted mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="subject" className="block text-body text-muted mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={values.subject}
                onChange={handleChange}
                placeholder="Backend role at Acme"
                className={fieldClass}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="block text-body text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={values.message}
                onChange={handleChange}
                placeholder="What are you working on?"
                className={`${fieldClass} resize-y`}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={reduced || isLoading ? undefined : { y: -2 }}
              whileTap={reduced || isLoading ? undefined : { y: 0, scale: 0.99 }}
              transition={{ duration: 0.2, ease }}
              className="mt-5 w-full rounded-card bg-ink px-5 py-3 text-body font-semibold text-paper transition-colors hover:bg-route disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
            >
              {isLoading ? "Sending" : "Send message"}
            </motion.button>
          </form>
        </div>

        <p className="mt-8 border-t border-rule pt-4 text-small text-muted">
          Designed and built by {profile.name}.
        </p>
      </div>
    </div>
  );
};

export default Contact;
