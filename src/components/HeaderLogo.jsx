import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link className="inline-block w-[125px] h-[85px] relative" href="/">
      <Image
        src="/assets/images/logo.png"
        layout="fill"
        objectFit="contain"
        alt="Logo"
      />
    </Link>
  );
};

export default HeaderLogo;
