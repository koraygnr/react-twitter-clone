import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto'
import styles from "./Tweet.module.scss"
import IconButton from '../Button/IconButton'
import { Statistics, ReplyIcon, RetweetIcon, LikeIcon, ShareIcon } from '../Icons'

function Tweet({ tweet }) {
  return (
    <article className={styles.tweet}>
        <div className={styles.avatar}>
            <ProfilePhoto/>
        </div>
        <div className={styles.body}>
            <header className={styles.header}>
                <span className={styles.name}>{tweet.name}</span>
                <span>{` @${tweet.userName} · ${formatDistanceToNowStrict(new Date(tweet.currentDate))}`}</span>
            </header>
            <div className={styles.content}>
                {tweet.text}
            </div>
            <footer className={styles.footer}>
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <Statistics />
                    </IconButton>
                </div>
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <ReplyIcon />
                    </IconButton>
                    <span>{tweet.reply}</span>
                </div>
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <RetweetIcon />
                    </IconButton>
                    <span>{tweet.retweet}</span>
                </div>
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <LikeIcon />
                    </IconButton>
                    <span>{tweet.like}</span>
                </div>
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <ShareIcon />
                    </IconButton>
                </div>
            </footer>
        </div>
    </article>
  )
}

export default Tweet