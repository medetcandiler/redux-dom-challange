'use client'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter, setPaused, setLikes } from "../redux/features/counterSlice";
import { Duru_Sans } from "next/font/google";

function Counter() {
  const counter = useSelector(state => state.counter.counterValue);
  const isPaused = useSelector(state => state.counter.isPaused);
  const likes = useSelector(state => state.counter.likes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        dispatch(incrementCounter());
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [isPaused])

  const handleIncrement = () => {
    dispatch(incrementCounter())
  }
  const handleDecrement = () => {
    dispatch(decrementCounter())
  }
  const handlePause = () => {
    dispatch(setPaused())
  }
  const handleLikes = () => {
    dispatch(setLikes({ counterValue: counter }))
  };

  console.log(likes)


  return (
    <>
      <div className="text-center text-3xl font-semibold">
        {counter}
      </div>
      <div className="flex space-x-3">
        <button onClick={handleDecrement} className={`button ${isPaused && `opacity-60`}`} disabled={isPaused}>-</button>
        <button onClick={handleIncrement} className={`button ${isPaused && `opacity-60`}`} disabled={isPaused}>+</button>
        <button onClick={handleLikes} className={`button ${isPaused && `opacity-60`}`} disabled={isPaused}>❤️</button>
        <button onClick={handlePause} className="button">⏯</button>
      </div>
      <div className="text-center text-lg">
        {likes.map((like, i) => {
          return (
            <p key={i}>
              {like.counterValue}:{like.count}
            </p>
          )
        })}
      </div>
    </>
  )
}

export default Counter;
