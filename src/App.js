
import './App.css';
import { Typography , styled , Box} from '@mui/material';
import { useState } from 'react';
//components
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransaction from './Components/NewTransaction';
import Transactions from './Components/Transactions';

const Header = styled(Typography)`
 font-size:35px;
 color:blue;
 text-transform:uppercase;

`
const Component = styled(Box)`
display:flex;
background:grey;
width:800px;
padding:10px;
border-radius:20px;
margin:auto;
  & > div{
    height:70vh;
    width:50%;
    padding:10px;
  }
`

function App() {
  const [transactions , setTransactions] = useState([
    {id:1, text: 'Zinger', amount: -250},
    {id:1, text: 'Salary', amount: 25000},
    {id:1, text: 'Book', amount: -250},
    {id:1, text: 'Bonus', amount: 2500}
  ])
  return (
    <Box className="App">
     <Header>Expense Tracker</Header>
     <Component>
       <Box>
         <Balance transactions = {transactions}  />
         <ExpenseCard  transactions = {transactions}/>
         <NewTransaction setTransactions  ={setTransactions}/>
       </Box>
       <Box>
         <Transactions transactions = {transactions} />
       </Box>

       
     </Component>
    </Box>
  );
}

export default App;
