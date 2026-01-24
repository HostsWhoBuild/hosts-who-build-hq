import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📜</span>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900">
                Terms of Service
              </h1>
            </div>
            <p className="text-navy-500 mb-8">
              <strong>Last Updated:</strong> 24th January, 2026
            </p>

            <p className="text-navy-700 mb-8">
              These Terms of Service ("Terms") govern your access to and use of HostsWhoBuild.com ("the Website", "we", "us"). By accessing or using the Website, you agree to these Terms.
            </p>

            <div className="space-y-8 text-navy-700">
              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">1. Acceptance of Terms</h2>
                <p>
                  By using this Website, you confirm you agree to these Terms and our Privacy Policy. If you do not agree, do not use the Website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">2. Eligibility</h2>
                <p>
                  You must be at least 18 years old to use this Website or have the consent of a parent/legal guardian.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">3. Use of the Website</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>You may use the Website for lawful purposes only.</li>
                  <li>You agree not to interfere with the Website's functionality or security.</li>
                  <li>You must not post unlawful, offensive, or harmful content.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">4. User Content</h2>
                <p>
                  If you post comments or content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute that content on the Website. You are responsible for your own content and ensure it does not infringe others' rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">5. Intellectual Property</h2>
                <p>
                  All content on this Website (text, design, logos, etc.) is owned by us or licensed to us and is protected by copyright and other intellectual property laws. You may not use it without permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">6. Disclaimers</h2>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>The Website is provided "as is" and "as available".</li>
                  <li>We do not guarantee accuracy or completeness of content.</li>
                  <li>We disclaim all warranties, express or implied.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">7. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">8. Termination</h2>
                <p>
                  We may suspend or terminate your access if you violate these Terms. You may stop using the Website at any time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">9. Changes to Terms</h2>
                <p>
                  We may change these Terms at any time. Continued use after changes means you accept the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">10. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the jurisdiction where our company is registered.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">11. Contact Us</h2>
                <p>
                  For questions, please contact us at{" "}
                  <a href="mailto:info@hostswhobuild.com" className="text-gold-600 hover:underline">
                    info@hostswhobuild.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
