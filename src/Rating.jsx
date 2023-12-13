import { useState } from "react"
import "./Rating.css"

// eslint-disable-next-line react/prop-types
function RatingDigit({digit, isActive, whenClicked}) {
    const [isHoverState, setIsHoverState] = useState(false)

    let styles;

    const handleHover = () => setIsHoverState(true) 
    const endHover = () => setIsHoverState(false) 

    if (isActive) {
        styles = {"backgroundColor": "hsl(216, 12%, 54%)"}
    } else if (!isActive && isHoverState) {
        styles = {"backgroundColor": "hsl(25, 97%, 53%)"}
    } else {
        styles = {"backgroundColor": "hsl(213, 19%, 25%)"}
    }

    return (<button 
        style={styles} 
        onClick={whenClicked} 
        onMouseEnter={handleHover} 
        onMouseLeave={endHover} 
        className="rating-btn">{digit}</button>)
}

// eslint-disable-next-line react/prop-types
export default function Rating({onScoreSelect}) {
    const [activeIndex, setActiveIndex] = useState(0); 

    return (
        <div className="rating-options">
            <RatingDigit digit={1} 
            isActive={activeIndex === 1} 
            whenClicked={() => {
                setActiveIndex(1)
                onScoreSelect(1)
                }} />

            <RatingDigit digit={2} 
            isActive={activeIndex === 2} 
            whenClicked={() => {
                setActiveIndex(2)
                onScoreSelect(2)
                }} />

            <RatingDigit digit={3} 
            isActive={activeIndex === 3} 
            whenClicked={() => {
                setActiveIndex(3)
                onScoreSelect(3)
                }} />

            <RatingDigit digit={4} 
            isActive={activeIndex === 4} 
            whenClicked={() => {
                setActiveIndex(4)
                onScoreSelect(4)
                }} />

            <RatingDigit digit={5} 
            isActive={activeIndex === 5} 
            whenClicked={() => {
                setActiveIndex(5)
                onScoreSelect(5)
                }} />   
        </div>
    )
}