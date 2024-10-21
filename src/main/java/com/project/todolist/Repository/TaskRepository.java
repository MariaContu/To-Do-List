package com.project.todolist.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.todolist.Model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
    
}
