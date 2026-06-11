'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hàm toggle menu đơn giản
  const toggleMenu = () => {
    console.log('=== MENU BUTTON CLICKED ===');
    console.log('Current state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
    console.log('New state will be:', !isMenuOpen);
  };

  // Hàm đóng menu
  const closeMenu = () => {
    setIsMenuOpen(false);
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
            <li><Link href="/gioi-thieu" className={styles.navLink}>Giới thiệu</Link></li>
            <li><Link href="/cho-thue-iphone" className={styles.navLink}>Cho thuê iPhone</Link></li>
            <li><Link href="/cau-hoi-thuong-gap" className={styles.navLink}>Câu hỏi thường gặp</Link></li>
            <li><Link href="/lien-he" className={styles.navLink}>Liên hệ</Link></li>
          </ul>
        </nav>

        {/* Button Tư vấn Desktop */}
        <button className={styles.btnConsult}>
          Nhận tư vấn
        </button>

        {/* Mobile Menu Button - ĐÃ SỬA */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Menu"
          type="button"
          id="mobile-menu-button"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            <li><Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>Trang chủ</Link></li>
            <li><Link href="/gioi-thieu" className={styles.mobileNavLink} onClick={closeMenu}>Giới thiệu</Link></li>
            <li><Link href="/cho-thue-iphone" className={styles.mobileNavLink} onClick={closeMenu}>Cho thuê iPhone</Link></li>
            <li><Link href="/cau-hoi-thuong-gap" className={styles.mobileNavLink} onClick={closeMenu}>Câu hỏi thường gặp</Link></li>
            <li><Link href="/lien-he" className={styles.mobileNavLink} onClick={closeMenu}>Liên hệ</Link></li>
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