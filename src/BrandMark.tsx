type BrandMarkProps = { size?: number; className?: string };

export default function BrandMark({ size = 36, className = "" }: BrandMarkProps) {
  return (
    <img
      src="/brand/logo-light.svg"
      alt="TX RetailOS"
      width={size}
      height={size}
      className={className}
      draggable={false}
    />
  );
}
