import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-deep text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-6 h-6" />
              <span className="text-xl font-bold">Water Quality Detection</span>
            </div>
            <p className="text-white/80">
              AI-powered water quality monitoring for a cleaner, safer future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <ul className="space-y-2 text-white/80">
              <li>Magic Bus India Foundation</li>
              <li>IBM Technology</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p>Developed by <span className="font-semibold text-white">Kunchapu Gowthami</span> under <span className="font-semibold text-white">Magic Bus India Foundation</span></p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} Water Quality Detection System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;