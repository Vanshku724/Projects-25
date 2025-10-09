import { useState } from "react";
import data from "./data";
import "./styles.css";
export default function Accordian() {
  const [multiple, setMultiple] = useState([]);
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setSelected(selected === getCurrentId ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
  const cpymultiple = [...multiple];
  const index = cpymultiple.indexOf(getCurrentId);
  console.log(index)

  if (index === -1) {
  
    cpymultiple.push(getCurrentId);
  } else {

    cpymultiple.splice(index, 1);
  }

  setMultiple(cpymultiple);
}

  

  console.log(selected,multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ?
                multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="content">{dataItem.answer}</div>
                )
                : selected === dataItem.id && (
                  <div className="content">{dataItem.answer}</div>
                )
                
              }
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
