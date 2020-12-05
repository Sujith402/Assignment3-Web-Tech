import React, { Component } from 'react'
import {FaArrowRight} from 'react-icons/fa'
import Card from './card'

export default class Body extends Component {
  render() {
    const element = {
      category: 'Labrador',
      age: 3,
      description: 'Random lines from god knows what. Make sense of it is what I mean',
      url:'#'
    }
    return (
      <div id='body'>
        <div className='container'>      
          <h2> <b>Why Adopt?</b></h2>
          <p>
            Adoption is a very powerful way in which you can make a difference to the lives of not just the dog that you will be adopting, but also to other dogs indirectly.
            <ul>
            <li><FaArrowRight className='list-before'/>  When you adopt a dog from our shelter, you give that dog a second chance in life with a loving family. Most of the dogs in our shelters were found abandoned by their previous owners/guardians on busy streets obviously lost, confused and vulnerable from suddenly being torn out of the safety of their former homes.</li>
            <li><FaArrowRight className='list-before'/>  When you adopt a dog, you say NO to an illegal breeder. Backyard breeders are notorious for making the lives of the dogs miserable. They facilitate repeated impregnations of mother dogs, keep them in filthy conditions and when they age, discard them on the streets. You can learn more about this by doing a quick.</li>
            <li><FaArrowRight className='list-before'/>  Finally, when you adopt a dog, you make it possible for us to rescue one more desperately needy dog and give her a second chance in life. We get several calls every single day requesting for rescue and rehabilitation of abandoned dogs or those seized from cruel conditions. However, CUPA shelters have fixed optimal numbers to extend maximum care for attention and rehoming, beyond which it will not accommodate extra animals.</li>
            </ul>
            Therefore, our sincere request is, do not purchase dogs from illegal or uncertified breeders since your purchase encourages them to house dogs for breeding, in the worst and most inhumane conditions imaginable.  If you do not connect with any dog from our shelter, you could approach other shelters in the city, or look for adoption pages on Facebook, or wait. But, once again, no matter what happens, please ADOPT – DON’T SHOP!
          </p>
          <ul className='card-list'>
            <li><Card element={element} /></li>
            <li><Card element={element} /></li>
          </ul>
        </div>
      </div>
    )
  }
}

