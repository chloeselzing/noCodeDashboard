import React from 'react'
import '../styles/templateNav.css'
import {besideMenu,Menu} from '../images'


type Props = {}

const templateNav = (props: Props) => {
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
            <button>
                <img src={besideMenu} alt="Grid" />
            </button>
            <button>
                <img src={Menu} alt="List" />
            </button>
        </div>
    </div>
  )
}

export default templateNav