import React from 'react'

import './ListItem.scss'

const ListItem = ({ name, desc }) => {
  return (
    <li><span>{name}</span><br />{desc}</li>
  )
}

export default ListItem