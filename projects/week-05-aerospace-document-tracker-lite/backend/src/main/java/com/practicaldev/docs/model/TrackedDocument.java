package com.practicaldev.docs.model;

public class TrackedDocument {
    private Long id;
    private String projectCode;
    private String customer;
    private String title;
    private String status;

    public TrackedDocument(Long id, String projectCode, String customer, String title, String status) {
        this.id = id;
        this.projectCode = projectCode;
        this.customer = customer;
        this.title = title;
        this.status = status;
    }

    public Long getId() { return id; }
    public String getProjectCode() { return projectCode; }
    public String getCustomer() { return customer; }
    public String getTitle() { return title; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
