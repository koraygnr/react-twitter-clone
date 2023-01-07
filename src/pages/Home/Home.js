import React from 'react'
import Tweet from '../../components/Tweet/Tweet'
import { useSelector } from 'react-redux'
import TweetGenerator from '../../components/TweetGenerator/TweetGenerator'

function Home() {

  const tweets = useSelector(state => state.tweets.tweets)
  
  return (
    <div>
      <TweetGenerator />
      {
        tweets && tweets.map( (tweet, i) => (
          <Tweet tweet={tweet} key={i}/>
        ))
      }
    </div>
  )
}

export default Home