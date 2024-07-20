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

// * state
import { postState } from "@/app/(protected)/_store/post";

// * components
import Widget from "./Widget";

const ListContents = () => {
    const virtuosoRef = useRef<VirtuosoHandle>(null);

    const [posts, setPosts] = useAtom(postState);
    const [postList, setPostList] = useState(posts);

    const postListElement = useCallback(
        (index: any, post: any) => {
            if (post === undefined) {
                return;
            }
            return (
                <li>
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>{post.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{post.contents}</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </li>
            );
        },
        [postList]
    );

    return (
        <div className='h-full p-2'>
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

            <Widget />
        </div>
    );
};

export default ListContents;
