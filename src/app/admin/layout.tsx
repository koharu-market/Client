import SideBar from './_component/SideBar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="w-screen h-screen">
      <SideBar />
      <div className="pl-56 min-h-full flex">
        <div className="px-6 pt-16 bg-red-50 flex-1">{children}</div>
      </div>
    </div>
  );
}
