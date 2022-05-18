//import { SearchLocation } from '@components/SearchLocation/SearchLocation'
import { Product } from '@components/Product/Product'
import { ProductList } from '../containers/ProductList'
import type { NextPage } from 'next'
import { useEffect, useReducer, useState } from 'react' 
//ESTADO INICIAL


const Home: NextPage = () => {
  const [product, setProduct] = useState([])
  //const [state, dispatch] = useReducer(reducerShop, initialState)
  useEffect(() => {
		window
      .fetch('/api/product')
      .then((response) => response.json())
      .then(({data}) => {
        setProduct(data);
      })
  }, [])
  console.log(product);
  const popularArray = product.filter(item => item.descuento === null)
  const ofertasArray = product.filter(item => item.descuento !== null)
  return (
    <main>
      <ProductList title={'Los más populares'}>
        {popularArray.map((item)=>(
          <Product name={item.name} descuento={item.descuento} price={item.priceOriginal} image={item.image}/>
        ))}
      </ProductList>
    </main>
  )
}

export default Home
