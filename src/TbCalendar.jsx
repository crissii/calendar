import React from 'react';
import '../assets/index.less';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Calendar from './Calendar';
import DatePicker from './Picker';
import zhCN from './locale/zh_CN';
import '../assets/time-assets/index.less';
import TbTimePicker from './taobao-calendar-warp/TimePicker';
import TbTimeFooter from './taobao-calendar-warp/TimeFooter';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "./taobao-calendar-warp/my-calendar.css"
import MonthCalendar from "./MonthCalendar";
class TbCalendar extends React.Component {
    static propTypes = {
        defaultValue: PropTypes.string,
        format:PropTypes.string,
        onChange:PropTypes.func,
    }
    static defaultProps = {
        defaultValue: null,
        format:"YYYY-MM-DD HH:mm:ss",
        onChange:()=>{}
    }

    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue && moment(props.defaultValue,props.format),
            timePosition: "hour" //hour min second
        };
        if(this.props.format == "YYYY")
        {
            throw "不支持年份选择框";
        }

        this.onChangeTimePosition = this.onChangeTimePosition.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isShowTime = this.isShowTime.bind(this);
    }

    onChange = (value) => {
        this.setState({
                          value,
                      });
        this.props.onChange && this.props.onChange(value && value.format(this.props.format) || "");
    }

    onChangeTimePosition(timePosition,onCloseTimePicker)
    {
        this.setState({"timePosition":timePosition,"onCloseTimePicker":onCloseTimePicker});
    }

    isShowTime()
    {
        return this.props.format.indexOf("HH")!=-1
    }

    isMoth()
    {
        let format = this.props.format;
        return format.indexOf("DD")==-1 && format.indexOf("HH")==-1 &&
               format.indexOf("mm")==-1 && format.indexOf("ss")==-1 &&
               format.indexOf("YYYY")!=-1 && format.indexOf("MM")!=-1
    }

    render() {
        const state = this.state;

        const timePickerElement = <TbTimePicker {...state} />;

        const self = this;

        const renderFooter = (argumes) => {
            return (
                <TbTimeFooter {...argumes} format={this.props.format} onChangeTimePosition={this.onChangeTimePosition} />
            )
        }



        const defaultValue = this.props.defaultValue && moment(this.props.defaultValue, this.props.format)
                             || null;



        const calendar = (this.isMoth()? (<MonthCalendar
            locale={zhCN}
            style={{zIndex: 1000}}
        />):(<Calendar
            locale={zhCN}
            style={{ zIndex: 1000 }}
            dateInputPlaceholder="请选择"
            formatter={self.props.format}
            timePicker={self.isShowTime()?timePickerElement:null}
            defaultValue={defaultValue}
            showDateInput={true}
            renderFooter={self.isShowTime()?renderFooter:()=>{}}
        />));
        return (
                <DatePicker
                    animation="slide-up"
                    disabled={state.disabled}
                    calendar={calendar}
                    value={state.value}
                    onChange={this.onChange}
                >
                    {
                        ({ value }) => {
                            return (
                                <div  className="form_datetime">
                                    <input className="form-control form-control-inline"
                                        type="text"
                                           readOnly={true}
                                        value={value && value.format(self.props.format) || ''}
                                           onChange={e=>{}}
                                    />
                                    <label className="icon-th add-on fa fa-calendar"></label>
                                </div>
                            );
                        }
                    }
                </DatePicker>);
    }
}

export default TbCalendar;