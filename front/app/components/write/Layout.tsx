"use client";

// * basic
import React, { useState } from "react";

// * components
import Title from "./Title";
import Editor from "./Editor";

const WriteLayout = () => {
    const [value, setValue] = useState("");
    return (
        <div className='m-6 h-[calc(100%-82px)]'>
            <div className='grid grid-cols-2 '>
                <Title />
            </div>
            <Editor value={value} setValue={setValue} />
        </div>
    );
};

export default WriteLayout;
