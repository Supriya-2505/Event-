import React, { useState } from 'react';
import EventList from '../components/EventList/EventList';
import './EventPage.css';

const EventPage = () => {
  // Sample events data - in a real app, this would come from an API
  const [events, setEvents] = useState([
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

  const handleUpdateEvent = (eventId, eventData) => {
    if (eventId) {
      // Update existing event
      setEvents(prevEvents =>
        prevEvents.map(event =>
          event.id === eventId ? { ...event, ...eventData } : event
        )
      );
    } else {
      // Create new event
      const newEvent = {
        id: Date.now(), // Simple ID generation
        ...eventData
      };
      setEvents(prevEvents => [...prevEvents, newEvent]);
    }
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(prevEvents =>
      prevEvents.filter(event => event.id !== eventId)
    );
  };

  return (
    <div className="event-page">
      <EventList
        events={events}
        onUpdateEvent={handleUpdateEvent}
        onDeleteEvent={handleDeleteEvent}
      />
    </div>
  );
};

export default EventPage;
