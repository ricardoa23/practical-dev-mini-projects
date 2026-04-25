package com.practicaldev.inventory.model;

public class ToolItem {
    private Long id;
    private String serialNumber;
    private String name;
    private String status;
    private boolean available;

    public ToolItem(Long id, String serialNumber, String name, String status, boolean available) {
        this.id = id;
        this.serialNumber = serialNumber;
        this.name = name;
        this.status = status;
        this.available = available;
    }

    public Long getId() { return id; }
    public String getSerialNumber() { return serialNumber; }
    public String getName() { return name; }
    public String getStatus() { return status; }
    public boolean isAvailable() { return available; }

    public void setStatus(String status) { this.status = status; }
    public void setAvailable(boolean available) { this.available = available; }
}
