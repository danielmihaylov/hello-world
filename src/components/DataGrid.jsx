import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from "../state/dataSlice"
import DataRow from "./DataRow"

const DataGrid = () => {
  const { value, isLoading } = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className="mt-4">
      {
        isLoading
          ? (<div>Loading...</div>)
          : (<>
            {value && value.map((entity) => {
              const { id, name, description, tagline } = entity;
              return <DataRow
                key={id}
                name={name}
                tagline={tagline}
                description={description}
              />
            })}
          </>)
      }

    </div>
  )
}

export default DataGrid