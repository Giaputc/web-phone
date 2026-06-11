'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ThietBiCoSan.module.css';

const thietBi = [
  {
    id: 1,
    ten: 'iPhone 12 Series',
    dong: '12 - 12 Pro - 12 Pro Max',
    mauSac: 'Xanh - Đen - Vàng - Trắng',
    gia: '80.000đ',
    donVi: '/ngày',
    image: '/images/iphone-12.jpg',
    hot: false
  },
  {
    id: 2,
    ten: 'iPhone 13 Series',
    dong: '13 - 13 Pro - 13 Pro Max',
    mauSac: 'Xanh lục - Hồng - Đen - Trắng',
    gia: '100.000đ',
    donVi: '/ngày',
    image: '/images/iphone-13.jpg',
    hot: false
  },
  {
    id: 3,
    ten: 'iPhone 14 Series',
    dong: '14 - 14 Pro - 14 Pro Max',
    mauSac: 'Tím - Xanh dương - Đen - Trắng',
    gia: '150.000đ',
    donVi: '/ngày',
    image: '/images/iphone-14.jpg',
    hot: false
  },
  {
    id: 4,
    ten: 'iPhone 15 Series',
    dong: '15 - 15 Pro - 15 Pro Max',
    mauSac: 'Hồng - Xanh - Đen - Titan',
    gia: '200.000đ',
    donVi: '/ngày',
    image: '/images/iphone-15.jpg',
    hot: false
  },
  {
    id: 5,
    ten: 'iPhone 16 Series',
    dong: '16 - 16 Pro - 16 Pro Max',
    mauSac: 'Đen - Trắng - Xanh - Hồng',
    gia: '250.000đ',
    donVi: '/ngày',
    image: '/images/iphone-16.jpg',
    hot: false
  },
  {
    id: 6,
    ten: 'iPhone 17 Series',
    dong: '17 - 17 Pro - 17 Pro Max',
    mauSac: 'Đen - Vàng - Xanh dương',
    gia: 'Liên hệ',
    donVi: '',
    image: '/images/iphone-17.jpg',
    hot: true
  }
];

export default function ThietBiCoSan() {
  const [selectedDevice, setSelectedDevice] = useState<number | null>(null);

  const handleRent = (id: number, ten: string) => {
    setSelectedDevice(id);
    alert(`📱 Bạn đã chọn thuê "${ten}". Chúng tôi sẽ liên hệ tư vấn chi tiết!`);
  };

  return (
    <section className={styles.thietBi}>
      <div className={styles.container}>
        <div className={styles.tieuDePhan}>
          <h2 className={styles.tieuDe}>Thiết bị có sẵn</h2>
          <p className={styles.tieuDePhu}>iPhone 12 - iPhone 17 Pro Max</p>
        </div>
        
        <div className={styles.luoiThietBi}>
          {thietBi.map((tb) => (
            <div 
              key={tb.id} 
              className={`${styles.card} ${tb.hot ? styles.hot : ''} ${selectedDevice === tb.id ? styles.selected : ''}`}
            >
              {tb.hot && <div className={styles.hotBadge}>🔥 Mới nhất</div>}
              
              {/* Ảnh sản phẩm */}
              <div className={styles.imageWrapper}>
                <img 
                  src={tb.image} 
                  alt={tb.ten}
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.src = 'https://picsum.photos/id/1/300/300';
                  }}
                />
              </div>
              
              <h3 className={styles.tenThietBi}>{tb.ten}</h3>
              <div className={styles.dongThietBi}>{tb.dong}</div>
              <div className={styles.mauSacThietBi}>
                <span className={styles.mauSacIcon}>🎨</span> {tb.mauSac}
              </div>
              <div className={styles.giaThietBi}>
                {tb.gia}
                <span className={styles.donViGia}>{tb.donVi}</span>
              </div>
              <button 
                className={styles.nutDatThue}
                onClick={() => handleRent(tb.id, tb.ten)}
              >
                Đặt thuê
                <span className={styles.nutIcon}>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}