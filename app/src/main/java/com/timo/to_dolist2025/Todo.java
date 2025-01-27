package com.timo.to_dolist2025;

import java.util.Date;

public class Todo {
    private String title;
    private String description;
    private Date datetime;
    private boolean completed;

    public Todo(String title, String description, Date datetime) {
        this.title = title;
        this.description = description;
        this.datetime = datetime;
        this.completed = false;
    }

    // Getters and setters
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public Date getDatetime() { return datetime; }
    public void setDatetime(Date datetime) { this.datetime = datetime; }
    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }
}
