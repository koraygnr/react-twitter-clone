import React from 'react'
import Tweet from '../../components/Tweet/Tweet'
import { useSelector } from 'react-redux'

function Home() {

  const tweets = useSelector(state => state.tweets.tweets)
  
  return (
    <div>
      {
        tweets && tweets.map( (tweet, i) => (
          <Tweet tweet={tweet} key={i}/>
        ))
      }
    </div>
  )
}

export default Home