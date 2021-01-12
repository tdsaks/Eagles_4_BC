import React, { createContext , useState, useEffect} from 'react';
import initStore from 'utils/initStore';
import uniqueId from 'utils/uniqueId.js';


export const StoreContext = createContext();

function StoreContextProvider(props) {
    const [store, setStore] = useState(()=>{return initStore});
    useEffect(()=>{
        window.localStorage.setItem('store', JSON.stringify(store));
    }, [store]);

    function addPost(title, type, desc, tags){
        const post = {
            id: uniqueId('post'),
            userId: store.currentUserId,
            userPhoto: store.users.find(user => user.id === store.currentUserId).photo,
            type,
            title,
            desc,
            tags,
            datetime: new Date().toISOString()
        }
        setStore({
            ...store,
            posts: store.posts.concat(post)
          });
        console.log(store.posts)
    }

    return (
        <StoreContext.Provider value = {{...store, addPost}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;