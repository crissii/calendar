
import React from 'react';
import DateTHead from './DateTHead';
import DateTBody from './DateTBody';

export default
class DateTable extends React.Component {
    isTime(){
        let format = this.props.format?this.props.format:"YYYY-MM-DD HH:mm:ss";
        return format.indexOf("YYYY")==-1 && format.indexOf("MM")==-1 && format.indexOf("DD")==-1
    }
  render() {
    const props = this.props;
    const prefixCls = props.prefixCls;
    let display = this.isTime()?"visibility":"hidden";
    return (<table style={{visibility:this.props.show?"visibility":"hidden"}} className = {`${prefixCls}-table`}  cellSpacing="0" role="grid">
      <DateTHead {...props}/>
      <DateTBody {...props}/>
    </table>);
  }
}
