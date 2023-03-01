import React, { useMemo } from 'react';
import PostService from '../API/getJSON';

export const usePosts = (posts, query) => {
    
    const sortedAndSearchedPosts = useMemo(() => {
        return posts.filter(post => post.volumeInfo.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, posts])

    return sortedAndSearchedPosts
}