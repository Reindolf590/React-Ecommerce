import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offers in your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='news'>
            <input type='email' placeholder='Your Email id'></input>
            <button>Subscribe now</button>
        </div>
      
    </div>
  )
}

export default Newsletter
