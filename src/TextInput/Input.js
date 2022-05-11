import React, { useState } from "react";

import classes from "./Input.module.css";
import icon from "./../Assets/Emoji_icon.svg";
import send from "./../Assets/Send.svg";
import EmojiModal from "./EmojiModal";

function Input() {
  const [emoji, setEmoji] = useState(false);

  const emojiHandler = () => {
    setEmoji(true);
    console.log(emoji);
  };

  const modalHandler = () => {
    setEmoji(null);
  };

  return (
    <div className={classes.pickerContainer}>
      {emoji && <EmojiModal onConfirm={modalHandler} />}
      <textarea className={classes.display} placeholder="Your Messages..." />
      <div className={classes.buttons}>
        <img className={classes.icon} src={icon} onClick={emojiHandler} />
        <img className={classes.send} src={send} />
      </div>
    </div>
  );
}

export default Input;
