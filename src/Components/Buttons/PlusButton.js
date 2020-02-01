import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const PlusButton = ({ onClick, className }) => {
  return (
    <Fab onClick={onClick} className={className} color="primary">
      <AddIcon />
    </Fab>
  )
}

export default PlusButton