import React from 'react'
import {Add,rightArrow} from '../images'
import '../styles/createsite.css'


type Props = {}

const CreateSite = (props: Props) => {
  return (
    <div className='container'>
        <div className='newSite'>
            <div className='add'>
                <img src={Add} alt="Add" />
            </div>
            <div>
                <p className='heading'>
                    Create New Site
                </p>
                <p className='text'>
                Tap to create
                </p>
            </div>
        </div>
        <div>
            <img src={rightArrow} alt="Right arrow" />
        </div>
    </div>
  )
}

export default CreateSite