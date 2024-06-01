import {
    getFirestore,
    collection,
    getDocs,
    deleteDoc,
    updateDoc,
    setDoc,
    getDoc,
    doc,
    Timestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig.js";

// 블로그 글 가져오기
export const getPosts = async () => {
    const querySnapshot = await getDocs(db.collection("post"));

    return "test";
};

// 블로그 글 업로드
export const addPost = () => {};

// 블로그 글 수정/업데이트
export const updatePost = () => {};

// 블로그 글 삭제
export const deletePost = () => {};
