import Category from '@/app/(baseLayout)/_component/layout/Header/Category';
import HeaderNavbar from '@/app/(baseLayout)/_component/layout/Header/HeaderNavbar';
import MobileHeaderNavbar from '@/app/products/[productId]/_component/layout/MobileHeaderNavbar';
import { getCategories } from '@/lib/getCategories';

interface Props {
  children: React.ReactNode;
}

export default async function BaseLayout({ children }: Props) {
  const categories = await getCategories();
  return (
    <div className="h-screen flex flex-col">
      <header className="border-b">
        <div className="md:container">
          <div className="md:block hidden">
            <HeaderNavbar />
            <Category categories={categories} />
          </div>
          <MobileHeaderNavbar />
        </div>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  );
}
