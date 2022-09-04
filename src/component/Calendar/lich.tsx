import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { DatePicker, DatePickerProps, Radio, RadioChangeEvent } from 'antd';
import moment from "moment"

type Type = | "date" | "week" | undefined

const Calendar = ({from, to} : any) => {
    
    const [value, setValue] = useState<Type>("date");
    const onChange: DatePickerProps["onChange"] = (date, dateString) => {
        console.log(dateString);
        if (date) {
            if (from) from(dateString);
            if (to) to(dateString);
        }
    };

    const pickertype = (e: RadioChangeEvent) => {
      setValue(e.target.value);
    };
    
    return (
        <div>
            <DatePicker
                format="DD-MM-YYYY HH:mm"
                picker={value}
                onChange={onChange}
                defaultValue={moment()}
                renderExtraFooter={() => (
                    <Radio.Group onChange={pickertype} value={value}>
                        <Radio value="date">Theo ngày</Radio>
                        <Radio value="week">Theo tuần</Radio>
                    </Radio.Group>
                )}
            />
        </div>
    )
};

export default Calendar;