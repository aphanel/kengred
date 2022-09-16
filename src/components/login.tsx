import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
    return (
        <>
          <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 bg-blue-50">
            <h1 className="text-5xl my-24 md:text-[5rem] leading-normal font-extrabold text-gray-700">
              Welcome to <span className="text-blue-500">Kengred</span>
            </h1>
            <div><Image src="/triskel.png" width={90} height={90} alt="triskel image" /></div>
            <button onClick={() => signIn()} type="button" className="mt-12 rounded border-blue-500 bg-blue-500 py-2 px-4 text-white shadow-sm hover:shadow-2xl hover:bg-blue-700 hover:border-blue-700 hover:text-black">Click to Login</button>
          </main>
        </>
      );  
}