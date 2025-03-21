import { useState } from "react";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to subscribe');
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
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
        disabled={isLoading}
        className={`text-[24px] md:text-[36px] lg:text-[48px] font-normal font-['Cormorant_Garamond'] text-[#4D4D4D] border-2 border-[#5B5B5B] rounded-[15px] px-3 md:px-4 lg:px-5 hover:bg-[#5B5B5B] hover:text-white transition-colors md:self-start ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isLoading ? 'Submitting...' : 'submit'}
      </button>

      {/* Status Messages */}
      {status === 'success' && (
        <p className="mt-2 text-green-600 text-[18px]">
          Thank you for subscribing!
        </p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-red-600 text-[18px]">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};
