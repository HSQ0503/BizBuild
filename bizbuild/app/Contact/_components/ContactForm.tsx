"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const ShiftingContactForm = () => {
  const [selected, setSelected] = useState<"school" | "student">("student");
  return (
    <section className="p-4 bg-[#E6F7F2]">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
    </section>
  );
};

const Form = ({
  selected,
  setSelected,
}: {
  selected: "school" | "student";
  setSelected: Dispatch<SetStateAction<"school" | "student">>;
}) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`p-8 w-full text-white transition-colors duration-[750ms] ${
        selected === "school" ? "bg-[#082E22]" : "bg-[#00CC99]"
      }`}
    >
      <h3 className="text-4xl font-bold mb-6">Contact us</h3>

      <div className="mb-6">
        <p className="text-2xl mb-2">Hi 👋! My name is...</p>
        <input
          type="text"
          placeholder="Your name..."
          className={`${
            selected === "school" ? "bg-[#0A4332]" : "bg-[#00A37A]"
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      <div className="mb-6">
        <p className="text-2xl mb-2">and I am a...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      <AnimatePresence>
        {selected === "school" && (
          <motion.div
            initial={{
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-2xl mb-2">from the school...</p>
            <input
              type="text"
              placeholder="Your school name..."
              className={`${
                selected === "school" ? "bg-[#0A4332]" : "bg-[#00A37A]"
              } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-6">
        <p className="text-2xl mb-2">I'd love to ask about...</p>
        <textarea
          placeholder="Whatever your heart desires :)"
          className={`${
            selected === "school" ? "bg-[#0A4332]" : "bg-[#00A37A]"
          } transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={`${
          selected === "school"
            ? "bg-white text-[#082E22]"
            : "bg-white text-[#00CC99]"
        } transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold`}
      >
        Submit
      </motion.button>
    </form>
  );
};

const FormSelect = ({
  selected,
  setSelected,
}: {
  selected: "school" | "student";
  setSelected: Dispatch<SetStateAction<"school" | "student">>;
}) => {
  return (
    <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
      <button
        className={`${
          selected === "student" ? "text-[#00CC99]" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("student")}
      >
        <span className="relative z-10">A student</span>
        {selected === "student" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
      <button
        className={`${
          selected === "school" ? "text-[#082E22]" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("school")}
      >
        <span className="relative z-10">A school</span>
        {selected === "school" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
    </div>
  );
};

const Images = ({ selected }: { selected: "school" | "student" }) => {
  return (
    <div className="bg-white relative overflow-hidden w-full min-h-[100px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "student" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === "school" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default ShiftingContactForm;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };