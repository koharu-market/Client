import Layout from '@/components/layout';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import { getCategories } from '@/lib/getCategories';
import Footer from './_component/layout/Footer';

interface Props {
  children: React.ReactNode;
}

export default async function BaseLayout({ children }: Props) {
  const categories = await getCategories();
  return (
    <Layout>
      <header>
        <Header categories={categories} />
      </header>
      <Main>{children}</Main>
      <Footer />
    </Layout>
  );
}
