import React from "react";

// functional components
const Form = () => {
  return (
    <div>
      <p>and there was a form!</p>
      <form>
        <input type="text" className="new-task"></input>
        {/* <input type="submit">Add</input> */}
        <button>add</button>
      </form>
    </div>
  );
};

export default Form;
