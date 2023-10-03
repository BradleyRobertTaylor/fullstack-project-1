import { useState } from "react";
import { getMedian } from "./services/medianService";
import toast, { Toaster } from "react-hot-toast";
import { MedianDisplay } from "./components/MedianDisplay";
import { EnterNumberForm } from "./components/EnterNumberForm";

function App() {
  const [answer, setAnswer] = useState<number[] | null>(null);

  const handleSubmit = async (userInput: string, callback: () => void) => {
    try {
      const res = await getMedian(Number(userInput));
      if (res.error) {
        toast.error(res.error);
        callback();
        setAnswer(null);
        return;
      }

      if (res.median) {
        setAnswer(res.median);
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
        callback();
        setAnswer(null);
      }
    }
  };

  return (
    <main className="flex items-center justify-center bg-black h-screen w-screen">
      <div className="flex flex-col gap-10 w-96">
        <h1 className="text-white mx-auto text-xl">
          Prime Numbers Median Generator
        </h1>
        <EnterNumberForm onSubmit={handleSubmit} />
        <MedianDisplay answer={answer} />
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </main>
  );
}

export default App;
