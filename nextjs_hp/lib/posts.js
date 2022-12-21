import fetch from "node-fetch";
const apiUrl = "http://jsonplacholder.typicode.com/posts";

export async function getAllPostsData() {
    const res = await fetch(new URL(apiUrl));
    const posts = await res.json();
    return posts;
}