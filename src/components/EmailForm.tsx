import { useState, FormEvent } from "react";

export const EmailForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter email"
          className="w-full md:w-[494px] bg-transparent border-b-2 border-[#5B5B5B] text-[24px] md:text-[36px] lg:text-[48px] font-normal font-['Cormorant_Garamond'] text-[#5B5B5B] focus:outline-none placeholder:text-[#5B5B5B]"
          required
        />
      </div>
      <button
        type="submit"
        className="text-[24px] md:text-[36px] lg:text-[48px] font-normal font-['Cormorant_Garamond'] text-[#4D4D4D] border-2 border-[#5B5B5B] rounded-[15px] px-3 md:px-4 lg:px-5 hover:bg-[#5B5B5B] hover:text-white transition-colors md:self-start"
      >
        submit
      </button>
    </form>
  );
};
