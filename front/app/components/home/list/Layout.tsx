"use client";
// * components
import Header from "./Header";
import Contents from "./Contents";

const ListLayout = () => {
    return (
        <div className='h-full relative'>
            <Header />
            <Contents />
        </div>
    );
};

export default ListLayout;
