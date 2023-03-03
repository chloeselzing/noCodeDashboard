import React from 'react'
import '../styles/templateNav.css'
import {GRID,List} from '../images'


type Props = {
    onClick: () => void;
    Click: () => void;
    ClassName: string;
    ClassName2: string;
}

const templateNav: React.FC<Props> = ({ onClick, Click, ClassName,ClassName2,...rest}: Props) => {
  return (
    <div className='containers'>
        <div>
            <select name="sites" id="sites">
                <option value="All sites" className='option'>All sites</option>
            </select>
        </div>
        <div>
            <select name="viewed" id="viewed">
                <option value=" Last viewed">Last viewed</option>
            </select>
            <button className={ClassName}  onClick={onClick}>
                <img src={GRID} className='button-image' alt="Grid"/>
            </button>
            <button className={ClassName2}   onClick={Click}>
                <img src={List} className='button-image' alt="List" />
            </button>
        </div>
    </div>
  )
}

export default templateNav