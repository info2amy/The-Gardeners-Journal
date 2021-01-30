import React from 'react'

export default function Plants(props) {
  const { plants } = props;
  return (
    <div>
      <h3>Plants</h3>
      {plants.map(plant => (<p>{plant.name}</p>)
      )}
    </div>
  )
}
