import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Hotele Management</h3>
            <small className='text-light'>Hotele Management using react</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shehryarjaved/hotelemanagement--hakaton" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Ecommmerce website</h3>
            <small className='text-light'>HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shehryarjaved/LiveProject" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        {/* <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>My Resume</h3>
            <small className='text-light'>HTML | CSS | JS | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thakshila-Bandara/my-resume" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://thakshila-bandara.github.io/my-resume/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div> */}
{/*             
        </article> */}
      </div>
    </section>
  )
}

export default Myprojects