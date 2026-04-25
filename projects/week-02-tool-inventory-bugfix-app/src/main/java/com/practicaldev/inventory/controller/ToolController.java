package com.practicaldev.inventory.controller;

import com.practicaldev.inventory.model.ToolItem;
import com.practicaldev.inventory.service.ToolService;
import java.util.List;

public class ToolController {
    private final ToolService service;

    public ToolController(ToolService service) {
        this.service = service;
    }

    public List<ToolItem> availableTools() {
        return service.listAvailableTools();
    }
}
