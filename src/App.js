import React, { useState, useLayoutEffect } from 'react'
import './styles.css'

import Tree from './Tree/Tree'

const structure = [
  {
    type: 'folder',
    name: 'marvel',
    files: [
      {
        type: 'folder',
        name: 'black_widow',
        files: [
          { type: 'file', name: 'bw.png' },
          { type: 'file', name: 'why-the-widow-is-awesome.txt' },
        ],
      },
      {
        type: 'folder',
        name: 'drdoom',
        files: [{ type: 'file', name: 'the-doctor.png' }],
      },
      { type: 'file', name: 'marvel_logo.png' },
    ],
  },
  {
    type: 'folder',
    name: 'dc',
    files: [
      {
        type: 'folder',
        name: 'aquaman',
        files: [
          { type: 'file', name: 'mmmmmomoa.png' },
          { type: 'file', name: 'movie-review-collection.txt' },
        ],
      },

      { type: 'file', name: 'character_list.txt' },
    ],
  },
  { type: 'file', name: 'fact_marvel_beats_dc.txt' },
]

export default function App() {
  let [data, setData] = useState(structure)

  const handleClick = (node) => {
    console.log(node)
  }
  const handleUpdate = (state) => {
    localStorage.setItem(
      'tree',
      JSON.stringify(state, function (key, value) {
        if (key === 'parentNode' || key === 'id') {
          return null
        }
        return value
      })
    )
  }

  useLayoutEffect(() => {
    try {
      let savedStructure = JSON.parse(localStorage.getItem('tree'))
      if (savedStructure) {
        setData(savedStructure)
      }
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className='App'>
      <h2 className='container'>Build a UI to visualise a file tree</h2>

      <hr />

      <Tree data={data} onUpdate={handleUpdate} onNodeClick={handleClick} />
    </div>
  )
}
