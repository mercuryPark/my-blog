"use client";

// * basic
import { useEffect, useState } from "react";

// * install libraries
import { useAtom } from "jotai";

// * API
import { API_GET_BLOG_POST } from "./api/post";

// * state
import { postState } from "./_store/post";
import { profileState } from "./_store/profile";

const Protected = ({ children }: any) => {
    const [initializing, setInitializing] = useState(true);

    const [post, setPost] = useAtom(postState);
    const [profile, setProfile]: any = useAtom<any>(profileState);

    // 초기 정보 불러오기
    const fetchPreload = async () => {
        await API_GET_BLOG_POST().then((res: any) => {
            setProfile({ id: 0, name: "master" });
            setPost(res.data.data);
        });
    };

    useEffect(() => {
        if (initializing) {
            try {
                if (profile === null) {
                    console.log("request");
                    fetchPreload();
                }
            } catch (err) {
                console.log(err);
            } finally {
                setInitializing(false);
            }
        }
    }, [initializing]);

    if (initializing) {
        return <>로딩중</>;
    } else {
        return <>{children}</>;
    }
};

export default Protected;
