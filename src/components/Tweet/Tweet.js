import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto'
import styles from "./Tweet.module.scss"
import IconButton from '../Button/IconButton'
import { Statistics, ReplyIcon, RetweetIcon, LikeIcon, ShareIcon } from '../Icons'


function Tweet({ name, slug, dataTime, text }) {
  return (
    <article className={styles.tweet}>
        <div className={styles.avatar}>
            <ProfilePhoto/>
        </div>
        <div className={styles.body}>
            <header className={styles.header}>
                <span className={styles.name}>{name}</span>
                <span>{` @${slug} · ${formatDistanceToNowStrict(dataTime)}`}</span>
            </header>
            <div className={styles.content}>
                {text}
            </div>
            <footer className={styles.footer}>
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <Statistics />
                    </IconButton>
                    <span>3</span>
                </div>
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <ReplyIcon />
                    </IconButton>
                    <span>4</span>
                </div>
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <RetweetIcon />
                    </IconButton>
                    <span>2</span>
                </div>
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <LikeIcon />
                    </IconButton>
                    <span>12</span>
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