import { FC } from 'react'
import './Hello.css';

const Hello:FC = () => {
  return (
    <div className="hello-world-container">
      <div className="hello-world-box">
        <h1 id="hello-world">Hello world</h1>
      </div>
    </div>
  )
}

export default Hello;
