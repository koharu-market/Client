'use client';

import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import { Categories } from '@/types/Categories';

interface Props {
  children: React.ReactNode;
  categories: Categories[];
}

export default function Layout({ children, categories }: Props) {
  return (
    <div className="h-screen flex flex-col">
      <Header categories={categories} />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
