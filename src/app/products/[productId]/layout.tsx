import MobileHeaderNavbar from '@/app/products/[productId]/_component/layout/MobileHeaderNavbar';
import { getCategories } from '@/lib/getCategories';
import Layout from '@/components/layout';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';

interface Props {
  children: React.ReactNode;
}

export default async function BaseLayout({ children }: Props) {
  const categories = await getCategories();
  return (
    <Layout>
      <header>
        <div className="md:block hidden">
          <Header categories={categories} />
        </div>
        <MobileHeaderNavbar />
      </header>
      <Main>{children}</Main>
    </Layout>
  );
}
