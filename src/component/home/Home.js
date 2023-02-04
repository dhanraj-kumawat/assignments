import React from 'react'
import Card from './card/Card'

function Home() {
  return (
    <div>
      <h3 className=' text-center'>Education is the key to unlock the Golden Door of Freedom</h3>
      <div className='flex flex-col md:flex-row justify-center items-center  ' >
        <div className="leftText">
            <h3>Learn to code</h3>
            <h3>Practice</h3>
            <h3>Interview Questions</h3>
        </div>
        <div className="rightImg">
            <img src="" alt="img" />
        </div>
      </div>

      <div className="cards">
        <Card imgUrl="" imgText="CodingNinjas" title="JavaScript" text="javascript is a very popular language." />
      </div>
    </div>
  )
}

export default Home
