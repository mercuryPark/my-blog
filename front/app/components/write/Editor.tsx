"use client";

// * install libraries
import ReactQuill from "react-quill";

// * etc
import "react-quill/dist/quill.snow.css";

const Editor = ({ value, setValue }: any) => {
    return (
        <ReactQuill
            className='h-full'
            theme='snow'
            value={value}
            onChange={setValue}
        />
    );
};

export default Editor;
