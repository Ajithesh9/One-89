import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const PrivacyModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-dark-surface rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold text-dark-onSurface">Privacy Policy</h1>
          <button onClick={onClose} className="text-dark-onSurfaceSecondary hover:text-dark-primary">
            <FiX size={28} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 text-dark-onSurfaceSecondary overflow-y-auto">
          <p className="mb-6 text-sm">This Privacy Policy was last changed on 4 Feb 2024</p>
          
          <h2 className="text-xl font-semibold text-dark-onSurface mb-2">1. Who we are</h2>
          <p className="mb-4">One89. ("we", "us" or " our") respects your privacy and values the trust you place in us when you share your personal data with us. This privacy policy sets out how we collect, process, and use your personal data when you access and use our services, including the entire Watcher product line (collectively "Watcher"), our websites (<a href="https://www.one89.in/" className="text-dark-primary hover:underline pr-1">www.one89.in</a>and all sub-domains under one89.in) and all services provided by us from time to time (collectively the "Services").</p>
          <p className="mb-4">By using our Services, you agree to this Privacy Policy and our Terms and Conditions. We are not responsible for any legal cases, and the end user is solely responsible for any consequences arising from the use of our Services.</p>

          <h2 className="text-xl font-semibold text-dark-onSurface mb-2">2. What data we collect and how we use them</h2>
          <p className="mb-4">We set out below the types of data we collect and the purposes for which we use them. It is important to note that all responsibilities regarding the data collected lie with the user. We are not responsible for any data leaks or misuse.</p>

          <h2 className="text-xl font-semibold text-dark-onSurface mb-2">3. How long we keep your personal data</h2>
          <p className="mb-4">We do not store any data longer than necessary. Your personal data will be deleted after the expiration time, depending on factors such as whether you have an account with us or have interacted with us.</p>
          
          <h2 className="text-xl font-semibold text-dark-onSurface mb-2">4. Sharing of your personal data</h2>
          <p className="mb-4">We do not sell, lease, rent, or give away your personal data except under the circumstances set out below. It is important to note that we are not responsible for any legal cases arising from the sharing of your data.</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>We may share your personal data with other members of our group of companies so we can provide the best services across our group. They are bound to keep your information in accordance with this policy.</li>
            <li>We may also share your personal data with certain contractors or service providers. They will process your personal data on behalf of us, for example, database service providers, advertising agencies, or customer relation management service providers. Our contractors and service providers will be required to meet our standards on processing data and security. The information we provide to them, including your personal data, will only be provided in connection with the performance of their functions.</li>
            <li>If we have obtained your explicit consent in advance.</li>
          </ul>
          <p className="mb-4">Your personal data may be shared if it is made anonymous and aggregated, as in such circumstances the anonymized data will cease to be personal data.</p>
          
          <h2 className="text-xl font-semibold text-dark-onSurface mb-2">5. Your rights</h2>
          <p className="mb-4">You may have certain rights in relation to your personal data. We have listed below the rights you have over your personal data. It is important to note that users can access their data, and we are not responsible for any legal cases related to the exercise of these rights.</p>
          <p className="mb-4">You can exercise the above rights by contacting us at<a href="mailto:support@one89.in" className="text-dark-primary hover:underline pl-1">support@one89.in</a>.</p>
          
          <h2 className="text-xl font-semibold text-dark-onSurface mb-2">6. Security</h2>
          <p className="mb-4">We are committed to keeping your personal data safe. We provide high data safety measures, and we are not responsible for any legal cases related to the security of your personal data.</p>
          
          <h2 className="text-xl font-semibold text-dark-onSurface mb-2">7. Changes to the policy</h2>
          <p className="mb-4">This policy will be updated from time to time.</p>
          <p className="mb-4">We will inform you of the updated policy by providing (i) a prominent link on our websites and Services, and (ii) by other means as appropriate.</p>

          <h2 className="text-xl font-semibold text-dark-onSurface mb-2">8. How to contact us</h2>
          <p>If you have any questions about this policy, please contact us at:<a href="mailto:support@one89.in" className="text-dark-primary hover:underline pl-1">support@one89.in</a>.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyModal;