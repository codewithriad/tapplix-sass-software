import Image from "next/image";

interface SectionTitleProps {
  label: string;
  title: string;
  description: string;
}

export default function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-start items-center gap-2 mb-4 text-blue-600 font-bold">
        <Image src='/icons/gray-star.png' width={15} height={15} alt="sub-title" />
        {label}
       <Image src='/icons/gray-star.png' width={15} height={15} alt="sub-title" />
       </div>
      <h2 className="text-2xl sm:text-4xl font-bold text-white">{title}</h2>
      <p className="mt-3 text-gray-300 leading-[1.7rem]">{description}</p>
    </div>
  );
}
