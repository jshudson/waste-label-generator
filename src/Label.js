import React from 'react';
import './Label.css';
import HazardousLabel from './HazardousLabel';
export default function Label(props) {
  return (
    props.labelData.map((labelData, i) => {
      return (
        <HazardousLabel labelData={labelData} />
      )
    }
    )
  )
}