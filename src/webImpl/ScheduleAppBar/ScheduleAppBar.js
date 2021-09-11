import React from 'react';
import TabPanelBar from '../../components/TabPanelBar';
import {calculateWeeklyDates,calculatedatesInWeek} from './ScheduleAppBar.util'


const ScheduleAppBar = () => {
    const {
        weekDayNo,
        weekOfTheYear,
        datesInWeek,
        currentYear
    } = calculateWeeklyDates()
    return (
       <TabPanelBar currentYear={currentYear} tabs ={datesInWeek} activeTab={weekDayNo} weekOfTheYear={weekOfTheYear}></TabPanelBar>
    );
};

export default ScheduleAppBar;