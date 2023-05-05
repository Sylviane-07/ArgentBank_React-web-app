import React from 'react'
//components
import Account from '../../components/Account/Account';
//Acounts Details Data
import data from "../../data/accountsData"

function Accounts() {
    return (
      <>
        <h2 className="sr-only">Accounts</h2>
        {data.map(({id, title, amount, status }) => (
            <Account
            key={id}
            title={title}
            amount={amount}
            status={status}
            />
        ))}
      </>
    );
}

export default Accounts
