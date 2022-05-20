import { FaBitcoin, FaEthereum, FaPiggyBank, FaWallet } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { BiUpArrow } from "react-icons/bi";

export default function Landing(){
    return(
        <div className="flex">
            <div className="flex flex-col w-2/3 h-full py-16">
                <img src="/images/callgestureman.jpg" alt="man doing call gesture" className="w-3/4"/>
                <div className="flex justify-around items-center text-slate-100 text-5xl h-24 bg-red-500/90 rounded-t-2xl">
                    <FaBitcoin/>
                    <FaEthereum />
                    <FaPiggyBank />
                    <AiOutlineStock />
                    <FaWallet />
                </div>
            </div>
            <div className="flex flex-col w-1/3 h-full items-center bg-gray-50">
                <div className="flex items-center text-xs w-full bg-slate-200 py-1">
                    Company Name <span className="text-teal-600 flex pl-2 items-center">888% &nbsp; <BiUpArrow /> </span>  Company Name <span className="text-teal-600 flex px-2 items-center">888% &nbsp;<BiUpArrow /></span> Company Name <span className="text-teal-600 flex px-2 items-center">888% &nbsp;<BiUpArrow /></span>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-2/5 py-4 my-4 lg:my-12">
                        <img src="/images/logo.jpg" alt="FWlogo"  className="border rounded-lg border-red-900 ring-2 ring-red-900"  />
                    </div>
                    <div className="">
                        <p className="text-3xl font-serif pt-6 pb-12">The Financial Wire</p>
                        <p className="text-xl italic font-bold text-teal-700  tracking-widest"> Sab Portfolio Manager <br/> Apps Ka Baap</p>
                        <button className="bg-cyan-600  text-white w-3/4 rounded h-10 mt-8 mb-4">Login</button>
                    </div>
                </div>    
            </div>
        </div>  
    )
}