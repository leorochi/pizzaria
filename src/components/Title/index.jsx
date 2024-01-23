/* eslint-disable react/prop-types */
import './Title.css';

const Title = ({text}) => {
  return (
    <div className='titulo'>
      <h1>{text}</h1>
    </div>
  )
}

export default Title