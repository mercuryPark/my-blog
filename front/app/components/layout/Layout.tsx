"use client";

// * components
import Header from "./Header";
import Left from "./Left";
import Contents from "./Contents";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

const AppLayout = ({ children }: any) => {
    return (
        <div className='h-[calc(100vh-40px)] p-10'>
            <Header />
            <Contents>
                <ResizablePanelGroup
                    direction='horizontal'
                    className='size-full'
                >
                    <ResizablePanel defaultSize={15}>
                        <Left />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={85}>{children}</ResizablePanel>
                </ResizablePanelGroup>
            </Contents>
        </div>
    );
};

export default AppLayout;
