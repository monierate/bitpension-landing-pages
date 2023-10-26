import React from "react";

type ButtonProps = {
  title: string;
};

const Button: React.FC<ButtonProps> = ({ title}) => {
  return (
    <div>
      <button className="w-[180px] h-[60px] text-white font-bold text-lg bg-black  py-[16px] px-[34px] rounded">
        {title}
      </button>
    </div>
  );
};

export default Button;
