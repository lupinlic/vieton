import Image from "next/image";

type BrandLogoProps = {
  alt?: string;
  className: string;
};

export function BrandLogo({ alt = "Vieton", className }: BrandLogoProps) {
  return (
    <Image
      src="/vieton-wordmark.png"
      alt={alt}
      width={1138}
      height={240}
      sizes="(max-width: 720px) 145px, 190px"
      className={className}
      priority
    />
  );
}
