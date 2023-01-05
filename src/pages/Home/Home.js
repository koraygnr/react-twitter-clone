import React from 'react'
import Tweet from '../../components/Tweet/Tweet'

function Home() {
  return (
    <div>
      <Tweet 
        name="Koray Güner" 
        slug="korayguner" 
        dataTime={new Date("2023-01-05")}
        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`}
      />
      <Tweet 
        name="Koray Güner" 
        slug="korayguner" 
        dataTime={new Date("2023-01-05")}
        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`}
      />
    </div>
  )
}

export default Home