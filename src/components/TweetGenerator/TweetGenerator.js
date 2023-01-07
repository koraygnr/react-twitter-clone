import React, { useState } from 'react'
import styles from "./TweetGenerator.module.scss"
import { MediaIcon, GifIcon, SurveyIcon, EmojiIcon, ActivityIcon, LocationIcon } from '../Icons'
import IconButton from '../Button/IconButton'
import ThemeButton from '../Button/ThemeButton'
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto'
import { useDispatch } from 'react-redux'
import { addTweet } from '../../redux/tweets/tweetsSlice'


function TweetGenerator() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const onSubmit = () => {
        const currentDate = new Date()
        dispatch(addTweet(text, currentDate))
        setText("")
    }
    return (
        <div className={styles.tweetGenerator}>
            <div className={styles.avatar}>
                <ProfilePhoto />
            </div>
            <div className={styles.content}>
                <div className={styles.tweet}>
                    <textarea
                        className={styles.textarea}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Neler oluyor?"
                        name=""
                        rows="1"
                        spellCheck="false"
                    />
                </div>
                <div className={styles.footer}>
                <div className={styles.footerLeftSide}>
                    <div className={styles.footerButton}>
                        <IconButton className={styles.actionButton}>
                            <MediaIcon />
                        </IconButton>
                    </div>
                    <div className={styles.footerButton}>
                        <IconButton className={styles.actionButton}>
                            <GifIcon />
                        </IconButton>
                    </div>
                    <div className={styles.footerButton}>
                        <IconButton className={styles.actionButton}>
                            <SurveyIcon />
                        </IconButton>
                    </div>
                    <div className={styles.footerButton}>
                        <IconButton className={styles.actionButton}>
                            <EmojiIcon />
                        </IconButton>
                    </div>
                    <div className={styles.footerButton}>
                        <IconButton className={styles.actionButton}>
                            <ActivityIcon />
                        </IconButton>
                    </div>
                    <div className={styles.footerButton}>
                        <IconButton className={styles.actionButton}>
                            <LocationIcon />
                        </IconButton>
                    </div>
                </div>
                <div className={styles.footerRightSide}>
                    <ThemeButton
                        className={styles.tweetButton}
                        onClick={onSubmit}
                        disabled={text.trim() === ""}
                    >
                        Tweetle
                    </ThemeButton>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TweetGenerator