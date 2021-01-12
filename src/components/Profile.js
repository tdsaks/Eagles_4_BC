import React, { useContext, useState } from 'react';
import publicUrl from 'utils/publicUrl'
import { StoreContext } from 'contexts/StoreContext';
import { useParams } from 'react-router-dom';
import css from 'components/Profile.module.css';
import ProfilePost from 'components/ProfilePost';

function Profile(){

  const store = useContext(StoreContext)
  
  let {userId} = useParams();
  if (!userId){
    userId = store.currentUserId;
  }

  const [filter, setFilter] = useState('need');

  let user = store.users.find(u => u.id === userId);
  let userPosts = store.posts.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime)).filter(p => p.userId === userId);

  return(
    <div>
      <header className={css.header}>
        <div className={css.photo}>
          <img src={publicUrl(user.photo)} alt="Profile" />
        </div>
        <div className={css.name}>
          <span> {user.name} </span>
        </div>
        <div className={css.bio}>
          <span>{user.bio}</span>
        </div>
      </header>
      <div className={css.filters}>
        <button onClick={()=> setFilter('need')} >Needs</button>
        <button onClick={()=> setFilter('offer')}>Offers</button>
      </div>
      <div className={css.posts}>
        {userPosts.filter(p => p.type === filter).map(post =>
          <ProfilePost key={post.id} post={post} currentUserId={store.currentUserId} />)}
      </div>
    </div>
  );
}

export default Profile;