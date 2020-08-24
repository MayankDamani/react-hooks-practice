import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    //const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClicked, setIdFromButtonClicked] = useState(1);

    const handleClick = () => {
        setIdFromButtonClicked(id);
    }

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then((response) => {
        //     console.log(response);
        //     setPosts(response.data)
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClicked}`)
        .then((response) => {
            console.log(response);
            setPost(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }, [idFromButtonClicked]);
    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={handleClick}>Fetch post</button>
            <div>{post.title}</div>
            {/* <ul>
            {
                posts.map((post) => <li key={post.id}>{post.title}</li>)
            }
            </ul>*/}
        </div>
    )
}

export default DataFetching
