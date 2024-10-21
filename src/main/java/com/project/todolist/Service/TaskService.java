package com.project.todolist.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.todolist.Model.Task;
import com.project.todolist.Repository.TaskRepository;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task createTask(Task task)    {
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public Task updateTask(Long id, Task taskDetails)   {
        Task task = taskRepository.findById(id).orElseThrow();
        task.setCompleted(taskDetails.isCompleted());
        
        return taskRepository.save(task);
    }

}
