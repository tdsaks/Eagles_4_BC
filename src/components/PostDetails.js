import React, { useContext } from 'react';
import css from 'components/PostDetails.module.css';
import { StoreContext } from 'contexts/StoreContext';
import { useParams, useLocation } from 'react-router-dom';



function PostDetails() {

    const params = useParams();
    const postId = params.postId
    const store = useContext(StoreContext);
    const filtered = store.posts.filter(post => post.id === postId)
    const post = filtered[0]

    return(
        <div>
            <header className={css.header}>
                <div>
                    {post.desc}
                </div>
            </header>
        </div>
         
    );
}

export default PostDetails;