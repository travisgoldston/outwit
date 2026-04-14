import type { Metadata } from "next";
import { buildMetadata, jsonLd, breadcrumbJsonLd, SITE } from "@/lib/seo";
import ContactForm from "./ui/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a strategy call with Outwit. Quick intake, plain English, and a free visibility check. We’ll get back to you within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  const url = `${SITE.baseUrl}/contact`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-ow-cream px-5 py-16 pt-24 text-ow-charcoal lg:px-12 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd({ url, crumbs }))}
      />
      <div className="mx-auto max-w-3xl">
        <p className="ow-label">Contact</p>
        <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
          Book a Strategy Call
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ow-mid">
          Quick questions so I can understand what you need—and come prepared with a real plan (not
          a pitch).
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

