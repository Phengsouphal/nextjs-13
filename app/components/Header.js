"use client";
import useScrollDirection from "@/utils/functions";
export default function Header() {
    const scrollDirection = useScrollDirection();
    return (
        <div
            className={`z-10 fixed w-full ${scrollDirection === "down" ? "-top-24" : "top-0"
                } h-16 bg-slate-500/30 backdrop-blur-md transition-all duration-500`}
        >
            <div className=" container py-2 mx-auto font-bold h-full w-full flex items-center justify-between">
                <div className="flex justify-start items-center">
                    <div className="  text-2xl 2">Logo Movie</div>
                    <div className=" h-full w-[1px] bg-slate-500 mx-5"></div>
                    <div className="   flex justify-start items-center gap-3 text-xs font-bold">
                        <p className=" text-slate-400 cursor-pointer hover:text-white">
                            GENRE
                        </p>
                        <p className=" text-slate-400 cursor-pointer hover:text-white">
                            MOVIES
                        </p>
                        <p className=" text-slate-400 cursor-pointer hover:text-white">
                            DRAMA / SERIES
                        </p>
                        <p className=" text-slate-400 cursor-pointer hover:text-white">
                            ANIME
                        </p>
                        <p className=" text-slate-400 cursor-pointer hover:text-white">
                            SUGGESTION
                        </p>
                        <p className=" text-slate-400 cursor-pointer hover:text-white">
                            YEAR
                        </p>
                    </div>
                </div>


                <div class="relative flex items-center mt-4 md:mt-0">

                    <input type="text" placeholder="Search" class="block w-full border border-transparent  bg-transparent py-1.5 pr-11 text-slate-400  rounded-lg md:w-80 placeholder-gray-400/70 pl-5 rtl:pr-5 rtl:pl-11    focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    <span class="absolute right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
}
