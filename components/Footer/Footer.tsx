'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="lien-he" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Thông tin công ty */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>TDK</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Số 04, dãy N10, tổ dân phố số 1, Phường Tây Tựu, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam.</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span><a href="tel:0962293777">0962293777</a></span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span><a href="mailto:tdkcongty@gmail.com">tdkcongty@gmail.com</a></span>
              </div>
            </div>
          </div>

          {/* Dịch vụ */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Dịch vụ</h3>
            <ul className={styles.linkList}>
              <li><Link href="/dich-vu/cho-thue-iphone">Cho thuê iPhone, thiết bị di động</Link></li>
              <li><Link href="/dich-vu/cho-thue-ipad-macbook">Cho thuê iPad/MacBook</Link></li>
              <li><Link href="/dich-vu/giai-phap-cntt">Giải pháp CNTT Doanh nghiệp</Link></li>
              <li><Link href="/dich-vu/quan-ly-mdm">Quản lý MDM</Link></li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Hỗ trợ</h3>
            <ul className={styles.linkList}>
              <li><Link href="/dieu-khoan">Điều khoản sử dụng</Link></li>
              <li><Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link></li>
              <li><Link href="/chinh-sach-bao-hanh">Chính sách bảo hành</Link></li>
              <li><Link href="/lien-he">Liên hệ hỗ trợ</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>Copyright © 2026 TDK. Mọi quyền được bảo vệ.</p>
          <p className={styles.note}>Trang web này cung cấp dịch vụ cho thuê thiết bị, không trực thuộc Apple Inc.</p>
        </div>
      </div>
    </footer>
  );
}