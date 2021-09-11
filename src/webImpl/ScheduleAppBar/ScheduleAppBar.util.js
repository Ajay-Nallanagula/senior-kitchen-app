import { getWeek, getDay, endOfWeek, startOfWeek, eachDayOfInterval, format, getYear, isToday } from 'date-fns'


const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


export const calculatedatesInWeek = () => {
    const todaysDate = new Date()
    const startWeekDay = startOfWeek(todaysDate)
    const endWeekDay = endOfWeek(todaysDate)
    return eachDayOfInterval({
        start: startWeekDay,
        end: endWeekDay
    }).map(eachDay => {
        const weekDayNo = getDay(eachDay)
        return {
            // weekDayNo,
            date: format(eachDay, 'PP'),
            weekDay: weekDays[weekDayNo],
            isToday: isToday(eachDay)
        }
    })
}

export const calculateWeeklyDates = () => {
    const todaysDate = new Date()
    const weekOfTheYear = getWeek(todaysDate)
    const datesInWeek = calculatedatesInWeek()
    const currentYear = getYear(todaysDate)
    const weekDayNo = getDay(todaysDate)
    return {
        weekDayNo,
        weekOfTheYear,
        datesInWeek,
        currentYear
    }
}