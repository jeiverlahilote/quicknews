import { useState } from "react"
import Nav from "./Components/Nav"
import NewsBoard from "./Components/NewsBoard"
import Footer from "./Components/footer";


function App() {
  const [category, setcategory] = useState("general");
  return (
    <>
      <Nav setcategory={setcategory} />
      <NewsBoard category={category}/>
      <Footer />
    </>
  )
}

export default App