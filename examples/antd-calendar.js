/* eslint react/no-multi-comp:0, no-console:0 */
import React from 'react';
import ReactDOM from 'react-dom';

import TbCalendar from "../src/TbCalendar";


class InputControlES5 extends React.Component{
  constructor()
  {
    super();
    this.state = {value:"2017-12-29 20:54"}
  }
  handleChange(v) { this.setState({ value: v }) }

  render(){
    return ( <TbCalendar disabled={false}
                         onChange={(v)=>{this.handleChange(v)}}
                         value={this.state.value}
                         format="YYYY-MM-DD HH:mm"/>

    );
  }

}


ReactDOM.render(<InputControlES5 />, document.getElementById('__react-content'));
