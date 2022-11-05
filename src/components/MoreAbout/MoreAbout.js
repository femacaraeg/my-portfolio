import { moreAbout } from '../../portfolio'
import './MoreAbout.css'

const MoreAbout = () => {
  const { description1, description2, description3 } = moreAbout
  return (
    <section id='moreAbout' className='section projects'>
      <h2 className='section__title'>A bit about me</h2>

      <p className='moreAbout__p'>{description1}</p>
      <p className='moreAbout__p'>{description2}</p>
      <p>{description3}</p>
    </section>
  )
}

export default MoreAbout
