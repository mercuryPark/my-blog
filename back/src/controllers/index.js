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
export const getPosts = async (req, res) => {
    try {
        const querySnapshot = await getDocs(collection(db, "post"));
        const posts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

// 블로그 글 업로드
export const addPost = () => {};

// 블로그 글 수정/업데이트
export const updatePost = () => {};

// 블로그 글 삭제
export const deletePost = () => {};
