import React from 'react';
import css from 'components/ProfilePost.module.css';
import timespan from 'utils/timespan.js';
import { Link } from 'react-router-dom';


function ProfilePost(props){
    let currentUserId = props.currentUserId;

    return (
        <article className={css.post}>
            <header className={css.title}>
                {props.post.title}
            </header>
            <section className={css.desc}>
                {props.post.desc}
            </section>
            <section className={css.tags}>
                {props.post.tags.map(tag =>
                    <span>{tag}</span>
                )}
            </section>
            <div className={css.respondButton}>
                {props.post.userId !== currentUserId ? 
                    <div>
                        <Link to={`/responses/${props.post.userId}`}>
                                <button>
                                    Respond
                                </button>
                        </Link>       
                    </div> : null
                }
            </div>
            <time className={css.time}>
                {timespan(props.post.datetime).toUpperCase()} AGO
            </time>
        </article>
    );
}

export default ProfilePost;