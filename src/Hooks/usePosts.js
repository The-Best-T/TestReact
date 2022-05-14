import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort)
            return [...posts].sort((a, b) =>
                a[sort].localeCompare(b[sort]))
        return posts
    }, [sort, posts])

    return sortedPosts
}

export const usePost = (post, sort, query) => {
    const sortedPosts = useSortedPosts(post, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        if (query)
            return sortedPosts.filter(post =>
                post.title.toLowerCase().includes(query.toLowerCase()))
        return sortedPosts
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}

