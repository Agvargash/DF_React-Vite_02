import CardPizza from './CardPizza'
import Header from './Header'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className='Home'>
      <Header></Header>
      <div className='Products'>
      <CardPizza
      img="https://mandolina.co/wp-content/uploads/2023/08/pizza-napolitana-1080x550-1.png"
      name="Pizza Napolitana"
      ingredients="🍕 Mozarella, Tomate, Jamón, Orégano"
      price="$5.950"
      ></CardPizza>

      <CardPizza
      img="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-y-verduras-1080x671.jpg"
      name="Pizza Española"
      ingredients="🍕 Mozzarella, Gorgonzola, Parmesano, Provolone"
      price="$6.950"
      ></CardPizza>

      <CardPizza
      img="https://thumbs.dreamstime.com/b/pizza-pepperoni-es-una-de-reci%C3%A9n-hecha-con-salchichas-y-queso-costra-poco-saludable-pero-deliciosa-popular-variedad-pizzas-273757237.jpg"
      name="Pizza Pepperoni"
      ingredients="🍕 Mozzarella, Pepperoni, Orégano"
      price="$6.950"
      ></CardPizza>
      </div>
      </div>
  )
}
