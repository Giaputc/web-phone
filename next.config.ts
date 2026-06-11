import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  
  // Thêm cấu hình này để cho phép truy cập từ IP
  allowedDevOrigins: ['192.168.0.105', 'localhost', '*.local-ip'],
  
  // Cấu hình cho production
  output: 'standalone',
};

export default nextConfig;