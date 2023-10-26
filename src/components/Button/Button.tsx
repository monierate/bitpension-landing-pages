import React from "react";
// import Image from "next/image";
type ButtonProps = {
  title: string;
  // imageUrl: string;
};

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <div>
      <button className=" w-[180px] h-[60px] text-white font-bold text-lg bg-black  py-[16px]  rounded ">
        {title}
        {/* <Image src={imageUrl} alt={alt} width={20} height={20} /> */}
      </button>
    </div>
  );
};

export default Button;
