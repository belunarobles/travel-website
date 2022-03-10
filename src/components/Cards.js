import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem 
                src='https://1.bp.blogspot.com/-8ggZGHvKVtg/XzDKZ9qdo-I/AAAAAAAAAAM/86-vzWHl4H8CtBNrM2DJCnqee32RmrNZwCLcBGAsYHQ/s2048/travel%2Binsurance.jpg'
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label='Adventure'
                path='/Services'
              />
              <CardItem 
                src='https://www.kilroy.dk/media/15880/thailand-ao-nang-islands.jpg?width=800&heightratio=0&mode=crop&quality=70&center=0.5,0.5'
                text="Travel through the Islands of Bali in a Private Cruise"
                label='Luxury'
                path='/Services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem 
                src='https://s3-eu-west-1.amazonaws.com/oceanographic/wp-content/uploads/2019/10/24101431/eu-ocean-pledge.jpg'
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label='Mistery'
                path='/Services'
              />
              <CardItem 
                src='https://i.pinimg.com/originals/9a/4f/47/9a4f474ed7676fc6360c5274b96ab8a2.jpg'
                text="Experience Football on Top of the Himilayan Mountains"
                label='Adventure'
                path='/Services'
              />
              <CardItem 
                src='https://static.wixstatic.com/media/e60273_7a6c94db8e7e45d68593d43765919f11~mv2.jpg/v1/fill/w_980,h_490,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/e60273_7a6c94db8e7e45d68593d43765919f11~mv2.jpg'
                text="Ride through the Sahara Desert on a guided camel tour"
                label='Adrenaline'
                path='/Services'
              />
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Cards;