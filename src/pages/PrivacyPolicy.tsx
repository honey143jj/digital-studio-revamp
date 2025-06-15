
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed">
                At KGMI Digital Studio, we collect information you provide directly to us, such as when you contact us for services, 
                book studio sessions, or request quotes. This may include your name, email address, phone number, and project details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about your projects</li>
                <li>Send you updates about our services</li>
                <li>Process payments and bookings</li>
                <li>Respond to your inquiries and support requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share information with trusted service providers who assist us in 
                operating our business, conducting our services, or serving you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3 text-gray-300">
                <p>Email: info@kgmi.net</p>
                <p>Phone: +91-9867226595</p>
                <p>Address: 81, shiv colony, Habib Marg, Gandhi Path W, Vaishali Nagar, Jaipur, Rajasthan 302021</p>
              </div>
            </section>

            <section>
              <p className="text-gray-400 text-sm">
                Last updated: December 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
