import React from 'react';
import './LabelEditor.css';
import Label from './Label';
export default class LabelEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelData: [
        {
          hazardous: true,
          generator: 'J. Hudson',
          identifier: 'JH0512A',
          description: 'Lorem ipsum dolor est ni',
          wasteCodes: 'D001 D002 D003',
        }
      ]
    }
  }
  render() {
    return (
      <div className='all-pages'>
        <div className='label-page'>
          <Label labelData={this.state.labelData} />
        </div>
      </div>
    )
  }
}