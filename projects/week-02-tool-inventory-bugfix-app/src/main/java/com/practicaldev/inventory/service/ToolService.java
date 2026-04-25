package com.practicaldev.inventory.service;

import com.practicaldev.inventory.model.ToolItem;
import com.practicaldev.inventory.repository.ToolRepository;
import java.util.List;

public class ToolService {
    private final ToolRepository repository;

    public ToolService(ToolRepository repository) {
        this.repository = repository;
    }

    public List<ToolItem> listAvailableTools() {
        return repository.findAll().stream().filter(ToolItem::isAvailable).toList();
    }

    public ToolItem checkOut(Long id) {
        ToolItem tool = repository.findById(id).orElseThrow();
        tool.setStatus("CHECKED_OUT");
        // TODO: bug: available is not updated here.
        return tool;
    }

    public ToolItem checkIn(Long id) {
        ToolItem tool = repository.findById(id).orElseThrow();
        tool.setStatus("AVAILABLE");
        tool.setAvailable(true);
        return tool;
    }
}
