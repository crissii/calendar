/* eslint react/no-multi-comp:0, no-console:0 */
import React from 'react';
import ReactDOM from 'react-dom';

import TbCalendar from "../src/TbCalendar";


class Demo extends React.Component{
  constructor()
  {
    super();
    this.state = {value:"2017-12"}
  }
  handleChange(v) { this.setState({ value: v }) }

  render(){
    return ( <TbCalendar disabled={false}
                         onChange={(v)=>{this.handleChange(v)}}
                         value={this.state.value}
                         format="YYYY-MM-DD HH:mm:ss"/>

    );
  }

}


ReactDOM.render(<Demo />, document.getElementById('__react-content'));
