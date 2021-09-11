import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Tab, Tabs } from '@material-ui/core';
import TabPanel from './TabPanel'
import './Tab.css'
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//     root: {
//         '& .MuiPaper-root .MuiAppBar-root .MuiAppBar-positionStatic .MuiAppBar-colorPrimary': {
//             backgroundColor: 'red'
//         }
//     }
// }))


const TabPanelBar = ({ tabs, activeTab, currentYear, weekOfTheYear }) => {
    const [value, setValue] = useState(activeTab + 1)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const initialTab = <><span><strong>{currentYear}</strong></span><span style={{ display: 'block' }}><strong>Week: {weekOfTheYear}</strong></span></>
    // const classes = useStyles()
    return (
        <div>
            <AppBar position='static' style={{ backgroundColor: 'royalblue' }}>
                <Tabs value={value} onChange={handleChange} >
                    <Tab label={initialTab} disabled style={{ color: 'yellow' }} />
                    {tabs.map(({ date, weekDay, isToday, weekDayNo }) => {
                        const styledLabel = <><span><strong>{date}</strong></span><span style={{ display: 'block' }}><strong>{weekDay}</strong></span></>
                        return (
                            <Tab label={styledLabel} wrapped={true} />
                        )
                    })}
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                Item One
      </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
      </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
      </TabPanel>
        </div>
    )
}

export default TabPanelBar