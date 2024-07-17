"use client";

// * components
import ListLayout from "./list/Layout";
import ContentsLayout from "./contents/Layout";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

const HomeLayout = () => {
    return (
        <div className='h-full'>
            <ResizablePanelGroup direction='horizontal' className=''>
                <ResizablePanel>
                    <ListLayout />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel>
                    <ContentsLayout />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default HomeLayout;
