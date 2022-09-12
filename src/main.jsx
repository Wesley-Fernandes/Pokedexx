import {BrowserRouter,Routes,Route} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import Pokemon from "./Pages/Pokemon"



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/pokemon/" element={<Pokemon/>}/>
    </Routes>
  </BrowserRouter>
)
