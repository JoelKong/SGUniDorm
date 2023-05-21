import { useState } from "react";

export default function SignInForm({ setSignIn }: any): JSX.Element {
  const [disable, setDisable] = useState<boolean>(false);

  function logIn(e) {
    e.preventDefault();
  }

  return (
    <section className="w-[100%] h-[100%] fixed top-0 left-0 flex justify-center items-center z-20 backdrop-brightness-50 animate-fade">
      <form
        className="border-2 border-black shadow-inner w-[95vw] md:w-[40vw] h-[80%] rounded-xl bg-gradient-to-br from-[#46458f] to-[#e9b2c08a] flex justify-center items-center"
        onSubmit={(e) => logIn(e)}
      >
        <div className="flex items-center flex-col flex-nowrap w-[80%] h-[90%] ">
          <div className="font-bold text-3xl tracking-wide drop-shadow-2xl">
            Log In
          </div>
          <input
            className="mt-10 pl-2 pr-2 w-full md:w-3/4 h-9 rounded-md font-semibold focus:outline-none focus:border-violet-300 focus:border-4 border-4 tracking-wide"
            placeholder="Email"
            autoFocus
          ></input>
          <input
            className="mt-3 pl-2 pr-2 w-full md:w-3/4 h-9 rounded-md font-semibold focus:outline-none focus:border-violet-300 focus:border-4 border-4 tracking-wide"
            placeholder="Password"
            type="password"
          ></input>
          <button
            className="mt-5 w-full md:w-3/4 h-8 text-white disabled:bg-blue-300 hover:bg-blue-600 bg-blue-500 rounded-md font-medium focus:outline-none focus:border-violet-300 focus:border-2"
            disabled={disable}
          >
            Log In
          </button>
        </div>
      </form>
    </section>
  );
}
