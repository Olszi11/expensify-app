//Get visible expenses
import moment from 'moment';
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if (sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

export default getVisibleExpenses;