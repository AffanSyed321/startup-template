import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logo-black.png"
        alt="Logo"
        width={300}
        height={80}
        className="h-10 md:h-14 w-auto object-contain scale-[3] origin-left"
        priority
      />
    </div>
  );
};
