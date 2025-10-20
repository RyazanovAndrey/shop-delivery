export default function Page() {
    return (
        <div className="">
            <div className="bg-green-light my-5 p-3 font-fugaz-one text-2xl">Account</div>
            <div className="grid grid-cols-2 gap-x-5">
                <div className="border border-gray-200 p-5">
                    <div className="font-fugaz-one text-2xl">Login</div>
                    <div className="">
                        <div className="my-5">
                            <label className="w-full block" htmlFor="">Email</label>
                            <input type="text" placeholder="enter your email" className="border border-gray-200 h-10 rounded-md pl-3 outline-0 w-full" />
                        </div>
                        <div className="mb-5">
                            <label className="w-full block" htmlFor="">Password</label>
                            <input type="password" placeholder="enter your password" className="border border-gray-200 h-10 rounded-md pl-3 outline-0 w-full" />
                        </div>
                        <button className="px-8 bg-green-bg text-white h-10 rounded-md cursor-pointer">Login</button>
                    </div>
                </div>
                <div className="border border-gray-200 p-5">
                    <div className="font-fugaz-one text-2xl">Register</div>
                    <div className="">
                        <div className="my-5">
                            <label className="w-full block" htmlFor="">User name</label>
                            <input type="text" placeholder="enter your name" className="border border-gray-200 h-10 rounded-md pl-3 outline-0 w-full" />
                        </div>
                        <div className="my-5">
                            <label className="w-full block" htmlFor="">Email</label>
                            <input type="text" placeholder="enter your email" className="border border-gray-200 h-10 rounded-md pl-3 outline-0 w-full" />
                        </div>
                        <div className="mb-5">
                            <label className="w-full block" htmlFor="">Password</label>
                            <input type="password" placeholder="enter your password" className="border border-gray-200 h-10 rounded-md pl-3 outline-0 w-full" />
                        </div>
                        <div className="mb-5">
                            <label className="w-full block" htmlFor="">Confirm password</label>
                            <input type="password" placeholder="confirm password" className="border border-gray-200 h-10 rounded-md pl-3 outline-0 w-full" />
                        </div>
                        <button className="bg-green-bg text-white h-10 rounded-md cursor-pointer px-8">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}