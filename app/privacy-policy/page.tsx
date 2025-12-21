import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Alka Bulchandani",
  description:
    "Privacy Policy for Dr. Alka Bulchandani's dental practice. Learn how we collect, use, and protect your personal information.",
};

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-bg">
        <Header className="pb-4" />
      </div>

      <main className="max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-16 policy-page">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-cta hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Privacy Policy</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: December 21, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <p>
              At Harley International Medical Clinic, we respect your privacy
              and are committed to protecting your personal information. This
              Privacy Policy explains how we collect, use, and protect your
              information when you visit our website or contact us.
            </p>
            <p className="mt-2">
              By using our website, you agree to this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="font-bold mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Book a consultation through our website</li>
              <li>Contact us via WhatsApp, email, or phone</li>
              <li>Fill out forms on our website</li>
            </ul>
            <p className="mb-4">This information may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>your Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>Appointment Details</li>
              <li>Any dental or medical information you choose to share</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Automatically Collected Information
            </h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect certain
              information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser and device type</li>
              <li>Pages you visit on our website</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact you about appointments</li>
              <li>Answer your questions</li>
              <li>Provide dental care and related services</li>
              <li>Improve our website and services</li>
              <li>Follow UAE healthcare and legal requirements</li>
            </ul>
          </section>

          {/* Sharing Your Information */}
          <section>
            <h2 className="font-bold mb-4">Sharing Your Information</h2>
            <p className="mb-4">
              We do not sell or share your personal information for marketing
              purposes.
            </p>
            <p className="mt-2">Your information may be shared only with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our dental team and authorized staff</li>
              <li>
                Trusted service providers (such as website or appointment system
                providers)
              </li>
              <li>Authorities, if required by UAE law</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="font-bold mb-4">How We Protect Your Information</h2>
            <p className="mb-4">
              We take reasonable steps to keep your information safe and secure.
              While no system is completely secure, we follow appropriate
              safeguards to protect your data.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="font-bold mb-4">Cookies</h2>
            <p className="mb-4">
              Our website may use cookies to improve your experience. Cookies
              help us understand how visitors use our website. You can disable
              cookies in your browser settings if you prefer.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="font-bold mb-4">Children's Privacy</h2>
            <p>
              Our website is not meant for children under 13 years of age. We do
              not knowingly collect personal information from children without
              parental consent.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="tfont-bold mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Access:</strong> Ask what personal information we hold
                about you
              </li>
              <li>
                <strong>Correction:</strong> Request corrections to your
                information
              </li>
              <li>
                <strong>Deletion:</strong> Ask us to delete your information,
                where legally allowed
              </li>
            </ul>
            <p className="mt-4">
              To make a request, please contact us at:
              <a
                href="mailto:info@harleycl.com"
                className="inline-block ml-1 text-cta"
              >
                info@harleycl.com
              </a>
              .
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="font-bold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="font-bold mb-4">Contact Us</h2>
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

          {/* Consent */}
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Your Consent
            </h2>
            <p>
              By using our website and services, you consent to the collection,
              use, and sharing of your information as described in this Privacy
              Policy. If you do not agree with this policy, please do not use
              our website or services.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
