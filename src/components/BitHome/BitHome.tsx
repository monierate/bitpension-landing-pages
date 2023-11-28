import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import BitChart from "../../../public/bitChart.png";
import BitTag from "../../../public/bitTag.png";
import Star from "../../../public/Star.png";
import Link from "next/link";

const BitHome = () => {
  return (
    <main>
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-center mt-[50px]">
        <div className="text-center md:text-left  gradient pt-64">
          <h1 className="font-black text-4xl md:text-7xl leading-[64px]">
            Make The best <br />
            Financial Decisions
          </h1>
          <p className="w-full md:w-[638px] text-xl font-medium py-6 text-black">
            One deposit at a time for a bright future. Welcome to your financial
            leverage and pension home
          </p>
          <div>
            <Link href="https://tally.so/r/mY4MR5">
              <Button title="Join Waitlist →" />
            </Link>
          </div>
          <div className="mt-3 md:mt-0 md:ml-[50px]">
            <div className="md:ml-[135px] mt-[62px]">
              <Image src={Star} alt="Star" />
            </div>
            <Image src={BitTag} alt="BitPension Tag" />
          </div>
        </div>

        <div className="mt-6 md:mt-0 md:ml-[-72px]">
          <Image src={BitChart} alt="Bit Pension Chart" />
        </div>
      </div>
    </main>
  );
};

export default BitHome;
