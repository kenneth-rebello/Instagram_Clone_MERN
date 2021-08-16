import React, { useEffect, useState } from 'react';
import './EmojiInput.css';

import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Picker from 'emoji-picker-react';

const CommentForm = ({onSubmit}) => {

    const [text, setText] = useState("");
    const [showEmojiPicker, toggleEmojiPicker] = useState(false);
    const [disabled, setDisabled] = useState(true);


    useEffect(()=>{
        if(text.trim()===""){
            setDisabled(true);
        }
        else{
            setDisabled(false);
        }
    }, [text]);

    const typeText = val => {
        const element = document.getElementById("comment");
        element.style.height="auto";
        element.style.height=element.scrollHeight;
        setText(val);
    }

    const onEmojiClick = (event, emojiObject) => {    
        if (!isNaN('0x' + emojiObject.originalUnified)){
          setText(text + String.fromCodePoint('0x' + emojiObject.originalUnified)+"");
        }
        else {
            setText(text + String.fromCodePoint('0x' + emojiObject.originalUnified.split("-")[0])+"");
        }
    };

    const submitter = (e) => {
        e.preventDefault();
        onSubmit(text);
    }

    return (
        <div className="commentForm">
            <form className="commentForm__main" onSubmit={e=>submitter(e)}>
                <span className="commentForm__emoji dropdown">
                    <SentimentSatisfiedIcon
                        fontSize="inherit"
                        onClick={()=>toggleEmojiPicker(!showEmojiPicker)}
                    />
                </span>
                <textarea 
                    value={text} onChange={e=>typeText(e.target.value)}
                    className="commentForm__input"
                    placeholder="Add a comment..."
                    id="comment"
                />
                <button type="submit" disabled={disabled}>
                    Post
                </button>
            </form>
            {showEmojiPicker && <div className="commentForm__emojis dropdown-content">
                <ClickAwayListener onClickAway={()=>toggleEmojiPicker(false)}>
                    <div>
                        <Picker onEmojiClick={onEmojiClick} 
                            disableSkinTonePicker={true}
                        />
                    </div>
                </ClickAwayListener>
            </div>}
        </div>
    )
}

export default CommentForm
