import Category from '@/app/(baseLayout)/_component/layout/Header/Category';
import HeaderNavbar from '@/app/(baseLayout)/_component/layout/Header/HeaderNavbar';
import MobileHeaderNavbar from '@/components/layout/MobileHeaderNavbar';
import { axiosInstance } from '@/lib/axios';

interface Props {
  children: React.ReactNode;
}

export default async function BaseLayout({ children }: Props) {
  const response = await axiosInstance.get('/category');
  const categories = response.data;
  return (
    <div className="h-screen flex flex-col">
      <header className="border-b">
        <div className="md:container">
          <div className="md:block hidden">
            <HeaderNavbar />
          </div>
          <MobileHeaderNavbar />
          <div className="hidden md:block">
            <Category categories={categories} />
          </div>
        </div>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  );
}
