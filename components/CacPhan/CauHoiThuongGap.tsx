'use client';

import { useState } from 'react';
import styles from './CauHoiThuongGap.module.css';

const cauHoi = [
  {
    id: 1,
    hoi: 'Tôi cần cọc bao nhiêu?',
    dap: 'Mức cọc tùy thuộc vào giá trị máy và hồ sơ tín nhiệm của khách hàng/doanh nghiệp. Vui lòng liên hệ để biết chi tiết cụ thể.'
  },
  {
    id: 2,
    hoi: 'Máy có đăng nhập iCloud của tôi được không?',
    dap: 'Có, bạn hoàn toàn có thể đăng nhập iCloud cá nhân. Máy được reset sạch trước khi bàn giao. Tuy nhiên, vui lòng nhớ đăng xuất khi trả máy.'
  },
  {
    id: 3,
    hoi: 'Doanh nghiệp cần MDM hỗ trợ thế nào?',
    dap: 'Chúng tôi hỗ trợ cài đặt MDM để quản lý thiết bị từ xa, khóa máy từ xa, quản lý ứng dụng và bảo mật dữ liệu doanh nghiệp. Liên hệ để được demo miễn phí.'
  },
  {
    id: 4,
    hoi: 'Thời gian thuê tối thiểu là bao lâu?',
    dap: 'Thuê cá nhân tối thiểu 3 ngày. Thuê doanh nghiệp tối thiểu 1 tháng. Có thể thuê theo giờ cho sự kiện (tối thiểu 4 giờ).'
  },
  {
    id: 5,
    hoi: 'Nếu máy bị hỏng hoặc mất thì sao?',
    dap: 'Máy được bảo hành lỗi kỹ thuật. Nếu hỏng do sử dụng, sẽ tính phí sửa chữa. Nếu mất máy, sẽ tính theo giá trị máy tại thời điểm và trừ cọc.'
  },
  {
    id: 6,
    hoi: 'Có hỗ trợ giao máy ngoài giờ không?',
    dap: 'Có, chúng tôi hỗ trợ giao máy từ 8h - 22h hàng ngày, kể cả cuối tuần và ngày lễ.'
  }
];

export default function CauHoiThuongGap() {
  const [dangMo, setDangMo] = useState<number | null>(null);

  const toggleCauHoi = (id: number) => {
    setDangMo(dangMo === id ? null : id);
  };

  return (
    <section className={styles.cauHoi}>
      <div className={styles.container}>
        <div className={styles.tieuDePhan}>
          <h2 className={styles.tieuDe}>Câu hỏi thường gặp</h2>
          <p className={styles.tieuDePhu}>Giải đáp mọi thắc mắc của bạn</p>
        </div>
        
        <div className={styles.luoiCauHoi}>
          {cauHoi.map((item) => (
            <div key={item.id} className={styles.itemCauHoi}>
              <button 
                className={styles.cauHoiNut}
                onClick={() => toggleCauHoi(item.id)}
                aria-expanded={dangMo === item.id}
              >
                <span className={styles.cauHoiText}>{item.hoi}</span>
                <span className={styles.iconCauHoi}>
                  {dangMo === item.id ? '−' : '+'}
                </span>
              </button>
              
              {dangMo === item.id && (
                <div className={styles.cauTraLoi}>
                  {item.dap}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}