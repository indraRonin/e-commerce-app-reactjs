import Card from './Card'
import './App.css'

function App() {

  return (
    <div className='card-container'>
      <Card productName="Air Conditioner" productPrice="Rs 29,999" image="./src/assets/airconditioner.png"/>
      <Card productName="Atomic Habits Paperback" productPrice="Rs 349" image="./src/assets/book.png" />
      <Card productName="Web Cam" productPrice="Rs 1,499" image="./src/assets/camera.png" />
      <Card productName="Coffe Mug" productPrice="Rs 599" image="./src/assets/coffeemug.png" />
      <Card productName="Iphone Cover" productPrice="Rs 679" image="./src/assets/cover.png" />
      <Card productName="Gaming Headset" productPrice="Rs 1,849" image="./src/assets/headphone.png" />
      <Card productName="Wired Mouse" productPrice="Rs 699" image="./src/assets/mouse.png" />
      <Card productName="Extended Mousepad" productPrice="Rs 599" image="./src/assets/mousepad.png" />
      <Card productName="Titan Automatic Watch" productPrice="Rs 14,999" image="./src/assets/watch.png" />
    </div>
  )
}

export default App
