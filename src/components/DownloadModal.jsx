import { motion } from 'framer-motion';
import { FiX, FiDownload } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';
import '../DownloadModal.css';
import kidsAppApk from '../assets/watcher-kids-installer.apk';

const DownloadModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="download-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="download-modal-header">
          <h1 className="download-modal-title">Download Center</h1>
          <button onClick={onClose} className="modal-close-button">
            <FiX size={28} />
          </button>
        </div>
        <div className="download-modal-content">
          <p className="download-modal-description">
            Get the right app for each device. Install the Parent app on your phone and the Kids app on the device you want to monitor.
          </p>
          <div className="download-buttons-container">
            <a
              href="https://play.google.com/store/apps/details?id=com.deku.watcher"
              target="_blank"
              rel="noopener noreferrer"
              className="download-button parent-app"
            >
              <FaGooglePlay className="download-button-icon" />
              <div className="button-text-wrapper">
                <span className="button-main-text">Parent App</span>
                <span className="button-sub-text">Get from Google Play</span>
              </div>
            </a>
            <a
              href={kidsAppApk}
              download="watcher-kids-installer.apk"
              className="download-button kids-app"
            >
              <FiDownload className="download-button-icon" />
               <div className="button-text-wrapper">
                <span className="button-main-text">Kids App</span>
                <span className="button-sub-text">Download APK Installer</span>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DownloadModal;