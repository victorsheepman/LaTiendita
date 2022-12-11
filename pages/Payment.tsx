import Link from 'next/link'
import React from 'react'

const Payment = () => {

  return (
    <>
      <header className='payment__header'>
        <Link href="/">
          <figure className='canasta__exit'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 6.70711C16.0976 6.31658 16.0976 5.68342 15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071C16.0976 18.3166 16.0976 17.6834 15.7071 17.2929L10.4142 12L15.7071 6.70711Z" fill="#FEFEFE"/>
            </svg>
          </figure>
        </Link>
      </header>
      <section className='payment__container'>
        <div className='test-1'></div>
        <div className='test-2'></div>
      </section>
    </>
  )
}

export default Payment