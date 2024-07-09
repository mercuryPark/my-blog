"use client";

// * install libraries
import Combobox from "@/components/ui/combobox";

const Left = () => {
    return (
        <div className='border-r-[1px] border-gray-200 h-full col-span-1 truncate'>
            <div className='p-2 flex justify-center'>
                <Combobox />
            </div>

            <div className='truncate'>
                asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
            </div>
        </div>
    );
};

export default Left;
