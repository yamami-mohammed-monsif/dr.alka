import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Dr. Alka Bulchandani",
  description:
    "Terms of Service for Dr. Alka Bulchandani's dental practice. Review the terms and conditions for using our website and services.",
};

const TermsOfService = () => {
  return (
    <>
      <div className="bg-bg">
        <Header className="pb-4" />
      </div>

      <main className="max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-16 tos-page">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-cta hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Terms of Service</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">Last updated: December 21, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              1. Medical Disclaimer
            </h2>
            <p>
              Information on this website is for general information only. It
              does not replace professional dental advice, diagnosis, or
              treatment.
            </p>
            <p className="mt-4">
              A dentist-patient relationship is created only after an in-person
              consultation at our clinic.
            </p>
          </section>

          {/* Using Our Website */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              2. Using Our Website
            </h2>
            <p className="mb-4">
              You agree to use this website responsibly and not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide false or misleading information</li>
              <li>Try to access restricted areas of the website</li>
              <li>Interfere with the website’s operation</li>
            </ul>
          </section>

          {/* Free Consultation */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              3. Appointments
            </h2>
            <p className="mb-4">
              Submitting an appointment request through the website does not
              guarantee an appointment. Our team will contact you to confirm
              your booking.
            </p>
          </section>

          {/* Website Content */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              4. Website Content
            </h2>

            <p>
              All content on this website, including text, images, and logos,
              belongs to Harley International Medical Clinic and may not be
              copied or used without permission.
            </p>
          </section>

          {/* We are not responsible for: */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              5. Limitation of Responsibility
            </h2>
            <p className="mb-4">We are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any loss or damage from using this website</li>
              <li>Temporary website downtime or technical issues</li>
              <li>Information on third-party websites linked from our site</li>
            </ul>
          </section>

          {/* Links to Other Websites */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              6. Links to Other Websites
            </h2>

            <p>
              Our website may contain links to other websites for your
              convenience. We are not responsible for their content or privacy
              practices.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              7. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the United Arab Emirates.
            </p>
          </section>

          {/* Updates to These Terms */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              8. Updates to These Terms
            </h2>
            <p>
              We may update these Terms at any time. Continued use of the
              website means you accept the updated terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold mb-2">
                Harley International Medical Clinic
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@harleycl.com"
                  className="inline-block ml-1 text-cta"
                >
                  info@harleycl.com
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <Link
                  href="https://wa.me/971568089269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta hover:underline"
                >
                  +971 56 808 9269
                </Link>
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Acknowledgment
            </h2>
            <p>
              By using our website and services, you acknowledge that you have
              read, understood, and agree to be bound by these Terms of Service.
              If you do not agree to these Terms, please discontinue use of our
              website and services immediately.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TermsOfService;
