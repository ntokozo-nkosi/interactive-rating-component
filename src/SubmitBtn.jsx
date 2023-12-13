import "./SubmitBtn.css"

// eslint-disable-next-line react/prop-types
export default function SubmitBtn({onSubmit}) {
    return <button onClick={onSubmit} className="submit">Submit</button>
}