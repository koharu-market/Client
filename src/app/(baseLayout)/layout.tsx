import { axiosInstance } from '@/lib/axios';
import Layout from './_component/layout';

interface Props {
  children: React.ReactNode;
}

export default async function BaseLayout({ children }: Props) {
  const response = await axiosInstance.get('/product/categories');
  const data = response.data;
  return <Layout categories={data}>{children}</Layout>;
}
