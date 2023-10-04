import { useState } from "react";
import toast from "react-hot-toast";
import { getMedian } from "../services/medianService";

type EnterNumberFormProps = {
  setAnswer: React.Dispatch<React.SetStateAction<number[] | null>>;
};

export const EnterNumberForm = ({ setAnswer }: EnterNumberFormProps) => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await getMedian(Number(userInput));
      if (res.error) {
        toast.error(res.error);
        setUserInput("");
        setAnswer(null);
        return;
      }

      if (res.median) {
        setAnswer(res.median);
        setUserInput("");
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
        setUserInput("");
        setAnswer(null);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        className="border-neutral-700 text-white border bg-black h-10 rounded-md w-full px-3 py-2 text-sm placeholder-neutral-500 focus:outline-none focus:border-white"
        placeholder="Enter a number"
        value={userInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserInput(e.target.value);
        }}
        required
      />
      <button className="bg-white border-black border h-10 rounded-md px-3 py-2 text-sm hover:bg-neutral-200">
        Enter
      </button>
    </form>
  );
};
