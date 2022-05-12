import React from 'react';
import './Label.css';
import HazardousLabel from './HazardousLabel';
export default function Label(props) {
  return (
    <HazardousLabel labelData={props.labelData} />
  )
}