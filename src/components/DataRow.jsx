import React from "react"
import PropTypes from 'prop-types'

const DataRow = ({ name, tagline, description }) => {
  return (
    <div className="row border border-primary m-2 rounded-1">
      <div>
        <h2>{name}</h2>
      </div>
      <div><strong>Category:</strong> {tagline}</div>
      <div>
        <div><strong>Description:</strong></div>
        <p>{description}</p>
      </div>
    </div>
  )
}

DataRow.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default DataRow
