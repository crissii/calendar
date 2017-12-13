# rc-calendar
---

React Calendar(增加淘宝时间选择)


## Screenshots

<img src="https://user-images.githubusercontent.com/4486590/33889909-98cd281c-df8c-11e7-8769-17a770dc14d5.png" width="262"/>

## Feature

* support ie9,ie9+,chrome,firefox,safari
* support date, month, year, decade select panel
* support week number
* support en_US and zh_CN locale(UI), use moment.utcOffset to set timezone
* support aria and keyboard accessibility

### Keyboard

* Previous month (PageUp)
* Next month (PageDown)
* tab into hour input: Last hour(Up), Next hour(Down)
* tab into hour input: Last minute(Up), Next minute(Down)
* tab into hour input: Last second(Up), Next second(Down)
* Last year (Control + left)
* Next year (Control + right)

## install

```
npm install --save 'rc-calendar-tbtime'
```

## Usage

```js
import Calendar from 'rc-calendar-tbtime';
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<TbCalendar />, container);
```
## 属性说明


<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>defaultValue</td>
          <td>String</td>
          <td>【可选】默认值，注意要根据format格式赋值</td>
        </tr>
        <tr>
          <td>format</td>
          <td>String</td>
          <td>【可选】日期格式，如果为空默认格式为：YYYY-MM-DD HH:mm:ss</td>
         </tr>
         <tr>
          <td>onChange</td>
          <td>function</td>
          <td>【可选】变更函数，入参为format格式日期字符串</td>
         </tr>
    </tbody>
</table>
