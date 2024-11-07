import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 font-nunito">
      <form className="w-full max-w-2xl p-10 space-y-8 bg-[#5de6b8] border-2 border-black rounded-lg shadow-[6px_6px_0px_black]">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white font-extrabold text-2xl mb-2">
            Name
          </label>
          <Input
            id="name"
            className="border-2 border-black bg-[#40ffc6] rounded-lg px-4 py-5 text-xl font-semibold shadow-[3px_3px_0px_black] text-black"
          />
        </div>

        {/* Email and Phone Fields */}
        <div className="flex space-x-6">
          {/* Email Field */}
          <div className="flex flex-col w-1/2">
            <label htmlFor="email" className="text-white font-extrabold text-2xl mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              className="border-2 border-black bg-[#40ffc6] rounded-lg px-4 py-5 text-xl font-semibold shadow-[3px_3px_0px_black] text-black"
            />
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col w-1/2">
            <label htmlFor="phone" className="text-white font-extrabold text-2xl mb-2">
              Phone number
            </label>
            <Input
              id="phone"
              type="tel"
              className="border-2 border-black bg-[#40ffc6] rounded-lg px-4 py-5 text-xl font-semibold shadow-[3px_3px_0px_black] text-black"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-white font-extrabold text-2xl mb-2">
            Message
          </label>
          <Textarea
            id="message"
            className="border-2 border-black bg-[#40ffc6] rounded-lg px-5 py-4 text-xl font-semibold shadow-[3px_3px_0px_black] h-48 text-black"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 text-xl font-extrabold bg-[#00cc99] text-white border-black border-2 rounded-lg shadow-[6px_6px_0px_black] transition-all hover:shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
