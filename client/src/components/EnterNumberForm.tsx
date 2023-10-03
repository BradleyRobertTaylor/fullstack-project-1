import { useState } from "react";

type EnterNumberFormProps = {
  onSubmit: (userInput: string, callback: () => void) => void;
};

export const EnterNumberForm = ({ onSubmit }: EnterNumberFormProps) => {
  const [userInput, setUserInput] = useState("");
  const reset = () => setUserInput("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(userInput, reset);
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
