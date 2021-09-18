import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {

  
  return (
    <Fragment>
      <div className="belt">
        {
          <Sushi />          
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer