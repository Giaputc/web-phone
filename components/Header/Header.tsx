'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Hàm cuộn mượt đến section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoIcon}>📱</div>
              <span className={styles.logoText}>TDK</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/" className={styles.navLink}>Trang chủ</Link></li>
            <li>
              <button 
                onClick={() => scrollToSection('gioi-thieu')} 
                className={styles.navButton}
              >
                Giới thiệu
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('thiet-bi')} 
                className={styles.navButton}
              >
                Thiết bị có sẵn
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('cau-hoi')} 
                className={styles.navButton}
              >
                Câu hỏi thường gặp
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('lien-he')} 
                className={styles.navButton}
              >
                Liên hệ
              </button>
            </li>
          </ul>
        </nav>

        {/* Button Tư vấn Desktop */}
        <button className={styles.btnConsult}>
          Nhận tư vấn
        </button>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Menu"
          type="button"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            <li><Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>Trang chủ</Link></li>
            <li>
              <button 
                onClick={() => scrollToSection('gioi-thieu')} 
                className={styles.mobileNavButton}
              >
                Giới thiệu
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('thiet-bi')} 
                className={styles.mobileNavButton}
              >
                Thiết bị có sẵn
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('cau-hoi')} 
                className={styles.mobileNavButton}
              >
                Câu hỏi thường gặp
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('lien-he')} 
                className={styles.mobileNavButton}
              >
                Liên hệ
              </button>
            </li>
            <li>
              <button className={styles.mobileBtnConsult} onClick={closeMenu}>
                Nhận tư vấn
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}