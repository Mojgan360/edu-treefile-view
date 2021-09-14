import React from 'react'
import styled from 'styled-components'

import { AiOutlineFile } from 'react-icons/ai'

import FILE_ICONS from '../FileIcons'

const File = ({ name }) => {
  //to get an extension
  let ext = name.split('.')[1]

  return (
    <StyledFile>
      {/* foe render an extension or fallback to generic file icon  */}
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <span>{name}</span>
    </StyledFile>
  )
}
export { File }

const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`
