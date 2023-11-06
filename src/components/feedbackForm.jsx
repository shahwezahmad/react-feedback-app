import { useState } from "react";
import Card from "../common/Card";
import SelectRating from "./SelectRating";

const FeedbackForm = () => {
  const [message, setMessage] = useState("");
  const handlChange = (e) => {
    if (e.target.value.length < 10) {
      setMessage("message should at least 10 character");
    } else {
      setMessage(() => "");
    }
  };
  return (
    <Card>
      <form>
        <h2>How would you like to rate our services?</h2>
        <SelectRating />
        <div className="input-group">
          <input type="text" onChange={handlChange} />
          <button disabled>send</button>
        </div>
        {message && (
          <p style={{ textAlign: "center", marginTop: "10px" }}> {message} </p>
        )}
      </form>
    </Card>
  );
};

export default FeedbackForm;
