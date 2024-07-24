"use client";

// * basic
import { useRef, useState, useCallback } from "react";

// * install libraries
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Virtuoso, VirtuosoHandle, GroupedVirtuoso } from "react-virtuoso";
import { useAtom, useAtomValue } from "jotai";
import moment from "moment";
import "moment/locale/ko";

// * state
import { postState } from "@/app/(protected)/_store/post";

// * components
import { Badge } from "@/components/ui/badge";

const ListContents = () => {
    const virtuosoRef = useRef<VirtuosoHandle>(null);
    const [posts, setPosts] = useAtom(postState);
    const [postList, setPostList] = useState(posts);

    const handleClickOpenDetailPost = (data: any) => {
        // 상세보기 전환 해주는 곳
    };

    const postListElement = useCallback(
        (index: any, post: any) => {
            if (post === undefined) {
                return;
            }
            return (
                <li
                    onClick={() => {
                        handleClickOpenDetailPost(post);
                    }}
                    className='cursor-pointer mb-2'
                >
                    <Card>
                        <CardHeader className='flex flex-row justify-between items-center'>
                            <CardTitle>
                                {post.title === undefined
                                    ? "제목 없음"
                                    : post.title}
                            </CardTitle>
                            <Badge variant='outline'>{post.category}</Badge>
                        </CardHeader>
                        <CardContent>
                            <p className='text-sm'>{post.contents}</p>
                        </CardContent>
                        <CardFooter>
                            <p className='text-gray-400 text-sm'>
                                {moment(post.created_at).format("llll")}
                            </p>
                        </CardFooter>
                    </Card>
                </li>
            );
        },
        [postList]
    );

    return (
        <div className='relative h-full p-2'>
            <Virtuoso
                ref={virtuosoRef}
                data={posts}
                // endReached={nextChatrooms}
                overscan={0}
                isScrolling={() => {
                    // console.log('isScrolling')
                }}
                startReached={(index) => {
                    // console.log('startReached', index)
                }}
                // alignToBottom={true}
                // atBottomThreshold={0}
                // atBottomStateChange={(atBottom) => {
                //     console.log("CHATROOMLIST", atBottom, hasMoreRooms);
                //     if (atBottom && hasMoreRooms) {
                //         return nextChatrooms();
                //     }
                // }}

                useWindowScroll={false}
                totalCount={posts.length > 0 ? posts.length - 1 : 0}
                itemContent={(index, post) => postListElement(index, post)}
            />
        </div>
    );
};

export default ListContents;
