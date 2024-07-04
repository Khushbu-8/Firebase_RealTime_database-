import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./Pages/Add"

function App() {

  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Add/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
