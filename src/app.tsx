// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"
// Import your navigation component

import LandingBody from "./pages/Landing-front-page/LandingBody"
import StickyLandingPageTop from "./pages/Landing-front-page/StickyLandingTopPage"

function App() {
  return (
    <Router>
      
      {/* Show the navigation menu at the top or sidebar */}
    <StickyLandingPageTop/>
    <LandingBody/>
      {/* Define your routes below */}
      <Routes>
        <Route path="/register" element={<div>Home Page</div>} />
        <Route path="/docs" element={<div>Docs Page</div>} />
        <Route path="/docs/installation" element={<div>Installation Page</div>} />
        <Route path="/docs/primitives/alert-dialog" element={<div>Alert Dialog</div>} />
        {/* Add other routes accordingly */}
      </Routes>
      
    </Router>
  )
}

export default App
