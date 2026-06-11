import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ContactBar from '@/components/ContactBar/ContactBar';
import './globals.css';

export const metadata: Metadata = {
  title: 'TDK - Cho thuê iPhone chuyên nghiệp',
  description: 'Dịch vụ cho thuê iPhone, iPad, MacBook uy tín tại Hưng Yên',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 70px)' }}>
          {children}
        </main>
        <Footer />
        <ContactBar /> 
      </body>
    </html>
  );
}