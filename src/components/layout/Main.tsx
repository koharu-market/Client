interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return <div className="flex-1">{children}</div>;
}
