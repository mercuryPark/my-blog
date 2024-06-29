import axios from "../_utils/axios";

// 블로그 글 조회
export const API_GET_BLOG_POST = (id: string | undefined = "") => {
    const result = axios.get(`/get/${id}`);
    return result;
};

// 블로그 글 등록
export const API_UPLOAD_BLOG_POST = (contents: {
    contents: string;
    category: string;
}) => {
    const result = axios.post(`/add`, {
        contents,
    });
    return result;
};

// 블로그 글 수정
export const API_UPDATE_BLOG_POST = (id: string | null = null) => {
    if (id !== null) {
        const result = axios.post(`/update/${id}`);
        return result;
    }
};

// 블로그 글 삭제
export const API_DELETE_BLOG_POST = (id: string | null = null) => {
    if (id !== null) {
        const result = axios.delete(`/delete/${id}`);
        return result;
    }
};
