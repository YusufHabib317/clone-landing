import { testimonials } from "@/data";
import Image from "next/image";

type TestimonialCardProps = (typeof testimonials)[0];

export function TestimonialCard(props: TestimonialCardProps) {
  const { imageSrc, name, text, username } = props;
  return (
    <div className="card">
      <div>{text}</div>
      <div className="flex items-center gap-2 mt-5">
        <Image
          src={imageSrc}
          alt={name}
          width={40}
          height={40}
          className="rounded-full w-10 h-10"
        />
        <div className="flex flex-col text-sm">
          <div className="font-medium tracking-tight leading-5">{name}</div>
          <div className="leading-5 tracking-tight">{username}</div>
        </div>
      </div>
    </div>
  );
}
