interface HotlineItemProps {
  icon: React.ReactNode;
  value: string;
  link: string;
}

export default function HotlineItem({ icon, value, link }: HotlineItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-rose-500">{icon}</div>
      <h6 className="text-lg font-medium">
        <a href={link} className="hover:underline">{value}</a>
      </h6>
    </div>
  );
}
