import React from 'react'

import { File } from './File/TreeFile'
import { Folder } from './Folder/TreeFolder'

const Tree = ({ data, children }) => {
  const isImperative = data && !children

  return <>{isImperative ? <TreeRecursive data={data} /> : children}</>
}
const TreeRecursive = ({ data }) => {
  // loop through the data
  return data.map((item) => {
    if (item.type === 'file') {
      return <File name={item.name} />
    }
    if (item.type === 'folder') {
      return (
        <Folder name={item.name}>
          <TreeRecursive data={item.childrens} />
        </Folder>
      )
    }
  })
}
export default Tree
