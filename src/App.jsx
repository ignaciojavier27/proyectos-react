import Acordion from './components/Accordion/Acordion'
import Carousel from './components/Carousel/Carousel'
import ColorGenerator from './components/ColorGenerator/ColorGenerator'
import LoadMoreData from './components/LoadMoreData/LoadMoreData'
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'
// import PruebaTecnica from './components/Prueba_Tecnica/PruebaTecnica'
import StarRating from './components/StarRating/StarRating'
import TabsTest from './components/Tabs/TabsTest'
import './index.css'

function App() {
  return (
    <main>
      <h1 className='text-center'>Ejercicios React</h1>
      <section className='section-projects'>
        <hr />
        {/*<LoadMoreData />*/}
        <TabsTest />
        <hr />
        <ScrollIndicator url="https://dummyjson.com/products?limit=10"/>
        <hr />
        <Carousel />
        <hr />
        <StarRating />
        <hr />
        <ColorGenerator />
        <hr />
        {/* <PruebaTecnica /> */}
        <hr />
        <Acordion />
      </section>
    </main>
  )
}

export default App
