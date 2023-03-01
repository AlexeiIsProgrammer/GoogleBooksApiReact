import React, { useEffect, useState } from 'react'
import PostService from '../../API/getJSON.js';
import { useFetching } from '../../hooks/useFetching';
import { usePosts } from '../../hooks/usePosts.js';
import Card from '../Card.jsx';
import Header from '../Header.jsx';

const MainPage = () => {

    const [posts, setPosts] = useState([]);
    const [isButtonOpen, setIsButtonOpen] = useState(true);

    const [filter, setFilter] = useState({ actual: "relevance", category: "", query: "" });

    const [limit, setLimit] = useState(30);
    const [page, setPage] = useState(1);

    const sortedAndSearchedPosts = usePosts(posts, filter.query)

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(filter.category, filter.actual, limit, page); 
        setPosts([...response.data.items]);
        // console.log(response.data.items)
        // if (limit > response.data.items.length) {
        //     setLimit(response.data.items.length)
        //     setIsButtonOpen(false)
        // }
    });

    useEffect(() => {
        fetchPosts(filter.category, filter.actual, limit, page);
    }, [page, limit]);

    return (
        <div className="main__container">
            <Header filter={filter} setFilter={setFilter} fetchPosts={fetchPosts}/>
            
            <h2 className='main__searched'>
                Найдено: {sortedAndSearchedPosts.length}
            </h2>
            <div className='main__content'>
                {
                isPostLoading
                ?
                <h1>Загрузка...</h1>
                :
                sortedAndSearchedPosts.length
                ?
                sortedAndSearchedPosts.map((postItem, ind) => 
                    <Card key={ind} props={postItem}/>)
                :
                <h1>Нет записей</h1>
            }
            </div>
            <button className="main__load-more" onClick={() => setLimit(limit + 30)}>
                Load More
            </button>
        </div>
    )
}

export default MainPage