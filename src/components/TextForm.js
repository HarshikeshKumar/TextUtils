import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
            }}
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary"
        >
          Convert to Uppercase
        </button>{" "}
        <button
          type="button"
          onClick={handleLwClick}
          className="btn btn-primary"
        >
          Convert to LowerCase
        </button>{" "}
        <button
          type="button"
          onClick={handleClearClick}
          className="btn btn-success"
        >
          Clear Text
        </button>{" "}
        <button type="button" onClick={handleCopy} className="btn btn-primary">
          Copy Text
        </button>{" "}
        <button
          type="button"
          onClick={handleExtraSpaces}
          className="btn btn-primary"
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          <b>{text.split(" ").length} </b> words, <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes read
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
