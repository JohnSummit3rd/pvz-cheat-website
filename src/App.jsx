import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Pages from './Pages'

function App() {
  return (
    <>
      <Router>
        <Pages />
      </Router>
    </>
  )
}

export default App;
