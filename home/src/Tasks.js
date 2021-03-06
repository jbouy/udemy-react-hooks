import React, { useState } from 'react';
import uuid from 'uuid/v4';

const Tasks = () => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const updateTaskText = event => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }]);
  };

  const completeTask = completedTask => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter(task => task.id !== completedTask.id));
  };

  const deleteTask = task => {
    setCompletedTasks(completedTasks.filter(t => t.id !== task.id));
  };

  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input value={taskText} onChange={updateTaskText} />
        <button type="submit" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="task-list">
        {tasks.map((task, i) => {
          const { id, taskText: text } = task;
          return (
            <div
              key={id}
              onClick={() => completeTask(task)}
              role="button"
              tabIndex={i}
            >
              {text}
            </div>
          );
        })}
      </div>
      <div className="completed-list">
        {completedTasks.map(task => {
          const { id, taskText: text } = task;

          return (
            <div key={id}>
              {text}{' '}
              <span onClick={() => deleteTask(task)} className="delete-task">
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
