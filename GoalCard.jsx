function GoalCard({ goal, onDelete, onUpdate }) {

  if (!goal || typeof goal !== 'object') return null;

  const savedAmount = goal.savedAmount ?? 0;
  const targetAmount = goal.targetAmount ?? 1; 
  const progress = savedAmount / targetAmount;

  function btnDeposit() {
    const amount = parseFloat(prompt("Enter amount to deposit:"));
    if (!amount || amount <= 0) return;

    const updatedGoal = { ...goal, savedAmount: goal.savedAmount + amount };

    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount }),
    })
      .then(res => res.json())
      .then(onUpdate);
  }

  function btnDelete() {
    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "DELETE",
    }).then(() => onDelete(goal.id));
  }

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Target: KES{targetAmount.toFixed(2)}</p>
      <p>Saved: KES{savedAmount.toFixed(2)}</p>
      <p>Category: {goal.category}</p>
      <p>Deadline: {goal.deadline}</p>
      <p>Created: {goal.createdAt}</p>
      <p>Progress: {(progress * 100).toFixed(1)}%</p>
      <button onClick={btnDeposit}>Deposit</button>
      <button onClick={btnDelete}>Delete</button>
    </div>
  );
}

export default GoalCard;

