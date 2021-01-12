import React , { useState, useContext } from 'react';
import {StoreContext} from 'contexts/StoreContext';
import css from 'components/NewPost.module.css';
import { useHistory } from "react-router-dom";

function NewPost(){
    const history = useHistory();
    const {addPost} = useContext(StoreContext);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [tags, setTags] = useState(['']);
    const [error, setError] = useState('');

    function handleTitleChange(e){
        setTitle(e.target.value);
    }
    function handleTypeChange(e){
        setType(e.target.value);
    }
    function handleTagsChange(e){
        let tagString = e.target.value;
        let tagSplit = tagString.split(", ");
        setTags(tagSplit);
    }
    function handleDescChange(e){
        setDesc(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        if (title === ''){
          setError('Please enter a title!');
          return;
        }
        if (type === ''){
            setError('Please select a type!');
            return;
          }
        if (desc === ''){
        setError('Please enter a description!');
        return;
        }
        setError('');
    
        //update store
        addPost(title, type, desc, tags);
        history.push('/home');
      }
    function handleCancel(){
        history.goBack();
      }

    return(
        <div className={css.main}>
            <div className={css.header}>
                <span>Create New Post</span>
            </div>
            <div className={css.type}>
                <label>
                    <input type="radio" value="need" checked={type === "need"} onChange={handleTypeChange} /> Need
                </label>
                <label>
                    <input type="radio" value="offer" checked={type === "offer"} onChange={handleTypeChange} /> Offer
                </label>
            </div>
            <div className={css.title}>
                <textarea placeholder="Title for your post…" value={title} row="1" onChange={handleTitleChange}/>
            </div>
            
            <div className={css.tags}>
                <textarea placeholder="Enter tags separated by ,'s" onChange={handleTagsChange} />
            </div>
            <div className={css.desc}>
                <textarea placeholder="Describe your post! Provide details on your need or offer :)" rows="10" onChange={handleDescChange} />
            </div>
           
            <div className={css.actions}>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSubmit}>Post!</button>
            </div>
            <div className={css.error}>
                {error}
            </div>
        </div>
    );
}

export default NewPost;