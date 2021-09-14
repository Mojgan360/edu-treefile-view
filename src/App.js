import './App.css'
import Tree from './components/Tree'
const data = [
  {
    type: 'folder',
    name: 'folder:1',
    childrens: [
      {
        type: 'folder',
        name: 'folder:1-1',
        childrens: [
          { type: 'file', name: 'folder:1-1.file:1.js' },
          { type: 'file', name: 'folder:1-1.file:1.css' },
        ],
      },
      { type: 'file', name: 'file:1.js' },
      { type: 'file', name: 'file:2.html' },
    ],
  },
  { type: 'file', name: 'file.png' },
]
function App() {
  return (
    <div className='App'>
      <Tree data={data} />
    </div>
  )
}

export default App
