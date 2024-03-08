import React, { useEffect, useRef, useState } from "react";
import { getTime } from "../utils/timer";
import { generateUniqueId } from "../utils/general";

const StopWatch = () => {
  const uniqueId = generateUniqueId();

  const [Id] = useState({
    actionButtons: "action-buttons-" + uniqueId,
    play: "play-" + uniqueId,
    pause: "pause-" + uniqueId,
    reset: "reset-" + uniqueId,
    resume: "resume-" + uniqueId
  });

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [status, setStatus] = useState(StopWatchStatus.notStarted);
  const intervalId = useRef(null);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.getElementById(Id.actionButtons)
      .addEventListener("click", handleActionButton);
  }
  const removeEventListeners = () => {
    document.getElementById(Id.actionButtons)
      .removeEventListener("click", handleActionButton);
  }

  const handleActionButton = (event) => {
    event.preventDefault();
    const { id } = event.target;
    clearStopWatchInterval();

    switch(id) {
      case Id.pause:
        pauseTimer();
        break;
      case Id.play:
        startTimer();
        break;
      case Id.reset:
        resetTimer();
        break;
      case Id.resume:
        resumeTimer();
        break;
    }
  }

  function pauseTimer() {
    setStatus(StopWatchStatus.paused);
  }

  function startTimer() {
    const intervalId = createNewInterval();

    setIntervalId(intervalId);
    setStatus(StopWatchStatus.running);
  }

  function resetTimer() {
    setTimeElapsed(0);
    setStatus(StopWatchStatus.notStarted);
  }

  function resumeTimer() {
    setStatus(StopWatchStatus.running);
    const intervalId = createNewInterval();
    setIntervalId(intervalId);
    setStatus(StopWatchStatus.running);
  }

  function clearStopWatchInterval() {
    if(intervalId.current !== null) {
      clearInterval(intervalId.current);
    }
  }

  function setIntervalId(newId) {
    intervalId.current = newId;
  }

  function createNewInterval() {
    return setInterval(() => {
      setTimeElapsed(timeElapsed => timeElapsed + SMALLEST_TIME_UNIT);
    }, SMALLEST_TIME_UNIT);
  }

  return (
    <div>
      <RenderTime timeElapsed={timeElapsed} />
      <div id={Id.actionButtons}>
        <ActionButtons status={status} Id={Id} />
      </div>
    </div>
  )
}

export default StopWatch;

/**
 * ================== Constants ======================
 */
const StopWatchStatus = {
  notStarted: "not-started",
  running: "running",
  paused: "paused",
}

const SMALLEST_TIME_UNIT = 10;


const ActionButtons = ({ status, Id }) => {
  const { title, id } = getActionButtonDetails(status, Id);

  return (
    <div>
      <button id={id}> {title} </button>
      <button id={Id.reset}> Reset </button>
    </div>
  )
}

const RenderTime = ({timeElapsed}) => {
  const { hours, minutes, seconds, milliseconds } = getTime(timeElapsed);

  return (
    <div className="time"> 
      {hours} : {minutes} : {seconds} : {milliseconds} 
    </div>
  )
}

const getActionButtonDetails = (status, Id) => {
  let title, id;
  if(status === StopWatchStatus.notStarted) {
    id = Id.play;
    title = "Start";
  } else if(status === StopWatchStatus.running) {
    id = Id.pause;
    title = "Pause";
  } else {
    id = Id.resume;
    title = "Resume"
  }

  return { id, title };
}