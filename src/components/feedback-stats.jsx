const FeedbackStats = ({ feedback }) => {
  let avg =
    feedback.reduce((acc, item) => {
      return acc + item.rating;
    }, 0) / feedback.length;
  avg = avg.toFixed(2);
  return (
    <div className="feedback-stats">
      <h4> {feedback.length} Reviews </h4>
      <h4> Average Rating {isNaN(avg) ? 0 : avg} </h4>
    </div>
  );
};
export default FeedbackStats;
