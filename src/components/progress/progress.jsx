import './progress.scss'

const Progress = ({step=5 ,active=0,setActive}) => { 
  return (
    <div className="progress">
      {[...Array(step - 1).keys()].map((i) => (
        <>
          <button
            onClick={() => setActive(i + 1)}
            className="progress-dot"
            style={{ backgroundColor: active - 1 === i ? "#0df155" : "" }}
          >
            {i + 1}
          </button>
          <div
            className="progress-line"
            style={{
              width: `${100 / (step - 1)}%`,
              backgroundColor: active - 1 > i ? "#0df155" : "",
            }}
          ></div>
        </>
      ))}
      <button
        onClick={() => setActive(step)}
        className="progress-dot"
        style={{ backgroundColor: active  === step ? "#0df155" : "" }}
      >
        {step}
      </button>
    </div>
  );
}

export default Progress