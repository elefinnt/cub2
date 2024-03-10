"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqkrldlg");

  if (state.succeeded) {
    return (
      <div className="main-contact-wrapper">
        <h1 className="main-contact-form-title">Contact us</h1>
        <div className="main-contact-body text-white">
          <p>Thanks for enquiring! We will be in touch shortly</p>
        </div>
      </div>
    );
  }
  return (
    <div className="main-contact-wrapper">
      <h1 className="main-contact-form-title">Contact us</h1>
      <div className="main-contact-body">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-top grid grid-cols-2">
            <div className="form-top-block">
              <div className="mt-6">
                <label htmlFor="name" className="" />

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  className="input-wrapper bg-transparent border-b border-white text-[#ffdb3b]"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="mt-6">
                <label htmlFor="email" className="" />

                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="input-wrapper bg-transparent border-b border-white text-[#ffdb3b]"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="form-top-block">
              <div className="mt-6">
                <label htmlFor="phone" className="" />

                <input
                  // autoComplete="off" didnt work, but random string worked
                  autoComplete="asdasdasd"
                  id="phone"
                  type="text"
                  name="tel"
                  placeholder="Phone"
                  className="input-wrapper bg-transparent border-b border-white text-[#ffdb3b]"
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="" />

                <textarea
                  required
                  id="message"
                  name="message"
                  placeholder="Project Info (Budget if avail.)*"
                  className="input-wrapper bg-transparent border-b border-white text-[#ffdb3b] h-full resize-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>
          </div>
          <div className="w-full bg-[#303030] mt-10 flex items-center justify-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="text-white py-[18px] w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
