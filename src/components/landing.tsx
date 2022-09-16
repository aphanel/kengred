import { useSession, signOut } from "next-auth/react";

export default function Landing() {
  const { data: session } = useSession();
    return (
      <>
        <div className="container flex flex-col items-center min-h-screen bg-slate-100">
          <div className="flex flex-row space-x-4 p-4 justify-center w-full h-full bg-blue-200">
            <div className="text-2xl p-4 md:text-[3rem] leading-normal font-extrabold text-gray-700 hover:underline underline">G&S</div>
            <div className="text-2xl p-4 md:text-[3rem] leading-normal font-extrabold text-gray-700 hover:underline">Chat</div>
            <div className="text-2xl p-4 md:text-[3rem] leading-normal font-extrabold text-gray-700 hover:underline">Community</div>
            <div className="text-2xl p-4 md:text-[3rem] leading-normal font-extrabold text-gray-700 hover:underline">Profile</div>
          </div>
          <div className="container bg-slate-100">
            <h2 className="text-2xl pl-24 pt-14 md:text-[3rem] leading-normal font-extrabold text-gray-700">My Goods</h2>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="w-[50%] pl-12 pt-2 text-lg font-semibold break-words">Name</div>
                <div className="w-[50%] pl-12 pt-2 text-lg font-semibold break-words">Available</div>
                <div className="w-[50%] pl-12 pt-2 text-lg font-semibold break-words">Lent to</div>
              </div>
              <div className="flex flex-row">
                <div className="w-[50%] pl-12 pt-2 break-words">Mountain Bike</div>
                <div className="w-[50%] pl-12 pt-2 break-words">No</div>
                <div className="w-[50%] pl-12 pt-2 break-words">David</div>
              </div>
              <div className="flex flex-row">
                <div className="w-[50%] pl-12 pt-2 break-words">Electric Guitar</div>
                <div className="w-[50%] pl-12 pt-2 break-words">Yes</div>
                <div className="w-[50%] pl-12 pt-2 break-words">No one</div>
              </div>              
            </div>
            <button 
              onClick={() => {return}} 
              type="button" 
              className="ml-12 mt-4 py-2 px-4 rounded border-blue-500 bg-blue-500 text-white shadow-sm hover:shadow-2xl hover:bg-blue-700 hover:border-blue-700 hover:text-black">
                Add
            </button>
            <h2 className="text-2xl pl-24 pt-14 md:text-[3rem] leading-normal font-extrabold text-gray-700">My Services</h2>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="w-[50%] pl-12 pt-2 text-lg font-semibold break-words">Name</div>
                <div className="w-[50%] pl-12 pt-2 text-lg font-semibold break-words">Description</div>
              </div>
              <div className="flex flex-row">
                <div className="w-[50%] pl-12 break-words">Maths Lessons</div>
                <div className="w-[50%] pl-12 break-words">Up to highschool level maths lessons</div>
              </div>
            </div>
          </div>
        <p>Signed in as {session?.user?.email}</p> <br />

        <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    );
}
