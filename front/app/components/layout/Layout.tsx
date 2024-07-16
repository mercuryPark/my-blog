"use client";

// * install libraries
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

// * components
import Header from "./Header";
import Left from "./Left";
import Contents from "./Contents";

const AppLayout = ({ children }: any) => {
    return (
        <div className='h-[calc(100vh-40px)] p-10'>
            <Header />
            <Contents>
                <Left />
                <div className='col-span-5'>{children}</div>
            </Contents>
        </div>
    );
};

export default AppLayout;
