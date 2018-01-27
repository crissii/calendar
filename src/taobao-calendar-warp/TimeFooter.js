import React from "react";
import moment from "moment";

class TimeFooter extends React.Component {
  constructor() {
    super();
    this.clickInput = this.clickInput.bind(this);
    this.inputValue = this.inputValue.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.isShow = this.isShow.bind(this);
    this.contains = this.contains.bind(this);

  }

  isTime(){
    let format = this.props.format?this.props.format:"YYYY-MM-DD HH:mm:ss";
    return format.indexOf("YYYY")==-1 && format.indexOf("MM")==-1 && format.indexOf("DD")==-1
  }

  componentDidMount() {
    if(this.isTime())
    {
      this.clickInput("hour")
    }
  }

  inputValue(timePosition) {
    let v = "";
    let selectedValue = this.props.selectedValue;
    if (selectedValue) {
      if (timePosition == "hour") {
        v = selectedValue.hour();
      }
      if (timePosition == "min") {
        v = selectedValue.minute();
      }
      if (timePosition == "second") {
        v = selectedValue.second();
      }
    }
    return v == "0" ? "" : v;
  }

  changeValue(timePosition, v) {
    let s = this.props.selectedValue && this.props.selectedValue.clone();
    if (!s) {
      s = moment();
      s.hour(0);
      s.minute(0);
      s.second(0);
    }
    if (timePosition == "hour") {
      s.hour(v);
    }
    if (timePosition == "min") {
      s.minute(v);
    }
    if (timePosition == "second") {
      s.second(v);
    }
    this.props.onChange(s);


    //
    // if(timePosition=="hour" && this.isShow("mm") == "visible")
    // {
    //   this.clickInput("min");
    // }
    //
    // if(timePosition=="min" && this.isShow("ss") == "visible")
    // {
    //   this.clickInput("second");
    // }

  }

  clickInput(timePosition) {
    this.props.onChangeTimePosition(timePosition, this.props.onCloseTimePicker)
    this.props.onOpenTimePicker();

  }

  isShow(key)
  {
     return this.props.format.indexOf(key)!=-1?"visible":"hidden"
  }

  contains(key)
  {
    return this.props.format.indexOf(key)!=-1;
  }

  render() {
    return (<span className="rc-calendar-time">
      <input style={{visibility:this.isShow("HH")}} className="rc-calendar-time-input"
             value={this.inputValue("hour")} onFocus={() => {
        this.clickInput("hour")
      }}
              onChange={e => {
                this.changeValue("hour", e.target.value)
              }}
              title="上一小时(上方向键), 下一小时(下方向键)"/>
      <span style={{visibility:this.isShow("mm")}} className="rc-calendar-time-minute">
                <span> : </span>
                <input className="rc-calendar-time-input"
                       value={this.inputValue("min")}
                       onChange={e => {
                         this.changeValue("min", e.target.value)
                       }}
                       onFocus={() => {
                         this.clickInput("min")
                       }}
                       title="上一分钟(上方向键), 下一分钟(下方向键)"/>
            </span>
      <span style={{visibility:this.isShow("ss")}} className="rc-calendar-time-second">
                <span> : </span>
                <input className="rc-calendar-time-input"
                       value={this.inputValue("second")}
                       onChange={e => {
                         this.changeValue("second", e.target.value)
                       }}
                       onFocus={() => {
                         this.clickInput("second")
                       }}
                       title="上一秒(上方向键), 下一小时(下方向键)"/>
            </span>
        </span>);
  }
}

export default TimeFooter;
