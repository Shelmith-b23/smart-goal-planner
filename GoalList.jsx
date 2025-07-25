import GoalCard from "./GoalCard";

function GoalList({ goals, onDelete, onUpdate }) {
  return (
    <div className="List">
      <h2>All Goals</h2>
      {goals.map(goal => (
        <GoalCard key={goal.id} goal={goal} onDelete={onDelete} onUpdate={onUpdate}  />
      ))}
    </div>
  );
}

export default GoalList;
