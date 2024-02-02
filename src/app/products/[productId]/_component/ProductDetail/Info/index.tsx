interface Props {
  content: string;
}

export default function Info({ content }: Props) {
  return (
    <div className="pt-16 pb-14">
      <div className="flex justify-center flex-col items-center" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
