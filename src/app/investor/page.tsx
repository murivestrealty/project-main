import React, { useState } from "react";
import AuthModal from "../../components/ui/AuthModal";
import ForgotPasswordModal from "../../components/ForgotPasswordModal";

const InvestorLogin: React.FC = () => {
  const [authOpen, setAuthOpen] = useState(true);
  const [forgotOpen, setForgotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950 text-white flex">
      {/* Left Panel - Persuasive Copy */}
      <div className="hidden lg:flex flex-col justify-center w-1/2 p-16 bg-gradient-to-br from-navy-950 to-navy-900">
        <h1 className="text-4xl font-luxury font-bold text-gold-500 mb-6">
          Secure Investor Portal
        </h1>
        <p className="text-lg font-elegant text-gray-200 mb-6 leading-relaxed">
          Where discerning investors unlock exclusive opportunities in premium
          real estate assets. At Murivest Realty, we combine timeless real
          estate principles with modern investment intelligence to help you
          build generational wealth.
        </p>
        <ul className="space-y-4 text-white/90">
          <li>🔒 <span className="font-semibold text-gold-400">Security First:</span> Bank-grade authentication.</li>
          <li>🌍 <span className="font-semibold text-gold-400">Global Access:</span> Elite investors across Nairobi, London, Dubai & beyond.</li>
          <li>📈 <span className="font-semibold text-gold-400">Proven Returns:</span> Targeting stable yields in prime assets.</li>
        </ul>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md text-center">
          <h2 className="text-2xl font-luxury font-bold text-gold-500 mb-6">
            My Murivest – Investor Access
          </h2>

          {/* Trigger hidden forgot password modal */}
          <button
            id="forgot-password-trigger"
            className="hidden"
            onClick={() => setForgotOpen(true)}
          />

          <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
          <p className="text-center text-sm text-gray-400 mt-6">
            Trusted by investors in Nairobi, London, Dubai & beyond.
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal isOpen={forgotOpen} onClose={() => setForgotOpen(false)} />
    </div>
  );
};

export default InvestorLogin;
