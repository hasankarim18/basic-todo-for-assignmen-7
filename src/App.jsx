
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'

function App() {
 

  return (
    <>
      <div className="container mx-auto">
        <Header />  
          <div  className="min-h-[calc(100vh-100px)]" >
            <Layout />
          </div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
