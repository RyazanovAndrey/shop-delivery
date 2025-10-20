export default function Page() {
    return (
        <div className="">
            <div className="bg-green-light my-5 p-3 font-fugaz-one text-2xl">Checkout</div>
            <div className="grid grid-cols-2 gap-x-5">
                <div className="">
                    <div className="mb-5">
                        <div className="font-fugaz-one text-2xl">Contact</div>
                        <input type="text" className="border border-gray-200 pl-3 w-full h-10 outline-0 rounded-md" placeholder="email or mobile number" />
                    </div>
                    <div className="mb-5">
                        <div className="font-fugaz-one text-2xl">Delivery</div>
                        <div className="flex gap-x-2">
                            <input type="radio" name="radio-1" id="radio-1" />
                            <label htmlFor="radio-1" className="cursor-pointer">Ship</label>
                        </div>
                        <div className="flex gap-x-2">
                            <input type="radio" name="radio-1" id="radio-2" />
                            <label htmlFor="radio-2" className="cursor-pointer">Pickup in store</label>
                        </div>
                        <input type="text" className="border border-gray-200 pl-3 w-full h-10 outline-0 rounded-md mt-3" placeholder="email or mobile number" />
                        <div className="grid grid-cols-2 gap-x-3">
                            <input type="text" className="border border-gray-200 pl-3 w-full h-10 outline-0 rounded-md mt-3" placeholder="firs name" />
                            <input type="text" className="border border-gray-200 pl-3 w-full h-10 outline-0 rounded-md mt-3" placeholder="last name" />
                        </div>
                        <input type="text" className="border border-gray-200 pl-3 w-full h-10 outline-0 rounded-md mt-3" placeholder="adress" />
                        <div className="grid grid-cols-2 gap-x-3"></div>
                        <div className="flex gap-x-2">
                            <input type="checkbox" name="check" id="check-1" />
                            <label htmlFor="check-1" className="cursor-pointer">Save this information for next time</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}