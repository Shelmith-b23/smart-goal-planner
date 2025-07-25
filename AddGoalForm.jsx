import { useState } from "react";

function AddGoalForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
  });

  function AddGoal(e) {
    e.preventDefault();

    const newGoal = {
      ...formData,
      targetAmount: parseFloat(formData.targetAmount),
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };

    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => {
        onAdd(data);
        setFormData({ name: "", targetAmount: "", category: "", deadline: "" });
      })
      .catch((err) => console.error("Error adding goal:", err));
  }

  return (
    <form className="goal-form" onSubmit={AddGoal}>
      <h2>Add New Goal</h2>
      <input
        name="name"
        placeholder="New goal"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        name="targetAmount"
        type="number"
        placeholder="Target Amount"
        value={formData.targetAmount}
        onChange={(e) => setFormData({ ...formData, targetAmount: e.target.value })}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
      />
      <input
        name="deadline"
        type="date"
        value={formData.deadline}
        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
        required
      />
      <button className="form-button" type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
