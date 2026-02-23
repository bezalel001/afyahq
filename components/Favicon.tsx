import { useEffect } from "react";
import logo from "../afyahq-logo.png";

export function Favicon() {
  useEffect(() => {
    // Create or update favicon
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    
    link.type = "image/png";
    link.href = logo;

    // Also set apple-touch-icon for iOS
    let appleTouchIcon: HTMLLinkElement | null = document.querySelector("link[rel='apple-touch-icon']");
    
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement("link");
      appleTouchIcon.rel = "apple-touch-icon";
      document.head.appendChild(appleTouchIcon);
    }
    
    appleTouchIcon.href = logo;

    // Set page title
    document.title = "AfyaHQ Labs - Africa's Health Intelligence Hub";

    // Add meta description
    let metaDescription: HTMLMetaElement | null = document.querySelector("meta[name='description']");
    
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.content = "AfyaHQ Labs is Africa's headquarters for health, safety, and trust. We provide comprehensive testing, certification, and data insights for consumer products across African markets.";
  }, []);

  return null; // This component doesn't render anything
}
