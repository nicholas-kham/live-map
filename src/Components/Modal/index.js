/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "./index.css";

const Model = ({ visible, onOkClick, onCancelClick }) => {
  const [objType, setObjType] = useState("pol");
  const [unitSize, setUnitSize] = useState("1-10");
  const [message, setMessage] = useState("");

  return (
    <div id="myModal" className={`modal ${visible ? "visible" : "hide"}`}>
      <div className="modal-content">
        <span className="close" onClick={() => onCancelClick()}>
          &times;
        </span>
        <br className="clear" />
        <div className="flex">
          <p style={{ fontWeight: "bold" }}>တွေ့ရှိသော &nbsp;အရာ</p>
          <select
            onChange={(e) => {
              setObjType(e.target.value);
            }}
            defaultValue ='pol'
          >
            <option value="pol">ရဲ / လုံထိန်း</option>
            <option value="resc">ဆေးရုံဆေးခန်း</option>
            <option value="milt">စစ်တပ်</option>
            <option value="bearer">အတားအဆီး</option>
          </select>
        </div>
        {(objType === "pol" || objType === "milt") && (
          <div className="flex">
            <p style={{ fontWeight: "bold" }}>တပ်ဖွဲ့ဝင် အင်အား</p>
            <select
              onChange={(e) => {
                setUnitSize(e.target.value);
              }}
              defaultValue ='1-10'
            >
              <option value="1-10">၁ - ၁၀ ခန့် </option>
              <option value="10-20">၁၀ - ၂၀ခန့် </option>
              <option value="20-50"> ၂၀ - ၅၀ ခန့်</option>
              <option value="50-100">၅၀ - ၁၀၀ခန့်</option>
              <option value="100-200">၁၀၀ - ၂၀၀ခန့်</option>
              <option value="200-above">၂၀၀ နှင့်အထက်</option>
            </select>
          </div>
        )}
        <div className="flex">
          <p style={{ fontWeight: "bold" }}>ပြောလိုသော အရာ</p>
          <textarea placeholder="အသေးစိတ်များ ဖြည့်စွက်ရေးရန်"
            cols="20"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex">
          <button
            onClick={() => {
              onOkClick({ objType, message, unitSize });
            }}
            style={{ backgroundColor: "rgb(48, 133, 214)", color: "white" }}
          >
            Report (တင်မည်)
          </button>
        </div>
        <div className="flex">
          <button onClick={() => onCancelClick()}
            style={{ backgroundColor: " rgb(221, 51, 51)", color: "white" }}
          >
            Cancel (ထွက်မည်)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
