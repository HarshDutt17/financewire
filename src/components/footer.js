import Login from "./loginbutton";

export default function Footer(){
    return(
        <div>
            <div className="bg-footer h-full w-full bg-red-500/80 text-gray-800 py-8">
                <div className="flex flex-col px-44 md:px-10 items-center py-6 bg-white/80 w-full">
                    <h1 className="font-bold text-cyan-700 tracking-wide text-2xl md:text-center"> Don't Speculate... Calculate. </h1>
                    <p className="pt-8 text-center">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris consequat laboris nisi ut aliquip ex ea commodo consequat ullamco laboris consequat.</p>
                    <Login />
                </div>
            </div>
            <div className="flex md:flex-col justify-around px-44 md:px-10 md:mx-0 items-center bg-white md:w-full">
                <div className="flex items-center w-1/2 md:w-full">
                    <img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="logo" className="w-32 pb-2"/>
                    <p className="text-3xl font-serif tracking-wide px-4">The Financial Wire</p>
                </div>
                <div className="flex flex-col items-end text-right w-1/2 md:text-center md:w-full md:items-center md:pb-2">
                    <p className="text-xl font-bold text-teal-700  tracking-widest">Sab Portfolio Ka Baap</p>
                </div>
            </div>
            <p className="text-sm text-center"> Copyright &#169; 2022 Financial Wire- All Rights Reserved.</p>
        </div>    
    )
}