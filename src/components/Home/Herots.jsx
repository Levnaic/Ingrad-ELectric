import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex min-h-[60vh] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/assets/images/hero-plh.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#7FA1C3] bg-opacity-50 z-10"></div>
      <h1 className="relative z-20 text-white flex justify-center items-center w-full text-4xl">
        {t("home.title")}
      </h1>
      <button className="relative z-20 border border-black bg-black text-white absolute">
        {t("home.cta")}
      </button>
    </div>
  );
};

export default Hero;
