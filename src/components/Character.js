import React from 'react'

const Character = ({characters = []}) => {
  return (
    <div className='row'>
      {
        characters.map((item , index) =>(
          <div key={index} className='col mb-4'>
            <div className='card' style={{minWidth:"200px"}}>
              <img src={item.image} alt=""/>
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
              </div>
              <hr/>
              <p>species: {item.species}</p>
              <p>location: {item.location.name}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Character