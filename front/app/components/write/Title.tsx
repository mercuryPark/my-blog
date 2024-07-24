"use client";

import { Input } from "@/components/ui/input";

const Title = ({ value, setValue }: any) => {
    return (
        <div className='flex flex-wrap'>
            <p>글 제목</p>
            <Input />
        </div>
    );
};

export default Title;
