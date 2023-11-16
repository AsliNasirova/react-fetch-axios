import React from 'react'
import './index.css'

const Card = ({id,title="not",author}) => {
  return (
    <>
      <div className="container">
        <div className="card">
            <div className="image">
                <img src="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS6053_dv029034-low.jpg" alt="" />
            </div>
            <div className="text_content">
                <h5>{title}</h5>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="card">
            <div className="image">
                <img src="https://media.4-paws.org/0/f/8/8/0f88e1257f4789ba3e5302260c4d7f3acde0c68b/VP0203086-1926x1333-1920x1329.jpg" alt="" />
            </div>
            <div className="text_content">
                <h5>{title}</h5>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="card">
            <div className="image">
                <img src="https://lukecoutinho.com/blog/wp-content/uploads/2023/04/Lessons-From-the-Wild-and-the-Animal-Kingdom-We-Can-All-Learn.jpg" alt="" />
            </div>
            <div className="text_content">
                <h5>{title}</h5>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>

      </div>
    </>
  )
}

export default Card
