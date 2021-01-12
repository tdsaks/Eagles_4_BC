import React , { useContext, useState } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import Post from 'components/Post';
import css from 'components/Home.module.css';


function Home(){

    const store = useContext(StoreContext);
    let allPosts = store.posts;

    const [filter, setFilter] = useState('need');

    return(
        <div>
            <div className={css.filters}>
                <button onClick={()=> setFilter('need')} >Needs</button>
                <button onClick={()=> setFilter('offer')}>Offers</button>
            </div>
            <div className={css.posts}>
                {allPosts.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
                .filter(p => p.type === filter)
                .map(post =>
                <Post key={post.id} post={post} currentUserId={store.currentUserId}/>)}
            </div>
        </div>
    );
}

export default Home;