import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Use | Attorney Nicholas Edwards",
  description:
    "Review the Terms of Use for the Attorney Nicholas Edwards website, including disclaimers, limitations of liability, and acceptable use guidelines.",
};

const sections = [
  {
    heading: "Acceptance of Terms",
    body: "By accessing and using this website (the \"Site\"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these Terms, please discontinue your use of the Site immediately.",
  },
  {
    heading: "No Attorney-Client Relationship",
    body: "The information provided on this Site is for general informational purposes only and does not constitute legal advice. Use of the Site or submission of a contact form does not create an attorney-client relationship between you and Attorney Nicholas Edwards. An attorney-client relationship is established only upon execution of a written engagement agreement signed by both parties.",
  },
  {
    heading: "Not Legal Advice",
    body: "Nothing on this Site should be construed as legal advice for any specific situation or matter. The content is provided as general information about legal topics and Attorney Nicholas Edwards's practice areas. Laws vary by jurisdiction and change frequently; information on this Site may not reflect the most current legal developments.",
  },
  {
    heading: "Accuracy of Information",
    body: [
      "We strive to keep information on this Site accurate and current. However, we make no representations or warranties of any kind regarding the completeness, accuracy, or timeliness of the content.",
      "Case results described on this Site reflect past outcomes and are not a guarantee of similar results in future matters. Each case is unique and is evaluated on its own facts.",
    ],
  },
  {
    heading: "Acceptable Use",
    body: [
      "You may use this Site solely for lawful purposes and in accordance with these Terms.",
      "You agree not to use the Site in any manner that could damage, disable, or impair the Site or interfere with others' use.",
      "You agree not to attempt unauthorized access to any part of the Site or its underlying systems.",
      "You agree not to submit false, misleading, or fraudulent information through the contact form.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: "All content on this Site, including text, graphics, logos, and images, is the property of Attorney Nicholas Edwards or its licensors and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content on this Site without express written permission.",
  },
  {
    heading: "Third-Party Links",
    body: "This Site may contain links to third-party websites for your convenience. We do not endorse or control the content of third-party sites and accept no responsibility for their accuracy, legality, or privacy practices. Accessing linked sites is at your own risk.",
  },
  {
    heading: "Disclaimer of Warranties",
    body: 'This Site is provided on an "as is" and "as available" basis without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.',
  },
  {
    heading: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Attorney Nicholas Edwards shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Site, even if we have been advised of the possibility of such damages.",
  },
  {
    heading: "Governing Law",
    body: "These Terms of Use shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in Dallas County, Texas.",
  },
  {
    heading: "Modifications",
    body: "We reserve the right to modify these Terms of Use at any time. Changes become effective upon posting to this page with an updated effective date. Your continued use of the Site after any changes constitutes your acceptance of the revised Terms.",
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout
      title="Terms of Use"
      effectiveDate="September 1, 2024"
      intro="Please read these Terms of Use carefully before using the website operated by Attorney Nicholas Edwards. These Terms govern your access to and use of this website and all content, services, and functionality available through it."
      sections={sections}
    />
  );
}
