import React, { useState } from 'react';
import DateSelector from '../components/CalendarView/DateSelector';
import CalendarView from '../components/CalendarView/CalendarView';
import EventForm from '../components/EventList/EventForm';
import './CalendarPage.css';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewType, setViewType] = useState('month');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);

  // Sample events data - in a real app, this would come from an API
  const [events] = useState([
    {
      id: 1,
      title: 'Team Meeting',
      description: 'Weekly team sync to discuss project progress and upcoming milestones.',
      date: '2024-01-15',
      time: '10:00',
      location: 'Conference Room A',
      attendees: 8,
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Project Presentation',
      description: 'Present the final project deliverables to stakeholders.',
      date: '2024-01-16',
      time: '14:00',
      location: 'Main Hall',
      attendees: 25,
      status: 'pending'
    },
    {
      id: 3,
      title: 'Client Call',
      description: 'Discuss project requirements and timeline with the client.',
      date: '2024-01-17',
      time: '11:30',
      location: 'Online',
      attendees: 3,
      status: 'confirmed'
    },
    {
      id: 4,
      title: 'Workshop Session',
      description: 'Training session on new development tools and best practices.',
      date: '2024-01-18',
      time: '09:00',
      location: 'Training Room',
      attendees: 15,
      status: 'pending'
    },
    {
      id: 5,
      title: 'Review Meeting',
      description: 'Code review session for the latest feature implementation.',
      date: '2024-01-19',
      time: '15:00',
      location: 'Conference Room B',
      attendees: 5,
      status: 'confirmed'
    },
    {
      id: 6,
      title: 'Product Launch',
      description: 'Launch event for our new product with media and stakeholders.',
      date: '2024-01-20',
      time: '18:00',
      location: 'Event Center',
      attendees: 100,
      status: 'pending'
    }
  ]);

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const handleViewTypeChange = (newViewType) => {
    setViewType(newViewType);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setEditingEvent(null);
    setIsFormOpen(true);
  };

  const handleEventClick = (event) => {
    setEditingEvent(event);
    setIsFormOpen(true);
  };

  const handleSaveEvent = (eventData) => {
    // In a real app, this would save to an API
    console.log('Saving event:', eventData);
    setIsFormOpen(false);
    setEditingEvent(null);
    setSelectedDate(null);
  };

  const handleCancelForm = () => {
    setIsFormOpen(false);
    setEditingEvent(null);
    setSelectedDate(null);
  };

  return (
    <div className="calendar-page">
      <div className="calendar-page-header">
        <h1>Calendar</h1>
        <p>View and manage your events in calendar format</p>
      </div>

      <DateSelector
        currentDate={currentDate}
        onDateChange={handleDateChange}
        viewType={viewType}
        onViewTypeChange={handleViewTypeChange}
      />

      <CalendarView
        events={events}
        currentDate={currentDate}
        viewType={viewType}
        onDateClick={handleDateClick}
        onEventClick={handleEventClick}
      />

      <EventForm
        event={editingEvent}
        onSave={handleSaveEvent}
        onCancel={handleCancelForm}
        isOpen={isFormOpen}
      />
    </div>
  );
};

export default CalendarPage;
