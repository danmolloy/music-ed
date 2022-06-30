export default function PracticeForm() {
  return (
    <div className="practice-form">
        <div className="radio-div">
          <input type="checkbox" id="ascending-check"/>
          <label htmlFor="ascending-check" className="radio-label">Ascending</label>
        </div>
        <div className="radio-div">
          <input type="checkbox" id="descending-check"/>
          <label htmlFor="descending-check" className="radio-label">Descending</label>
        </div>
        <div className="radio-div">
          <input type="checkbox" id="mi2-check"/>
          <label htmlFor="mi2-check" className="radio-label">mi 2</label>
        </div>
        <div className="radio-div">
          <input type="checkbox" id="maj2-check"/>
          <label htmlFor="maj2-check" className="radio-label">Maj 2</label>
        </div>
        <div className="radio-div">
          <input type="checkbox" id="mi3-check"/>
          <label htmlFor="mi3-check" className="radio-label">mi 3</label>
        </div>
        <div className="radio-div">
          <input type="checkbox" id="maj3-check"/>
          <label htmlFor="maj3-check" className="radio-label">Maj 3</label>
        </div>
      </div>
  )
}