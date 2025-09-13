package com.eventscheduler.repository;

import com.eventscheduler.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    
    /**
     * Find events by status
     */
    List<Event> findByStatus(Event.EventStatus status);
    
    /**
     * Find events by date range
     */
    List<Event> findByDateBetween(LocalDate startDate, LocalDate endDate);
    
    /**
     * Find upcoming events (from today onwards)
     */
    @Query("SELECT e FROM Event e WHERE e.date >= :today ORDER BY e.date ASC, e.time ASC")
    List<Event> findUpcomingEvents(@Param("today") LocalDate today);
    
    /**
     * Find events by date
     */
    List<Event> findByDate(LocalDate date);
    
    /**
     * Find events by title containing (case insensitive)
     */
    List<Event> findByTitleContainingIgnoreCase(String title);
    
    /**
     * Find events by location containing (case insensitive)
     */
    List<Event> findByLocationContainingIgnoreCase(String location);
    
    /**
     * Count events by status
     */
    long countByStatus(Event.EventStatus status);
    
    /**
     * Find events with tasks
     */
    @Query("SELECT DISTINCT e FROM Event e LEFT JOIN FETCH e.tasks WHERE e.id = :eventId")
    Event findByIdWithTasks(@Param("eventId") Long eventId);
}
