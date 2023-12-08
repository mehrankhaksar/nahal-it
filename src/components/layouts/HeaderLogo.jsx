import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link className="inline-block w-[125px] h-[85px] relative" href="/">
      <Image
        className="object-contain"
        src="/assets/images/logo.png"
        fill
        alt="Logo"
      />
    </Link>
  );
};

export default HeaderLogo;
