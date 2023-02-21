import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{
    const [isEdititing, setIsEditing] = useState(false);

    const saveExpenseDataHanlder = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler  =() =>{
        setIsEditing(true);
    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    }

    return(
        <div className='new-expense'>
            {!isEdititing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEdititing && <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} onCancel={stopEditingHandler}/>}
        </div>
    );
}

export default NewExpense;