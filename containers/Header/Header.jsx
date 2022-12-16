import React from 'react'
import {Location} from '../../components/Location/Location'
import { ButtonCard } from '../../components/ButtonCard/ButtonCard'
export const Header = () => (
    <header className='header'>
        <h3 className='header__logo'>
            Tiendita
        </h3>
        <div className='header__container'>
            
           
            <Location />
            <ButtonCard />
        </div>
    </header>
  )

