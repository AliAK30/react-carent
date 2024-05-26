import React from 'react';
import './page.css'
import wlogo from '../assets/white-logo.png'
import blogo from '../assets/black-logo.png'


export default function Page() {
  return (
    <div className='main-container'>
      <div className='navigation'>
      
          <img className="c-rent" src={wlogo}/>
        
        <div className='items'>
          <div className='search-bar'>
            <div className='content'>
              <div className='magnifying-glass'>
                <div className='magnifying-glass-1' />
              </div>
              <span className='placeholder-label'>Search</span>
              <div className='close'>
                <div className='icon' />
              </div>
            </div>
            <input className='search-bar-input' />
          </div>
          <div className='button'>
            <div className='customer' />
          </div>
          <span className='account'>Account</span>
        </div>
        <div className='items-2'>
          <span className='about'>ABOUT</span>
          <span className='add-car'>ADD CAR</span>
          <span className='rent-car'>RENT CAR</span>
          <span className='faq'>FAQ</span>
          <span className='contact-us'>CONTACT US</span>
        </div>
      </div>
      <div className='sec'>
        <div className='frame'>
          <span className='explore-ways-save'>
            EXPLORE ALL THE WAYS YOU CAN SAVE
          </span>
          <button className='button-3'>
            <span className='search-cars'>SEARCH CARS</span>
          </button>
        </div>
      </div>
      <div className='sec-4'>
        <div className='frame-5'>
          <span className='subscribe-offers'>Subscribe us for offers</span>
          <span className='enter-email'>Enter your e-mail below</span>
          <div className='frame-6'>
            <div className='search-bar-7' />
            <button className='button-8'>
              <span className='subscribe'>Subscribe</span>
            </button>
          </div>
        </div>
        <div className='pexels-photo' />
      </div>
      <div className='sec-9'>
        <div className='frame-a'>
          <span className='quality-cars'>
            Pakistan’s largest fleet of Quality Cars
          </span>
        </div>
      </div>
      <div className='cards'>
        <div className='customer-quote'>
          <span className='passenger-car'>Passenger Car</span>
          <span className='description'>description</span>
          <span className='read-more'>Read More</span>
          <div className='images' />
        </div>
        <div className='customer-quote-b'>
          <span className='passenger-car-c'>Passenger Car</span>
          <span className='description-d'>description</span>
          <span className='read-more-e'>Read More</span>
          <div className='images-f' />
        </div>
        <div className='customer-quote-10'>
          <span className='passenger-car-11'>Passenger Car</span>
          <span className='description-12'>description</span>
          <span className='read-more-13'>Read More</span>
          <div className='images-14' />
        </div>
        <div className='customer-quote-15'>
          <span className='passenger-car-16'>Passenger Car</span>
          <span className='description-17'>description</span>
          <span className='read-more-18'>Read More</span>
          <div className='images-19' />
        </div>
      </div>
      <div className='navigation-footer'>
        <div className='divider' />
          
          <img className="c-rent-1b" src={blogo}/>

      </div>
      <div className='sec-1f'>
        <div className='frame-20'>
          <span className='easy-renting'>
            RENTING A CAR HADNEVER BEEN THIS EASY
          </span>
          <button className='button-21'>
            <span className='rent-now'>RENT NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
}
