import PhanGioiThieu from '@/components/CacPhan/PhanGioiThieu';
import GoiThue from '@/components/CacPhan/GoiThue';
import ThietBiCoSan from '@/components/CacPhan/ThietBiCoSan';
import QuyTrinhThue from '@/components/CacPhan/QuyTrinhThue';
import CauHoiThuongGap from '@/components/CacPhan/CauHoiThuongGap';

export default function TrangChu() {
  return (
    <main>
      <PhanGioiThieu />
      <GoiThue />
      <ThietBiCoSan />
      <QuyTrinhThue />
      <CauHoiThuongGap />
    </main>
  );
}