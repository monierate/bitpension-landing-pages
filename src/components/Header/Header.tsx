import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import BitLogo from "../../../public/bitPensionLogo.png";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Image src={BitLogo} alt="BitPension Logo" />
      </div>
      <div>
        <Link href="https://tally.so/r/mY4MR5">
          <Button title="Join Waitlist" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
