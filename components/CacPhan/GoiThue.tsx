'use client';

import { useState } from 'react';
import styles from './GoiThue.module.css';  // Chỉ import 1 file

const goiThue = [
  {
    id: 1,
    ten: 'Cá nhân',
    moTa: 'Thuê ngắn ngày / Du lịch / Test máy',
    gia: '100.000đ',
    donVi: '/ ngày',
    thongTin: [
      'Thuê từ 3 ngày',
      'Thủ tục CCCD + Cọc',
      'Máy kèm phụ kiện',
      'Đổi máy nếu lỗi'
    ],
    icon: '👤'
  },
  {
    id: 2,
    ten: 'Doanh nghiệp',
    moTa: '10 - 300 máy, hỗ trợ dự án/App test',
    gia: '70.000đ',
    donVi: '/ ngày',
    thongTin: [
      'Hợp đồng pháp nhân',
      'Xuất hóa đơn VAT',
      'Hỗ trợ cài đặt MDM/App',
      'Giao nhận tận nơi miễn phí'
    ],
    icon: '🏢'
  },
  {
    id: 3,
    ten: 'Sự kiện',
    moTa: 'Số lượng lớn trong thời gian ngắn',
    gia: '50.000đ',
    donVi: '/ ngày',
    thongTin: [
      'Từ 50 thiết bị trở lên',
      'Kỹ thuật trực sự kiện',
      'Giao và thu hồi tại chỗ',
      'Đồng bộ dữ liệu hàng loạt'
    ],
    icon: '🎪'
  }
];

export default function GoiThue() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const handleSelectPackage = (id: number, ten: string) => {
    setSelectedPackage(id);
    alert(`✨ Bạn đã chọn gói "${ten}". Chúng tôi sẽ liên hệ tư vấn chi tiết ngay!`);
  };

  return (
    <section className={styles.goiThue}>
      <div className={styles.container}>  {/* Đã có trong CSS */}
        <div className={styles.tieuDePhan}>  {/* Đã có trong CSS */}
          <h2 className={styles.tieuDe}>Gói thuê phù hợp nhu cầu</h2>
          <p className={styles.tieuDePhu}>Lựa chọn giải pháp tối ưu nhất cho bạn</p>
        </div>
        
        <div className={styles.luoiGoiThue}>
          {goiThue.map((goi) => (
            <div 
              key={goi.id} 
              className={`${styles.theGoiThue} ${selectedPackage === goi.id ? styles.selected : ''}`}
            >
              <div className={styles.iconGoi}>{goi.icon}</div>
              
              <h3 className={styles.tenGoi}>{goi.ten}</h3>
              <p className={styles.moTaGoi}>{goi.moTa}</p>
              
              <div className={styles.giaGoi}>
                {goi.gia}
                <span className={styles.donViGia}>{goi.donVi}</span>
              </div>
              
              <ul className={styles.danhSachThongTin}>
                {goi.thongTin.map((item, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>✓</span> {item}
                  </li>
                ))}
              </ul>
              
              <button 
                className={styles.nutChonGoi}
                onClick={() => handleSelectPackage(goi.id, goi.ten)}
              >
                Chọn gói này
                <span className={styles.nutIcon}>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}