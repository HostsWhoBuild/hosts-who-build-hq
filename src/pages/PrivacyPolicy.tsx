import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📄</span>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900">
                Privacy Policy
              </h1>
            </div>
            <p className="text-navy-500 mb-8">
              <strong>Last Updated:</strong> 24th January, 2026
            </p>

            <div className="space-y-8 text-navy-700">
              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">1. Introduction</h2>
                <p>
                  Welcome to HostsWhoBuild.com ("we", "us", "our"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you visit or interact with our website and services. Your privacy matters to us and we are committed to protecting your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">2. Information We Collect</h2>
                <p className="mb-3">
                  We may collect information that identifies you ("Personal Data"), including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Contact details</li>
                  <li>User content (comments, posts)</li>
                  <li>Airbnb or Short Term Rental Listing Links and Details</li>
                  <li>Usage data and analytics (e.g., pages visited, time on site)</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">3. How We Collect Information</h2>
                <p className="mb-3">We collect Personal Data when you:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Register for updates or newsletters</li>
                  <li>Join our community</li>
                  <li>Submit comments, posts, or other content</li>
                  <li>Subscribe to events or contact us</li>
                  <li>Browse our pages (via cookies and analytics tools)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">4. Use of Your Information</h2>
                <p className="mb-3">We use your information to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide and maintain the website</li>
                  <li>Respond to your requests or inquiries</li>
                  <li>Send newsletters or informational updates</li>
                  <li>Analyze and improve site performance and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">5. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to monitor activity on our site and hold certain information. You can manage cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">6. Sharing Your Information</h2>
                <p className="mb-3">We do not sell your personal data. We may share your data with:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Service providers who help with site operation (e.g., hosting, email delivery)</li>
                  <li>Legal authorities if required by law</li>
                  <li>Third-party tools and analytics providers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">7. Third-Party Links</h2>
                <p>
                  Our site may contain links to third-party websites. We are not responsible for their content or privacy practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">8. Data Security</h2>
                <p>
                  We use reasonable technical safeguards to protect your data, though no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">9. Data Retention</h2>
                <p>
                  We retain your data only as long as necessary to provide services, fulfill obligations, and comply with legal requirements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">10. Your Rights</h2>
                <p>
                  Depending on your location, you may have rights to access, correct or delete your data, and to opt-out of certain data uses. Contact us to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">11. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. We'll notify changes by posting the updated date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy-900 mb-3">12. Contact Information</h2>
                <p>
                  If you have questions about this policy, please contact us at{" "}
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

export default PrivacyPolicy;
