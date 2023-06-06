import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { updateMessage } from "../state/messageSlice"

const InputBar = () => {
  const [inputText, setInputText] = useState('Hello World!')

  const message = useSelector((state) => state.message.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateMessage(inputText))
  }, [])

  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  const handleClick = () => {
    dispatch(updateMessage(inputText))
  }

  return (
    <div className="align-items-sm-center m-2">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter message"
          aria-label="Enter message"
          aria-describedby="basic-addon2"
          value={inputText}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleClick}
          >
            Update message
          </button>
        </div>
      </div>
      <div>
        <h2>Message: {message}</h2>
      </div>
    </div>
  )
}

export default InputBar