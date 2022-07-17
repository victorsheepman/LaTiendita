//import { SearchLocation } from '@components/SearchLocation/SearchLocation'
import { Product } from '@components/Product/Product'
import { ProductList } from '../containers/ProductList'
import type { NextPage } from 'next'
import { useEffect, useReducer} from 'react' 
import { initialState, reducerShop } from 'reducer/reducer'
import {  addToState } from 'reducer/actions'
//import { Prueba } from '@components/Prueba/Prueba'
//ESTADO INICIAL
const Home: NextPage = () => {
  const [state, dispatch] = useReducer(reducerShop, initialState)
  useEffect(() => {
		window
      .fetch('/api/product')
      .then((response) => response.json())
      .then(({data}) => {
        dispatch ({
          type:addToState,
          payload: data
        })
      })
  },[])
  const {offer, popular} = state;
  //console.log(popular)
  
  return (
    <main>
     <ProductList title={'Los más populares'}>
        {popular.map((item)=>(
          <Product id={item.id} name={item.name} descuento={item.descuento} price={item.priceOriginal} image={item.image}/>
        ))}
      </ProductList>
      <ProductList title={'Ofertas'}>
        {offer.map((item)=>(
          <Product id={item.id} name={item.name} descuento={item.descuento} price={item.priceOriginal} image={item.image}/>
        ))}
      </ProductList>
      {/* <Prueba />*/}
    </main>
  )
}

export default Home
