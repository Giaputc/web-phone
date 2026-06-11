'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PhanGioiThieu.module.css';

export default function PhanGioiThieu() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { url: '/images/iphone-15-pro-max.jpg', alt: 'iPhone 15 Pro Max' },
    { url: '/images/iphone-15-pro.jpg', alt: 'iPhone 15 Pro' },
    { url: '/images/iphone-14-pro-max.jpg', alt: 'iPhone 14 Pro Max' },
    { url: '/images/iphone-14.jpg', alt: 'iPhone 14' },
    { url: '/images/iphone-13.jpg', alt: 'iPhone 13' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Hàm cuộn đến section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* Nội dung bên trái */}
          <div className={styles.noiDung}>
            <h1 className={styles.tieuDe}>
              Cho thuê iPhone
              <span className={styles.tieuDePhu}>Linh hoạt cho cá nhân & Doanh nghiệp</span>
            </h1>
            
            <div className={styles.dacDiem}>
              <div className={styles.dacDiemItem}>
                <span className={styles.dacDiemIcon}>⚡</span>
                <span>Giải pháp công nghệ tối ưu chi phí</span>
              </div>
              <div className={styles.dacDiemItem}>
                <span className={styles.dacDiemIcon}>🚚</span>
                <span>Giao máy nhanh</span>
              </div>
              <div className={styles.dacDiemItem}>
                <span className={styles.dacDiemIcon}>📄</span>
                <span>Hợp đồng minh bạch</span>
              </div>
            </div>
            
            <div className={styles.nhomNut}>
              {/* Nút Nhận báo giá nhanh - cuộn đến gói thuê */}
              <button 
                className={styles.nutChinh}
                onClick={() => scrollToSection('goi-thue')}
              >
                Nhận báo giá nhanh
              </button>
              
              {/* Nút Xem thiết bị - cuộn đến thiết bị có sẵn */}
              <button 
                className={styles.nutPhu}
                onClick={() => scrollToSection('thiet-bi')}
              >
                Xem thiết bị
              </button>
            </div>
          </div>

          {/* Phần slider ảnh bên phải */}
          <div className={styles.noiDung1}>
            <div className={styles.sectionTitleWrapper}>
              <h3 className={styles.sectionTitle}>🔥 Sản phẩm bán chạy nhất</h3>
              <div className={styles.sectionTitleLine}></div>
            </div>
            
            <div className={styles.sliderContainer}>
              <div className={styles.sliderWrapper}>
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`${styles.slide} ${idx === currentImage ? styles.active : ''}`}
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}
                  >
                    <div className={styles.imagePlaceholder}>
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        className={styles.realImage}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                className={styles.sliderPrev} 
                onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
              >
                ❮
              </button>
              <button 
                className={styles.sliderNext} 
                onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
              >
                ❯
              </button>
              
              <div className={styles.sliderDots}>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.dot} ${idx === currentImage ? styles.dotActive : ''}`}
                    onClick={() => setCurrentImage(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Phần thống kê */}
        <div className={styles.thongKe}>
          <div className={styles.theThongKe}>
            <div className={styles.iconThongKe}>⏱️</div>
            <div className={styles.tieuDeThongKe}>Giao nhanh 2-4 giờ</div>
            <div className={styles.moTaThongKe}>Nội thành Hà Nội & TP HCM</div>
          </div>
          <div className={styles.theThongKe}>
            <div className={styles.iconThongKe}>💰</div>
            <div className={styles.tieuDeThongKe}>Cọc linh hoạt</div>
            <div className={styles.moTaThongKe}>Thủ tục đơn giản, hoàn thiện nhanh chóng</div>
          </div>
          <div className={styles.theThongKe}>
            <div className={styles.iconThongKe}>📱</div>
            <div className={styles.tieuDeThongKe}>Ngoại hình chuẩn</div>
            <div className={styles.moTaThongKe}>Pin cao, ngoại hình đẹp 99%</div>
          </div>
          <div className={styles.theThongKe}>
            <div className={styles.iconThongKe}>🎧</div>
            <div className={styles.tieuDeThongKe}>Hỗ trợ 24/7</div>
            <div className={styles.moTaThongKe}>Hỗ trợ 1:1 trong suốt thời gian thuê</div>
          </div>
        </div>
      </div>
    </section>
  );
}