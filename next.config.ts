import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Whitelist your custom local origins here
  allowedDevOrigins: [
    "local-origin.dev", 
    "getenhanced.local", 
    "192.168.1.34" // e.g., "192.168.1.5:3000"
  ],
};

export default nextConfig;