import PhanGioiThieu from '@/components/CacPhan/PhanGioiThieu';
import GoiThue from '@/components/CacPhan/GoiThue';
import ThietBiCoSan from '@/components/CacPhan/ThietBiCoSan';
import QuyTrinhThue from '@/components/CacPhan/QuyTrinhThue';
import CauHoiThuongGap from '@/components/CacPhan/CauHoiThuongGap';

export default function TrangChu() {
  return (
    <main>
      <section id="gioi-thieu">
        <PhanGioiThieu />
      </section>
      <section id="goi-thue">
        <GoiThue />
      </section>
      <section id="thiet-bi">
        <ThietBiCoSan />
      </section>
      <section id="quy-trinh">
        <QuyTrinhThue />
      </section>
      <section id="cau-hoi">
        <CauHoiThuongGap />
      </section>
    </main>
  );
}