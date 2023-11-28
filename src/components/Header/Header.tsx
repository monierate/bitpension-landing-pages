import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import BitLogo from "../../../public/bitPensionLogo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
      <div className="mb-4 md:mb-0 md:mr-4">
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
