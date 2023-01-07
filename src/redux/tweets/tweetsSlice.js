import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"

export const tweetsSlice = createSlice({
    name: "tweets",
    initialState:{
        tweets: [
            {   
                id: nanoid(),
                userName: "korayguner",
                name: "Koray Güner",
                currentDate: new Date("2023-01-05"),
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                reply: 4,
                retweet: 2,
                like: 12,
            }
        ]
    },
    reducers: {
        addTweet:{
            reducer:(state, action) => {
                console.log(action.payload);
                state.tweets.unshift(action.payload)
            },
            
            prepare: ( text, currentDate ) => {
                return {
                    payload:{
                        id:nanoid(),
                        userName: "korayguner",
                        name: "Koray Güner",
                        currentDate,
                        text,
                        reply: Math.floor(Math.random() * 20),
                        retweet: Math.floor(Math.random() * 10),
                        like:Math.floor(Math.random() * 300)

                    }
                }
            },
        }

    },
 
})

export const { addTweet } = tweetsSlice.actions
export default tweetsSlice.reducer