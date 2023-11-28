import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import BitChart from "../../../public/bitChart.png";
import BitTag from "../../../public/bitTag.png";
import Link from "next/link";

const BitHome = () => {
  return (
    <main>
      <div className="flex justify-center items-center mt-[50px]">
        <div className="gradient">
          <h1 className="font-black text-6xl leading-[64px]">
            Make The best <br />
            Financial Decisions
          </h1>
          <p className="w-[638px] text-xl font-medium py-6 text-black">
            One deposit at a time for a bright future. Welcome to your financial
            leverage and pension home
          </p>
          <div>
            <Link href="https://tally.so/r/mY4MR5">
              <Button title="Join Waitlist →" />
            </Link>
          </div>

          <div className="pt-[30px]">
            <Image src={BitTag} alt="BitPension Tag " />
          </div>
        </div>

        <div>
          <Image src={BitChart} alt="Bit Pension Chart" />
        </div>
      </div>
    </main>
  );
};

export default BitHome;
