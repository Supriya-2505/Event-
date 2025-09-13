package com.eventscheduler.service;

import com.eventscheduler.dto.DashboardStatsDTO;
import com.eventscheduler.entity.Event;
import com.eventscheduler.entity.Task;
import com.eventscheduler.repository.EventRepository;
import com.eventscheduler.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class DashboardService {
    
    private final EventRepository eventRepository;
    private final TaskRepository taskRepository;
    
    /**
     * Get dashboard statistics
     */
    public DashboardStatsDTO getDashboardStats() {
        log.info("Fetching dashboard statistics");
        
        long totalEvents = eventRepository.count();
        long upcomingEvents = eventRepository.findUpcomingEvents(LocalDate.now()).size();
        long pendingTasks = taskRepository.countByCompleted(false);
        long completedTasks = taskRepository.countByCompleted(true);
        long overdueTasks = taskRepository.findOverdueTasks(LocalDate.now()).size();
        
        return new DashboardStatsDTO(
                totalEvents,
                upcomingEvents,
                pendingTasks,
                completedTasks,
                overdueTasks
        );
    }
}
