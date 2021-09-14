import React, { useState } from 'react'
import styled from 'styled-components'

import { AiOutlineFolder } from 'react-icons/ai'
const FolderContainer = styled.div`
  padding-left: 20px;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`
const Collapsible = styled.div`
  /* to set the height depending on isOpen prop */
  height: ${(p) => (p.isOpen ? 'auto' : '0')};
  /* to hide the excess content */
  overflow: hidden;
`

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <FolderContainer>
      <div className='folder--label' onClick={handleToggle}>
        <AiOutlineFolder />
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </FolderContainer>
  )
}
export { Folder }
