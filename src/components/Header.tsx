import React from "react";
import { IMAGES } from "@/assets/images";
const Header: React.FC = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div>
            {/* Growth Strats Official Logo */}
            <img 
              src="/logo.png"
              alt="Growth Strats Logo" 
              className="h-14 w-auto object-contain"
            />
          </div>
          
          {/* Optional: Add contact info or social links */}
          <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
            
            <span>✉️ info@growthstrats.com</span>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;
