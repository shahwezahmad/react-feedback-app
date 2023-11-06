import { useState } from "react"
import Header from "./components/Header"
import FeedbackItem from "./components/feedbackItem"
import { MockData } from "./data/dummyData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/feedback-stats"
import FeedbackForm from "./components/feedbackForm"


const App = () => {
   const[feedback,setFeedback] = useState(MockData)
    const deleteFeedback = (id) => {
        if(window.confirm(`you want to delete this ${id}`)){
            setFeedback(feedback.filter((item) => item.id !== id  ))
        }
    }

    return (
        <>
        <Header />
        <div className="container">
            <FeedbackForm />
            <FeedbackStats feedback={feedback} />
            <FeedbackList  feedback={feedback} handleDelete={deleteFeedback} />

        </div>
        </>
    )
}

export default App