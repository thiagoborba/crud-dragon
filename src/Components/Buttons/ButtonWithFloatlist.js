import React, { useState, useRef, useEffect } from 'react'
import {  IconButton } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import ActionsList from '../List/ActionsList'

function useOutsideAlerter(ref, onClickOutside) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside()
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}

const ButtonWithFloatlist = ({ actions }) => {
  const [showActionsList, setShowActionsList] = useState(false)
  const buttonRef = useRef(null)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, closeList)

  function closeList () {
    setShowActionsList(false)
  }

  function togglelist () {
    setShowActionsList(!showActionsList)
  }

  function generateFloatListPositions () {
    if (buttonRef.current) {
      return {
        right: buttonRef.current.clientWidth + 15,
        bottom: -42,
      }
    } 
  }

  return (
    <div
      ref={wrapperRef}  
    >
      <ActionsList
        actions={actions}
        show={showActionsList}
        position={generateFloatListPositions()}
        onClickItemList={closeList}
      />
      <IconButton
        ref={buttonRef}
        onClick={togglelist}
      >
        <MoreVert />
      </IconButton>
    </div>
  )
}

export default ButtonWithFloatlist