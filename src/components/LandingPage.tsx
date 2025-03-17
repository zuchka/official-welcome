import { EmailForm } from "./EmailForm";

export const LandingPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center px-5 py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400">
      <h1 className="font-['Cormorant_Garamond'] text-[32px] md:text-[60px] lg:text-[90px] font-normal text-[#464646] tracking-[12px] md:tracking-[25px] lg:tracking-[35px] text-center mt-[5px] md:mt-[20px] max-w-full leading-tight">
        OFFICIAL WELCOME
      </h1>
      <h2 className="font-['Cormorant_Garamond'] text-[36px] md:text-[70px] lg:text-[100px] font-normal text-[#5B5B5B] tracking-[16px] md:tracking-[32px] lg:tracking-[48px] text-center mt-[60px] md:mt-[90px] lg:mt-[120px] max-w-full leading-tight">
        LOS ANGELES
      </h2>
      <div className="mt-[100px] md:mt-[160px] lg:mt-[220px]">
        <EmailForm />
      </div>
      <a
        href="mailto:contact@officialwelcome.com"
        className="font-['Cormorant_Garamond'] text-[24px] md:text-[36px] lg:text-[48px] text-[#5B5B5B] underline mt-10 md:mt-16 lg:mt-20 hover:text-[#464646] transition-colors"
      >
        contact
      </a>
    </div>
  );
};
