import React, { useState } from 'react';
import TaskList from '../components/TaskManager/TaskList';
import './TaskPage.css';

const TaskPage = () => {
  // Sample tasks data - in a real app, this would come from an API
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Prepare presentation slides',
      description: 'Create slides for the quarterly review meeting with stakeholders.',
      dueDate: '2024-01-15',
      priority: 'high',
      assignee: 'John Doe',
      eventId: 1,
      eventTitle: 'Team Meeting',
      completed: false
    },
    {
      id: 2,
      title: 'Book conference room',
      description: 'Reserve the main conference room for the project presentation.',
      dueDate: '2024-01-14',
      priority: 'medium',
      assignee: 'Jane Smith',
      eventId: 2,
      eventTitle: 'Project Presentation',
      completed: true
    },
    {
      id: 3,
      title: 'Prepare client materials',
      description: 'Gather all necessary documents and materials for the client call.',
      dueDate: '2024-01-16',
      priority: 'high',
      assignee: 'Mike Johnson',
      eventId: 3,
      eventTitle: 'Client Call',
      completed: false
    },
    {
      id: 4,
      title: 'Set up training equipment',
      description: 'Prepare laptops, projectors, and other equipment for the workshop.',
      dueDate: '2024-01-17',
      priority: 'medium',
      assignee: 'Sarah Wilson',
      eventId: 4,
      eventTitle: 'Workshop Session',
      completed: false
    },
    {
      id: 5,
      title: 'Review code changes',
      description: 'Review the latest feature implementation before the review meeting.',
      dueDate: '2024-01-18',
      priority: 'high',
      assignee: 'David Brown',
      eventId: 5,
      eventTitle: 'Review Meeting',
      completed: false
    },
    {
      id: 6,
      title: 'Order catering',
      description: 'Arrange catering for the product launch event.',
      dueDate: '2024-01-19',
      priority: 'medium',
      assignee: 'Lisa Davis',
      eventId: 6,
      eventTitle: 'Product Launch',
      completed: false
    },
    {
      id: 7,
      title: 'Send invitations',
      description: 'Send out invitations to all stakeholders for the product launch.',
      dueDate: '2024-01-10',
      priority: 'high',
      assignee: 'Tom Anderson',
      eventId: 6,
      eventTitle: 'Product Launch',
      completed: true
    },
    {
      id: 8,
      title: 'Prepare demo environment',
      description: 'Set up the demo environment for the product presentation.',
      dueDate: '2024-01-12',
      priority: 'medium',
      assignee: 'Emma Taylor',
      eventId: 6,
      eventTitle: 'Product Launch',
      completed: false
    }
  ]);

  // Sample events data for the task form
  const events = [
    { id: 1, title: 'Team Meeting' },
    { id: 2, title: 'Project Presentation' },
    { id: 3, title: 'Client Call' },
    { id: 4, title: 'Workshop Session' },
    { id: 5, title: 'Review Meeting' },
    { id: 6, title: 'Product Launch' }
  ];

  const handleUpdateTask = (taskId, taskData) => {
    if (taskId) {
      // Update existing task
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, ...taskData } : task
        )
      );
    } else {
      // Create new task
      const newTask = {
        id: Date.now(), // Simple ID generation
        ...taskData
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== taskId)
    );
  };

  return (
    <div className="task-page">
      <TaskList
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
        events={events}
      />
    </div>
  );
};

export default TaskPage;
