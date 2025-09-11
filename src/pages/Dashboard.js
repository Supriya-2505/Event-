import React from 'react';
import SummaryCard from '../components/Shared/SummaryCard';
import UpcomingEventsWidget from '../components/Shared/UpcomingEventsWidget';
import QuickLinks from '../components/Shared/QuickLinks';
import './Dashboard.css';

const Dashboard = () => {
  // Sample data - in a real app, this would come from an API
  const summaryData = [
    {
      title: 'Total Events',
      value: '24',
      icon: '🎉',
      color: 'blue',
      trend: 1,
      trendValue: 12
    },
    {
      title: 'Upcoming Events',
      value: '8',
      icon: '📅',
      color: 'green',
      trend: 1,
      trendValue: 5
    },
    {
      title: 'Pending Tasks',
      value: '15',
      icon: '✅',
      color: 'orange',
      trend: -1,
      trendValue: 8
    },
    {
      title: 'Completed Tasks',
      value: '42',
      icon: '🎯',
      color: 'purple',
      trend: 1,
      trendValue: 18
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Team Meeting',
      date: '2024-01-15',
      time: '10:00 AM',
      location: 'Conference Room A',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Project Presentation',
      date: '2024-01-16',
      time: '2:00 PM',
      location: 'Main Hall',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Client Call',
      date: '2024-01-17',
      time: '11:30 AM',
      location: 'Online',
      status: 'confirmed'
    },
    {
      id: 4,
      title: 'Workshop Session',
      date: '2024-01-18',
      time: '9:00 AM',
      location: 'Training Room',
      status: 'pending'
    },
    {
      id: 5,
      title: 'Review Meeting',
      date: '2024-01-19',
      time: '3:00 PM',
      location: 'Conference Room B',
      status: 'confirmed'
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening with your events.</p>
      </div>

      <div className="dashboard-content">
        <div className="summary-cards">
          {summaryData.map((data, index) => (
            <SummaryCard
              key={index}
              title={data.title}
              value={data.value}
              icon={data.icon}
              color={data.color}
              trend={data.trend}
              trendValue={data.trendValue}
            />
          ))}
        </div>

        <div className="dashboard-widgets">
          <div className="widget-column">
            <UpcomingEventsWidget events={upcomingEvents} />
          </div>
          
          <div className="widget-column">
            <QuickLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
