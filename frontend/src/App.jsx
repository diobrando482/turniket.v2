import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Main />
      </main>
      <Footer />
    </>
  )
}
export default App