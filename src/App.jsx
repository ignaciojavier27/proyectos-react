import Acordion from './components/Accordion/Acordion'
import ColorGenerator from './components/ColorGenerator/ColorGenerator'
import PruebaTecnica from './components/Prueba_Tecnica/PruebaTecnica'
import StarRating from './components/StarRating/StarRating'
import './index.css'

function App() {
  return (
    <main>
      <h1 className='text-center'>Ejercicios React</h1>
      <section className='section-projects'>
        <hr />
        <ColorGenerator />
        <hr />
        <PruebaTecnica />
        <hr />
        <Acordion />
        <hr />
        <StarRating />
      </section>
    </main>
  )
}

export default App
