import { AppWindow, Camera, MapPin, Mic, Image as ImageIcon, Phone, MessageSquare } from 'lucide-react';
import Carousel from './Carousel';
import '../Features.css';

const featuresData = [
  {
    id: 1,
    title: 'Intuitive UI',
    description: "Clean, intuitive interface with an at-a-glance dashboard.",
    icon: <AppWindow className="h-6 w-6 text-white" />
  },
  {
    id: 2,
    title: 'Remote Camera',
    description: "Securely access the device's camera in real-time.",
    icon: <Camera className="h-6 w-6 text-white" />
  },
  {
    id: 3,
    title: 'Real-time Location',
    description: "Track exact location with live GPS data and history.",
    icon: <MapPin className="h-6 w-6 text-white" />
  },
  {
    id: 4,
    title: 'Live Microphone',
    description: "Listen to ambient sounds for comprehensive monitoring.",
    icon: <Mic className="h-6 w-6 text-white" />
  },
  {
    id: 5,
    title: 'Media Access',
    description: "View photos and videos saved on the device securely.",
    icon: <ImageIcon className="h-6 w-6 text-white" />
  },
  {
    id: 6,
    title: 'Call & SMS Logs',
    description: "Monitor incoming/outgoing calls and text messages.",
    icon: <Phone className="h-6 w-6 text-white" />
  },
  {
    id: 7,
    title: 'Live Chat',
    description: "Watch ongoing chats on popular platforms as they happen.",
    icon: <MessageSquare className="h-6 w-6 text-white" />
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-[#121212] flex justify-center items-center overflow-hidden">
      <div className="w-full flex flex-col items-center gap-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Powerful Features</h2>

        {/* Increased height for larger carousel items */}
        <div style={{ height: '500px', width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <Carousel
            items={featuresData}
            baseWidth={600} /* Increased size here */
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;