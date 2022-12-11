//import { SearchLocation } from '@components/SearchLocation/SearchLocation'
import { Product } from '@components/Product/Product'
import { ProductList } from '../containers/ProductList'
import type { NextPage } from 'next'
import { useContext, useEffect, useReducer, useState} from 'react' 
import { reducerShop } from 'reducer/reducer'
import { Actions } from 'reducer/actions'
import { Hero } from '../components/Hero/Hero'
import { Header } from '@containers/Header/Header'

import { AppContext } from 'Context/LocationContext'
import { initialState } from 'reducer/InitialState'
 


//ESTADO INICIAL
const Home: NextPage = () => {
  const { alert, setAlert, state, dispatch} = useContext(AppContext);
  //CICLO DE VIDA
  useEffect(() => {
		window
      .fetch('/api/product')
      .then((response) => response.json())
      .then(({data}) => {
        dispatch ({
          type:Actions.addToState,
          payload: data
        })
      })    
  }, [])




  useEffect(() => {
		if(alert){
      setTimeout(() => {
        setAlert(false)
      }, 2000);
    }
    
    
  }, [alert])
  const {offer, popular} = state;
  
  
  return (
    <>
    <Header />
    <main>
      {alert &&
        <div
          className='alert'
        >
         <p className='body-2-regular'>Producto añadido</p>  
        </div>
      }
      <Hero />
     <ProductList  title={'Los más populares'}>
        {popular.map((item)=>(
          <Product key={item.id} id={item.id} name={item.name} descuento={item.descuento} price={item.priceOriginal} image={item.image}/>
        ))}
      </ProductList>
      <ProductList 
        title={'Ofertas'} 
        styles={{
          marginTop:'40px'
        }}  
      >
        {offer.map((item)=>(
          <Product key={item.id}  id={item.id} name={item.name} descuento={item.descuento} price={item.priceOriginal} image={item.image}/>
        ))}
      </ProductList>
      {/* <Prueba />*/}
    </main>
    </>
  )
}

export default Home
