import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function App(){
  return(
      <div className="w-full h-full">
        <Navbar />
        <div className="pt-16">
          <Hero />
        </div>

       
      </div>  
  )
}