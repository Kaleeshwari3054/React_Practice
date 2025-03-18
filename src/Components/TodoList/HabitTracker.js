import React, { useState } from 'react';
import '../../App.css'; 

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  // Add a new habit
  const addHabit = () => {
    if (!newHabit.trim()) return;
    setHabits([...habits, newHabit]);
    setNewHabit('');
  };

  // Delete a habit
  const deleteHabit = (index) => {
    setHabits(habits.filter((_, i) => i !== index));
  };

  // Enable edit mode
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditText(habits[index]);
  };

  // Update the habit
  const updateHabit = (index) => {
    if (!editText.trim()) return;
    const updatedHabits = [...habits];
    updatedHabits[index] = editText;
    setHabits(updatedHabits);
    setEditingIndex(null);
  };

  return (
    <div className="habit-container">
      <h2 className="habit-title">Today's work</h2>
      <div>
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Enter your Today's work..."
          className="habit-input"
        />
        <button onClick={addHabit} className="habit-add-btn">
          Add
        </button>
      </div>
      <ul className="habit-list">
        {habits.map((habit, index) => (
          <li key={index} className="habit-item">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="habit-input"
                />
                <button
                  onClick={() => updateHabit(index)}
                  className="habit-update-btn"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{habit}</span>
                <div>
                  <button
                    onClick={() => startEditing(index)}
                    className="habit-edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteHabit(index)}
                    className="habit-delete-btn"
                  >
                    X
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
