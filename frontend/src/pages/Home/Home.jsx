import React, { useState } from 'react'
import { Header, Stats, ExploreMenu } from '../../components/component_index'

function Home() {

  const [category, setCategory] = useState("All")

  return (
    <div>
    <Header />
    <Stats />
    <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home