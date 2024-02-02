import Layout from './_component/layout';
import { getCategories } from '@/lib/getCategories';

interface Props {
  children: React.ReactNode;
}

export default async function BaseLayout({ children }: Props) {
  const categories = await getCategories();
  return <Layout categories={categories}>{children}</Layout>;
}
