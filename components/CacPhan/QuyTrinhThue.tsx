'use client';

import styles from './QuyTrinhThue.module.css';

const cacBuoc = [
  {
    so: '01',
    ten: 'Chọn gói/Model',
    moTa: 'Liên hệ hotline hoặc chọn gói trên web để nhận tư vấn.'
  },
  {
    so: '02',
    ten: 'Xác minh & Cọc',
    moTa: 'Gửi ảnh giấy tờ (CCCD/GPKD) để thẩm định nhanh chóng.'
  },
  {
    so: '03',
    ten: 'Ký hợp đồng',
    moTa: 'Ký hợp đồng điện tử hoặc bản cứng rõ ràng.'
  },
  {
    so: '04',
    ten: 'Bàn giao máy',
    moTa: 'Nhận máy, kiểm tra ngoại hình và chức năng (Checklist).'
  },
  {
    so: '05',
    ten: 'Thu hồi & Hoàn cọc',
    moTa: 'Trả lại máy đúng hạn và nhận lại cọc ngay lập tức.'
  }
];

export default function QuyTrinhThue() {
  return (
    <section className={styles.quyTrinh}>
      <div className={styles.container}>
        <div className={styles.tieuDePhan}>
          <h2 className={styles.tieuDe}>Quy trình thuê tại TDK</h2>
          <p className={styles.tieuDePhu}>Đơn giản - Nhanh gọn - Chuyên nghiệp</p>
        </div>
        
        <div className={styles.luoiBuoc}>
          {cacBuoc.map((buoc, idx) => (
            <div key={idx} className={styles.buoc}>
              <div className={styles.card}>
                <div className={styles.soBuoc}>{buoc.so}</div>
                <h3 className={styles.tenBuoc}>{buoc.ten}</h3>
                <p className={styles.moTaBuoc}>{buoc.moTa}</p>
              </div>
              {idx < cacBuoc.length - 1 && (
                <div className={styles.muiTen}>
                  <span className={styles.muiTenIcon}>→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}