// components/MenuCard.tsx
import Image from "next/image";

type MenuCardProps = {
  title: string;
  description: string;
  price: number;
  category: string;
  imageSrc?: string;
  imageAlt?: string;
  onOrder?: () => void;
};

export default function MenuCardV2({
  title,
  description,
  price,
  category,
  imageSrc,
  imageAlt,
  onOrder,
}: MenuCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#e8ddd3] transition-all duration-150 cursor-pointer hover:-translate-y-1 hover:shadow-lg">
      
      {/* Image */}
      {imageSrc ? (
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="w-full aspect-[4/3] bg-[#ead9c8]" />
      )}

      {/* Body */}
      <div className="px-4 pt-4 pb-5">
        <span className="inline-block bg-[#e8f5ed] text-[#1e6b3c] text-xs font-medium px-3 py-0.5 rounded-full mb-2">
          {category}
        </span>

        <h3 className="text-base font-semibold text-[#1a1410] leading-snug mb-1">
          {title}
        </h3>

        <p className="text-sm text-[#6b6560] leading-relaxed mb-4">
          {description}
        </p>

        {/* <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-[#c0392b]">{price}</span>
          <button
            onClick={onOrder}
            className="bg-[#c0392b] hover:bg-[#922b21] text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-colors duration-150 cursor-pointer"
          >
            Order now
          </button>
        </div> */}
      </div>
    </div>
  );
}