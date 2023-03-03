import React from 'react'
import {One,Two, Three, Fiour, Five, Six, Vector} from '../images'
import '../styles/GridTemplate.css'

type Props = {}

type ImageType = {
    image:string
    name:string
    date:string
}
const GridTemplate = (props: Props) => {
    const Images:ImageType[] = [
        { image: One, name:'No Code Project', date:'Edited 3 hours ago'},
        { image: Two,name:'Alama House Project', date:'Edited 3 hours ago'},
        { image: Three, name:'MTN Landing Page', date:'Edited 3 hours ago'},
        { image: Fiour, name:'Harmony Hospital', date:'Edited 3 hours ago'},
        { image: Five, name:'The Safe House Project', date:'Edited 3 hours ago'},
        { image: Six, name:'House on the Rock Project', date:'Edited 3 hours ago'},
     ]
  return (
    <div className='template-container'>
        { Images.map(imageItem=>{
            return(
            
            <div className='cards'>
                <div >
                    <img className='images' src={imageItem.image} 
                    alt=''  
                    />  
                </div>
                <div className='row_2'>
                    <div>
                        <p className='p1'>{imageItem.name}</p>
                        <p className='p2'>{imageItem.date}</p>
                    </div>
                    <img src={Vector} className='dot' alt="" />
                </div>
            </div>
            ) })}
    </div>
  )
}

export default GridTemplate