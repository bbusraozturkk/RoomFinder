import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail,FaHiking,FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {

    state = {
    services: [
    {
        icon:<FaCocktail/>,
        title:"free coctails",
        info:'Enjoy unlimited delicious cocktails and make your night unforgettable! Colorful drinks, music, and a great atmosphere await you. Cheers!'
    },
    {
        icon:<FaHiking/>,
        title:"Endless Hiking",
        info:'Embark on an exhilarating hiking adventure! Explore breathtaking trails, connect with nature, breathe fresh air, and rejuvenate your mind and body.'
    },
    {
        icon:<FaShuttleVan/>,
        title:"free shuttle",
        info:'Take advantage of our free shuttle service! Convenient, reliable, and comfortable transportation to get you where you need to go effortlessly'
    },
    {
        icon:<FaBeer/>,
        title:"strongest beer",
        info:'Discover the strongest beer available! Packed with intense flavors and a high alcohol content, its perfect for adventurous beer enthusiasts. Cheers!'
    }

    ]
    }

  render() {
    return (
      <section className='services'>
        <Title title="services"/>
        <div className='services-center'>
            {this.state.services.map((item,index)=>{
                return(
                    <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                )
            })}
        </div>
      </section>
    )
  }
}
