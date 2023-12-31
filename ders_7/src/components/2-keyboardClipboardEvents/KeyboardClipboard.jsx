import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");

  const handleKeydown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode < 57 && e.keyCode > 48) {
      e.preventDefault();
      //RAKAM YAZMAYI ENGELLEMIS OLDUK
    }
    e.keyCode === 13 && setInputValue(""); //short circuit

    if (e.keyCode == 8 || e.keyCode == 46) {
      e.target.style.border = "4px solid yellow";
    }
  };

  const handlePaste = (e) => {
    e.target.style.border = "2px solid red";
    e.target.value += e.clipboardData.getData("text").toUpperCase();
    //getData() ve writeData() ile kullanabılırız
    e.preventDefault();
    //HEM BROWSER'IN HEM BIZIM YAPISTIRMAMIZI ENGELLEMEK ICIN
  };

  const handleCopy = (e) => {
    e.preventDefault();
    //KOPYALAMAYI ENGELLEMEK
  };

  return (
    <div className="container text-center">
      <h1>Clipboard Event</h1>
      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase();
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeydown}
        value={inputValue}
      />

      <p className="text-start mt-4" onCopy={handleCopy}>
        {inputValue}
      </p>
      <textarea
        className="form-control"
        id="area"
        cols="30"
        rows="5"
        onKeyDown={handleKeydown}
        onPaste={handlePaste}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
