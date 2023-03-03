import '../styles/nav.css'
import {logo,notifications,downArrow} from '../images'


type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className='nav'>
      <a>
          <img src={logo} alt="" />
      </a>
      <span className='col_2'>
          <span >
              <input type="text" className='input'
              placeholder='Search for projects and Templates'/>
          </span>
          <span className='block'>
              <p className='name'>OS</p>
              <img src={downArrow} alt="" />
          </span>
          <span>
                <img src={notifications} alt="" />
          </span>
      </span>
    </nav>
  )
}

export default Nav