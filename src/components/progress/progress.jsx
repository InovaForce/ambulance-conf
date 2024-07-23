import styles from "@/components/progress/progress.scss";

const Progress = ({ step = 5, active = 0, setActive }) => {
  return (
    <div className="progress">
      {[...Array(step - 1).keys()].map((i) => (
        <div key={`step-${i + 1}`}> {/* Her eleman grubuna eşsiz bir key propu ekleniyor */}
          <button
            onClick={() => setActive(i + 1)}
            className="progress-dot"
            style={{ backgroundColor: active - 1 === i ? "#ff0606" : "" }}
            id={`progress-dot-${i + 1}`}
          >
            {i + 1}
          </button>
          <div
            className="progress-line"
            style={{
              width: `${100 / (step - 1)}%`,
              backgroundColor: active - 1 > i ? "#0df155" : "",
            }}
            id={`progress-line-${i + 1}`}
          ></div>
        </div>
      ))}
      <button
        onClick={() => setActive(step)}
        className="progress-dot"
        style={{ backgroundColor: active === step ? "#0df155" : "" }}
        id={`progress-dot-${step}`}
      >
        {step}
      </button>
    </div>
  );
}

export default Progress
