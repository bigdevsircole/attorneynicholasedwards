import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Attorney Nicholas Edwards",
  description:
    "Learn how Attorney Nicholas Edwards collects, uses, and protects your personal information. Read our full Privacy Policy.",
};

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "Contact information you voluntarily provide (name, email address, phone number, and message content) when you submit the contact form on our website.",
      "Usage data collected automatically, such as IP address, browser type, operating system, referring URLs, and pages visited — used solely for site analytics and security.",
      "Cookies and similar technologies that remember your preferences and help us understand how visitors interact with our site. You may disable cookies in your browser settings at any time.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "To respond to your inquiries and schedule consultations.",
      "To maintain and improve the performance and security of our website.",
      "To comply with legal obligations and professional ethics rules governing attorneys.",
      "We do not sell, trade, or rent your personal information to any third party.",
    ],
  },
  {
    heading: "Attorney-Client Privilege Notice",
    body: "Submitting a message through our contact form does not establish an attorney-client relationship. Confidential or time-sensitive matters should not be sent through this website. An attorney-client relationship is established only by a signed written engagement agreement.",
  },
  {
    heading: "Data Retention",
    body: "We retain contact form submissions for a period of 24 months. Analytics data is retained in aggregate form only. You may request deletion of your personal data at any time by contacting us directly.",
  },
  {
    heading: "Third-Party Services",
    body: [
      "Our website may use third-party services such as email delivery providers and analytics platforms. These services are bound by their own privacy policies and are used solely to operate and improve our website.",
      "We do not share your personal information with advertisers or data brokers.",
    ],
  },
  {
    heading: "Security",
    body: "We implement industry-standard security measures including HTTPS encryption and access controls to protect your information. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "Your Rights",
    body: [
      "Access: You may request a copy of the personal information we hold about you.",
      "Correction: You may request correction of inaccurate or incomplete data.",
      "Deletion: You may request deletion of your personal data, subject to any applicable legal retention requirements.",
      "To exercise any of these rights, contact us at info@attorneynicholasedwards.com.",
    ],
  },
  {
    heading: "Children's Privacy",
    body: "Our website is not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Privacy Policy periodically. Material changes will be reflected by an updated effective date at the top of this page. We encourage you to review this page periodically.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      effectiveDate="September 1, 2024"
      intro="Attorney Nicholas Edwards is committed to protecting the privacy of individuals who visit our website. This Privacy Policy explains what information we collect, how we use it, and your rights with respect to that information. By using this website, you agree to the practices described below."
      sections={sections}
    />
  );
}
