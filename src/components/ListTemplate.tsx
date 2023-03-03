import React from 'react'
import {One,Two, Three, Fiour, Five, Six, Vector} from '../images'
import '../styles/ListTemplate.css'
type Props = {}

type ImageType = {
    image:string
    name:string
    date:string
}
   

const ListTemplate = (props: Props) => {
    const Images:ImageType[] = [
        { image: One, name:'No Code Project', date:'2 hours ago'},
        { image: Two,name:'Alama House Project', date:'2 hours ago'},
        { image: Three, name:'MTN Landing Page', date:'2 hours ago'},
        { image: Fiour, name:'Harmony Hospital', date:'2 hours ago'},
        { image: Five, name:'The Safe House Project', date:'2 hours ago'},
        { image: Six, name:'House on the Rock Project', date:'2 hours ago'},
     ]
  return (
    <div className='list-template-container'>
    { Images.map(imageItem=>{
        return(
        
        <div className='list'>
            <img src={imageItem.image} alt="site" className='img'/>
            <p className='title'>{imageItem.name}</p>
            <p className='time'>{imageItem.date}</p>
            <img src={Vector} className='menu' alt="menu" />
        </div>
        ) })}
</div>

  )
}

export default ListTemplate