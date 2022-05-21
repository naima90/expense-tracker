import React from 'react'

export const AddTransaction = () => {
  return (
    <>
    <h3>Add new transaction</h3>
    <form>
      <div className="form-control">
        <labell htmlFor="text">Text</labell>
        <input type="text" placeholder="Enter text..." />
      </div><div className="form-control">
        <labell htmlFor="amount">amount
        <br />
        (negative - expense, positive - income)</labell>
        <input type="number" placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
    </>
  )
}
