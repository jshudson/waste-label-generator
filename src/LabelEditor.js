import React from 'react';
import './LabelEditor.css';
import Labels from './Labels';
export default class LabelEditor extends React.Component {
  render() {
    return (
      <div className='all-labels'>
        <div className='label-page'>
          <Labels data={Array(10).fill(1)} />
        </div>
      </div>
    )
  }
}