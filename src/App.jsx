import './App.css'
import SubmitBtn from './SubmitBtn'
import Rating from './Rating'
import { useState } from 'react'

function App() {
  const [ratingScore, setRatingScore] = useState("")
  const [isFormSubmmitted, setIsFormSubmmitted] = useState(false)

  const updateRating = (newRating) => {
    setRatingScore(newRating)
  }

  const validateSubmission = () => {
    if (ratingScore != ""){
      setIsFormSubmmitted(true)
    } 
  }
  
  return (
    <div className='main'>
        <div className='card'>
          {!isFormSubmmitted ?
          (<>
            <div className='icon-container'>
              <img src="icon-star.svg" alt="" />
            </div>
            <h2 className='card-title'>How did we do?</h2>
            <p className='card-description'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <Rating onScoreSelect={updateRating}></Rating>
            <SubmitBtn onSubmit={validateSubmission}></SubmitBtn>
            </>): 
          (<>
            <div className='container'>
              <img src="illustration-thank-you.svg" alt="" />
              <p>You selected {ratingScore} out of 5</p> 
            </div>
            <h2 className='card-title centered'>Thank you!</h2>
            <p className='card-description centered'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
          </>)}
        </div>
        <p style={{"margin":"100px 20px 0px 20px"}}>Challange by <a href="https://www.frontendmentor.io/challenges/">Frontend Mentor</a>, Coded by Ntokozo Nkosi </p>
    </div>
  )
}

export default App
