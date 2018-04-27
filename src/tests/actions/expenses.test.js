import  { addExpense, editExpense, removeExpense } from '../../actions/expenses';


//remove test 

test('should setup remove expense action object', ()=>{
    const action = removeExpense({id: '12341x'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12341x'
    })
})


//edit test
test('should setup edit expense action object', ()=>{
    const action = editExpense('3213', {note: 'lol'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '3213',
        updates: {
            note: 'lol'
        } 
    })
})

//add expense

test('should setup add expense action object', ()=>{
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 10030,
        note: 'This wa last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})


test('should setup add expense action object with default values', ()=>{
    
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})
//toBe ===  NIE MOZNA PORWNYWAC OBIEKTOW
//toEquel == mozna porwynywac obiekty