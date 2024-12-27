import React from "react";
import { Navbar } from "../components";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen py-10 mt-20 bg-[#050b14]'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl font-bold text-[#dfd9ff] mb-6'>
            Privacy Policy
          </h1>
          <p className='text-[#dfd9ff] mb-4'>
            Welcome to 360Syng! Your privacy is of utmost importance to us. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website.
          </p>

          <section className='mb-6'>
            <h2 className='text-2xl font-semibold text-[#dfd9ff] mb-2'>
              Information We Collect
            </h2>
            <ul className='list-disc list-inside text-[#dfd9ff]'>
              <li>
                Personal identification information (e.g., name, email address,
                phone number).
              </li>
              <li>
                Log data (e.g., IP address, browser type, pages visited, time
                spent).
              </li>
              <li>
                Cookies and usage data for website analytics and functionality.
              </li>
            </ul>
          </section>

          <section className='mb-6'>
            <h2 className='text-2xl font-semibold text-[#dfd9ff] mb-2'>
              How We Use Your Information
            </h2>
            <p className='text-[#dfd9ff]'>We use your data to:</p>
            <ul className='list-disc list-inside text-[#dfd9ff]'>
              <li>Provide and maintain our website.</li>
              <li>Improve user experience and functionality.</li>
              <li>
                Send updates, newsletters, and promotional content (if opted
                in).
              </li>
            </ul>
          </section>

          <section className='mb-6'>
            <h2 className='text-2xl font-semibold text-[#dfd9ff] mb-2'>
              How We Protect Your Information
            </h2>
            <p className='text-[#dfd9ff]'>
              We implement security measures to safeguard your personal
              information, including encryption, secure servers, and access
              control policies.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='text-2xl font-semibold text-[#dfd9ff] mb-2'>
              Your Rights
            </h2>
            <p className='text-[#dfd9ff]'>You have the right to:</p>
            <ul className='list-disc list-inside text-[#dfd9ff]'>
              <li>Access, update, or delete your personal data.</li>
              <li>Withdraw consent for data processing.</li>
              <li>File a complaint with a data protection authority.</li>
            </ul>
          </section>

          <section className='mb-6'>
            <h2 className='text-2xl font-semibold text-[#dfd9ff] mb-2'>
              Cookies Policy
            </h2>
            <p className='text-[#dfd9ff]'>
              We use cookies to track your preferences and enhance your
              experience. You can disable cookies through your browser settings.
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='text-2xl font-semibold text-[#dfd9ff] mb-2'>
              Changes to This Policy
            </h2>
            <p className='text-[#dfd9ff]'>
              We reserve the right to update this Privacy Policy at any time.
              Changes will be effective immediately upon posting.
            </p>
          </section>

          <p className='text-[#dfd9ff]'>
            If you have any questions about this Privacy Policy, please contact
            us at
            <a
              href='mailto:support@yourwebsite.com'
              className='text-blue-500 underline'
            >
              support@yourwebsite.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
