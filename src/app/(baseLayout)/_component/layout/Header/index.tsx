import { Categories } from '@/types/Categories';
import Category from './Category';
import HeaderNavbar from './HeaderNavbar';

interface Props {
  categories: Categories[];
}

export default function Header({ categories }: Props) {
  return (
    <header className="border-b">
      <div className="md:container">
        <HeaderNavbar />
        <Category categories={categories} />
      </div>
    </header>
  );
}
