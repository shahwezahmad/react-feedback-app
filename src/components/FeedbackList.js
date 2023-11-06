import FeedbackItem from "./feedbackItem"

const FeedbackList = ({feedback,handleDelete}) => {
    if(!feedback || feedback.length === 0 ) return <>No feedback</>
    return (
        <>
           {
            feedback.map((item) => (
                <FeedbackItem key={item.id} item ={item} handleDelete={handleDelete}  />
            ))
           }
        
        </>
    )
}

export default FeedbackList