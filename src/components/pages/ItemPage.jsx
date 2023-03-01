import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../../API/getJSON.JS'
import { useFetching } from '../../hooks/useFetching'

const ItemPage = () => {

    const params = useParams()
    const [post, setPost] = useState({})

    const [fetchPostById, isLoading, error] = useFetching( async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
        console.log(response)
    })

    useEffect(() => {
        fetchPostById();
    }, []);

    return (
        <div>
            <img src={post?.volumeInfo?.imageLinks?.thumbnail} alt="" />
            <p>Титл: {post?.volumeInfo?.title}</p>
            <p>Сабтитл: {post?.volumeInfo?.subtitle}</p>
            <div className="info">
                {post?.volumeInfo?.description}
                <a href={post?.volumeInfo?.infoLink}>Info</a>
                <h3>Создатель: {post?.volumeInfo?.publisher}</h3>
                
            </div>
        </div>
    )
}

export default ItemPage