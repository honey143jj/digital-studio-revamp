
import Layout from "@/components/Layout";

const TermsConditions = () => {
  return (
    <Layout>
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using KGMI Digital Studio's services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Services Offered</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                KGMI Digital Studio provides the following services:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li>Photo studio rental and photography services</li>
                <li>Video production and editing</li>
                <li>Graphics design and branding</li>
                <li>Website development</li>
                <li>Digital marketing and SEO services</li>
                <li>Social media management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Payment Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                Payment terms will be specified in individual service agreements. Generally, a deposit may be required 
                to secure bookings, with the balance due upon completion of services. We accept various payment methods 
                including cash, bank transfer, and digital payments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All creative work produced by KGMI Digital Studio remains our intellectual property until full payment 
                is received. Upon payment, rights to the final deliverables are transferred to the client, while we 
                retain the right to use the work for portfolio and promotional purposes unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                KGMI Digital Studio shall not be liable for any indirect, incidental, special, or consequential damages 
                resulting from the use of our services. Our total liability shall not exceed the amount paid for the specific service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India, 
                specifically the state of Rajasthan.
              </p>
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

export default TermsConditions;
