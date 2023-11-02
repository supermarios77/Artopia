import { useState } from "react";
import "./Art.css";
import { CirclePicker, SketchPicker } from "react-color";
import DrawingPanel from "./DrawingPanel";

export default function Art() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#f44336");
  const [showColorPicker, setShowColorPicker] = useState(false);


  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  }

  function changeColor(color) {
    setColor(color.hex);
  }
  

  function fillBucket() {
    const allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach((pixel) => {
      pixel.style.backgroundColor = selectedColor;
    });
  }
  

  return (
    <main>
      <div id="editor">
        <h1>Pixel Editor</h1>
        {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
        {hideDrawingPanel && (
          <div id="options">
            <div className="option">
              <input
                type="number"
                className="panelInput"
                defaultValue={panelWidth}
                onChange={(e) => {
                  setPanelWidth(e.target.value);
                }}
              />
              <span>Width</span>
            </div>
            <div className="option">
              <input
                type="number"
                className="panelInput"
                defaultValue={panelHeight}
                onChange={(e) => {
                  setPanelHeight(e.target.value);
                }}
              />
              <span>Height</span>
            </div>
          </div>
        )}

        <button onClick={initializeDrawingPanel} className="button">
          {buttonText}
        </button>

       <div className="tools">

        {hideOptions && (
          <button onClick={fillBucket} className="button1">
            <i className="fa-solid fa-fill" id="icon"></i>
          </button>
        )}

        {hideOptions && (
          <button onClick={() => setShowColorPicker(!showColorPicker)} className="button1">
          <i className="fa-solid fa-palette" id="icon"></i>
        </button>
        )}

       </div>

        {hideOptions && showColorPicker && (
          <div className="sketch-picker">
          <SketchPicker
            color={selectedColor}
            onChangeComplete={changeColor}
            disableHex
            className="sketch"
          />
          </div>
        )}


        {hideOptions && (
          <div className={`circle-picker ${showColorPicker ? 'hide-picker' : ''}`}>
          <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
        </div>        
        )}

        {hideOptions && (
          <DrawingPanel
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
          />
        )}
      </div>
    </main>
  );
}