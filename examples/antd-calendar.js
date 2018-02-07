/* eslint react/no-multi-comp:0, no-console:0 */
import React from 'react';
import ReactDOM from 'react-dom';

import TbCalendar from "../src/TbCalendar";
import moment from 'moment';

class Demo extends React.Component{
  constructor()
  {
    super();
    this.state = {value:""}
  }
  handleChange(v) { this.setState({ value: v }) }
   disabledDate(current) {
    if(!current)
    {
      return false;
    }
    const date = moment();
    date.hour(0);
    date.minute(0);
    date.second(0);
    return current.isBefore(date);  // can not select days before today
  }

  disabledTime(timePosion,value)
  {
    return [()=>{return true},()=>{return true},()=>{return true}];
  }



  render(){
    return ( <TbCalendar disabled={false}
                         onChange={(v)=>{this.handleChange(v)}}
                         value={this.state.value}
                         format="YYYY-MM-DD HH:mm:ss"
                         disabledDate={this.disabledDate}
                         disabledTime={this.disabledTime}

      />

    );
  }

}


ReactDOM.render(<Demo />, document.getElementById('__react-content'));
