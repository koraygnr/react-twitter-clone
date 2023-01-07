import React from 'react'
import Button from '../Button/Button'
import ThemeButton from '../Button/ThemeButton'
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto'
import styles from "./Modal.module.scss"
import IconButton from "../Button/IconButton"
import { CloseIcon, MediaIcon, GifIcon, SurveyIcon, EmojiIcon, ActivityIcon, LocationIcon } from '../Icons'


function Modal({ setIsOpen }) {
    return (
        <div className={styles.overlay} 
            onClick={()=> setIsOpen(false)}
        >
            <div className={styles.modal}
                onClick={e => e.stopPropagation()}
            >
                <div className={styles.header}>
                    <IconButton
                        onClick={()=> setIsOpen(false)}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className={styles.content}>
                    <div className={styles.avatar}>
                        <ProfilePhoto />
                    </div>
                    <div className={styles.tweet}>
                        <textarea
                            className={styles.textarea}
                            placeholder="Neler oluyor?"
                            name=""
                            rows="6"
                            spellCheck="false"
                        />
                    </div>
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
                        >
                        Tweetle
                        </ThemeButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal