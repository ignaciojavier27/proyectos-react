import Acordion from './components/Accordion/Acordion'
import ColorGenerator from './components/ColorGenerator/ColorGenerator'
import SelectAnidado from './components/SelectAnidado/SelectAnidado'
import StarRating from './components/StarRating/StarRating'
import './index.css'

function App() {
  return (
    <main>
      <h1 className='text-center'>Ejercicios React</h1>
      <section className='section-projects'>
        <Acordion />
        <hr />
        <SelectAnidado />
        <hr />
        <ColorGenerator />
        <hr />
        <StarRating />
      </section>
    </main>
  )
}

export default App
