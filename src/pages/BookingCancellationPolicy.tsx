
import Layout from "@/components/Layout";

const BookingCancellationPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Booking & Cancellation Policy</h1>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Booking Process</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                To secure your booking with KGMI Digital Studio:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li>Contact us via phone, email, or through our website</li>
                <li>Discuss your requirements and receive a quote</li>
                <li>Confirm your booking with a deposit payment</li>
                <li>Receive booking confirmation with session details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Deposit Requirements</h2>
              <p className="text-gray-300 leading-relaxed">
                A non-refundable deposit of 30% is required to secure your booking. This deposit will be applied 
                toward your final invoice. The remaining balance is due on the day of service or as specified 
                in your service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cancellation Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Client Cancellations</h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    <li><strong>More than 48 hours:</strong> Full refund minus deposit</li>
                    <li><strong>24-48 hours:</strong> 50% refund of total amount</li>
                    <li><strong>Less than 24 hours:</strong> No refund</li>
                    <li><strong>No-show:</strong> Full payment required</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Studio Cancellations</h3>
                  <p className="text-gray-300 leading-relaxed">
                    In the rare event that we need to cancel due to equipment failure, emergency, or other 
                    unforeseen circumstances, we will provide full refund and assist in rescheduling.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Rescheduling</h2>
              <p className="text-gray-300 leading-relaxed">
                Rescheduling requests made more than 24 hours in advance will be accommodated subject to availability. 
                Rescheduling fees may apply for last-minute changes. We allow one free rescheduling per booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Late Arrivals</h2>
              <p className="text-gray-300 leading-relaxed">
                If you arrive late for your session, your session time may be shortened to accommodate other bookings. 
                Full payment is still required regardless of shortened session time due to late arrival.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Weather & Force Majeure</h2>
              <p className="text-gray-300 leading-relaxed">
                For outdoor shoots affected by severe weather conditions or events beyond our control, 
                we will work with you to reschedule at no additional cost.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact for Cancellations</h2>
              <p className="text-gray-300 leading-relaxed">
                All cancellation requests must be made in writing via email or confirmed over the phone:
              </p>
              <div className="mt-3 text-gray-300">
                <p>Email: info@kgmi.net</p>
                <p>Phone: +91-9867226595</p>
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

export default BookingCancellationPolicy;
