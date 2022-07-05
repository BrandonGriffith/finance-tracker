import './ExpenseItem.css'

const ExpenseItem = () => {
    return (
    <div className='expense-item'>
        <div>Date</div>
        <h2>item</h2>
        <div className='expense-itme__description'>
            <div className='expense-item__price'>$100</div>
        </div>
    </div>
    )
}
export default ExpenseItem;