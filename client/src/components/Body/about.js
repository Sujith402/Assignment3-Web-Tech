import React from 'react'
import bg_img from '../../imgs/About_us.jpg'

export default function About() {
  return (
    <div id='About' style={{backgroundColor:'#4B61D1'}}>
      <img src={bg_img} className='background-image'></img>
      <div style={{padding:'10px'}}>
        <h3>Welcome to Compassion Unlimited Plus Action!</h3>
        <h4>This is our story…</h4>
        Welcome to Compassion Unlimited Plus Action!
        Our Story
        <p>Compassion Unlimited Plus Action (CUPA) is a non-profit, non-government organization setup in 1991 by Miss Crystal Rogers, a British woman who wrapped up a life in England to start a first-ever shelter in the region that would take in suffering animals and provide a safe space for healing and happiness.
        Thanks to animal lovers, donors, supporters and well-wishers, CUPA has grown from a bedroom in a Crystal’s house to a network of 6 centres across the vast city of Bangalore.
        CUPA now runs five independent shelters across Bangalore. Each of our facilities addresses a critical aspect of animal welfare – Animal Birth Control, Trauma & Rescue, Adoption & Foster, Geriatric Care, Large Animal Rehabilitation, a fully-equipped Pet Care Clinic and further activities such as pet cruelty inspections, advocacy for animal rights, awareness sessions with schools, colleges and corporations and so on.
        </p>
        <h5>The Wildlife Rescue and Rehabilitation Centre</h5>
        <p>
        To fill the gaping need for distinct rescue and rehabilitation for urban and indigenous wildlife, the trustees of CUPA setup its sister organisation, the Wildlife Rescue and Rehabilitation Centre (WRRC) with the objective of offering native wildlife – most commonly snakes, birds and monkeys – a space for rest and recuperation after injury due to displacement or disorientation which in turn is a result of our unplanned and often haphazard attempts at urbanization.
        WRRC has also followed the lives of thousands of captive elephants across the country and documented their plight to reveal highly inadequate and compromised conditions they endure every day in their artificial environments where they are used for religious, tourism or entertainment purposes. WRRC also started the Elephant Care Facility (ECF) in Malur, Karnataka a lifelong care facility for two female, formerly abused captive elephants, and an ECF in Marakkanam, Tamil Nadu which is home to 3 elephants formerly used for entertainment.
        </p>
        For more information, visit <a href='https://wrrcindia.org' style={{color:'#002244'}}>wrrcindia.org</a>.
        With the help of the staff members and sister organisation CUPA, WRRC aims at saving and protecting a lot more creatures of the wild in the future.
        <ul><h4>Our Certifications</h4>
          <li>CUPA is registered as a Charitable Trust under Religious and Charitable Endowments.</li>
          <li>CUPA is granted exemption of Income Tax under Section 80G for all donations and has been given permission to accept foreign contributions under the Foreign Contributions Regulations Act (FCRA)</li>
          <li>CUPA is also registered with the Animal Welfare Board of India (AWBI), Ministry of Environment, Forest and Climate Change (MoEF & CC)</li>
        </ul>
      </div>
    </div>
  )
}
