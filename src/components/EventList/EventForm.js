import React, { useState, useEffect } from 'react';
import './EventForm.css';

const EventForm = ({ event, onSave, onCancel, isOpen }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    attendees: '',
    status: 'pending'
  });

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title || '',
        description: event.description || '',
        date: event.date || '',
        time: event.time || '',
        location: event.location || '',
        attendees: event.attendees || '',
        status: event.status || 'pending'
      });
    } else {
      setFormData({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        attendees: '',
        status: 'pending'
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalized = {
      ...formData,
      attendees: formData.attendees !== '' ? parseInt(formData.attendees, 10) : null,
      status: (formData.status || 'pending').toUpperCase(),
      date: formData.date ? formData.date : null,
      time: formData.time ? formData.time : null
    };
    onSave(normalized);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">
            {event ? 'Edit Event' : 'Create New Event'}
          </h2>
          <button className="modal-close" onClick={onCancel}>
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Event Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
              required
              placeholder="Enter event title"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-input form-textarea"
              rows="3"
              placeholder="Enter event description"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date" className="form-label">Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="time" className="form-label">Time *</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="location" className="form-label">Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="form-input"
              required
              placeholder="Enter event location"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="attendees" className="form-label">Expected Attendees</label>
              <input
                type="number"
                id="attendees"
                name="attendees"
                value={formData.attendees}
                onChange={handleChange}
                className="form-input"
                min="1"
                placeholder="Number of attendees"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="status" className="form-label">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-input"
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {event ? 'Update Event' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
