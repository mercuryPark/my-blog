"use client";

const Contents = ({ children }: any) => {
    return (
        <div className='flex h-full ring-1 ring-gray-200 rounded-lg shadow-lg'>
            {children}
        </div>
    );
};

export default Contents;
