import Acordion from './components/Accordion/Acordion'
import ColorGenerator from './components/ColorGenerator/ColorGenerator'
import StarRating from './components/StarRating/StarRating'
import ContactForm from './components/ValidacionFormularios/ContactForm'
import './index.css'

function App() {
  return (
    <main>
      <h1 className='text-center'>Ejercicios React</h1>
      <section className='section-projects'>
        <ContactForm />
        <hr />
        <Acordion />
        <hr />
        <ColorGenerator />
        <hr />
        <StarRating />
      </section>
    </main>
  )
}

export default App
