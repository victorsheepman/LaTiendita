//import { SearchLocation } from '@components/SearchLocation/SearchLocation'
import { Product } from '@components/Product/Product'
import { ProductList } from '../containers/ProductList'

import { useContext, useEffect} from 'react' 
import { Actions } from 'reducer/actions'
import { Hero } from '../components/Hero/Hero'
import { Header } from '@containers/Header/Header'

import { AppContext } from 'Context/LocationContext'
 


//ESTADO INICIAL
const Home  = () => {
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
       // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [])




  useEffect(() => {
		if(alert){
      setTimeout(() => {
        setAlert({
          ...alert,
          succes:false,
          error:false
        })
      }, 2000);
    }
    
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert])
  const {offer, popular} = state;
  
  
  return (
    <>
    <Header />
    <main>
      {alert.succes &&
        <div
          className='alert'
        >
         <p className='body-2-regular'>Producto añadido</p>  
        </div>
      }
      {alert.error &&
        <div
          className='alert--error'
        >
         <p className='body-2-regular'>El producto ya esta en el carrito</p>  
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
