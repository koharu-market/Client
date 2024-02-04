interface Props {
  children: React.ReactNode;
}
export default function CardList({ children }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
      {children}
    </div>
  );
}
