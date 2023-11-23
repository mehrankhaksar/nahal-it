import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/images/logo.png"
        width={120}
        height={60}
        priority
        alt="Logo"
      />
    </Link>
  );
};

export default HeaderLogo;
