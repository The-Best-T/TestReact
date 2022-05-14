import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await axios.get(url, {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getById(id) {
        const url = 'https://jsonplaceholder.typicode.com/posts/' + id
        const response = await axios.get(url)
        return response
    }
    static async getByCommentsByPostId(id) {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        const response = await axios.get(url)
        return response
    }

}