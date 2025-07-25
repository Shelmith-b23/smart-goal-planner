import {useEffect,useState} from 'react'
import AddGoalForm from './AddGoalForm'
import GoalList from './GoalList'
import Overview from './Overview'
import './App.css'
import './GoalCard.css'
import './GoalList.css'
import './AddGoalForm.css'
function App () {
  const [goals , setGoals] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/goals')
    .then(res => res.json())
    .then(data => setGoals(data));
  },[]);

  function AddGoal (newGoal) {
    setGoals([...goals,newGoal])
  }
  function actionDelete (id) {
      setGoals(goals.filter(goal => goal.id !==id))
}
// In App.jsx
function actionDeposit(goal) {
  const amount = parseFloat(prompt("Enter deposit amount:"));
  if (!amount || amount <= 0) return;

  const updatedGoal = { ...goal, savedAmount: goal.savedAmount + amount };

  fetch(`http://localhost:3000/goals/${goal.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ savedAmount: updatedGoal.savedAmount }),
  })
    .then((res) => res.json())
    .then(actionUpdate)
    .catch((err) => console.error("Deposit error:", err));
}

  function actionUpdate(updatedGoal) {
  const updatedGoals = goals.map((g) =>
    g.id === updatedGoal.id ? updatedGoal : g
  );
  setGoals(updatedGoals);


  }
  return(<div className='bgcolor'>
    <h1>SMART GOAL PLANNER</h1>
       <AddGoalForm onAdd = {AddGoal}/>
       <GoalList goals={goals} onDelete ={actionDelete}onUpdate={actionUpdate} 
       onDeposit ={actionDeposit} />
       <Overview goals = {goals} />
      
    
       
    </div>
  )
}
export default App;
