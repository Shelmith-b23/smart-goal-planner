function Overview({ goals }) {
  const totalTarget = goals.reduce((acc, g) => acc + g.targetAmount, 0);
  const totalSaved = goals.reduce((acc, g) => acc + g.savedAmount, 0);

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Overview</h2>
      <p>Total Target Amount: KES{totalTarget.toFixed(2)}</p>
      <p>Total Saved: KES{totalSaved.toFixed(2)}</p>
      <p>Overall Progress: {((totalSaved / totalTarget) * 100 || 0).toFixed(1)}%</p>
    </div>
  );
}

export default Overview;
