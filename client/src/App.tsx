import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { MedianDisplay } from "./components/MedianDisplay";
import { EnterNumberForm } from "./components/EnterNumberForm";

function App() {
  const [answer, setAnswer] = useState<number[] | null>(null);

  return (
    <main className="flex items-center justify-center bg-black h-screen w-screen">
      <div className="flex flex-col gap-10 w-96">
        <h1 className="text-white mx-auto text-xl">
          Prime Numbers Median Generator
        </h1>
        <EnterNumberForm setAnswer={setAnswer} />
        <MedianDisplay answer={answer} />
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </main>
  );
}

export default App;
