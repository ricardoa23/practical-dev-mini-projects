package com.practicaldev.inventory.repository;

import com.practicaldev.inventory.model.ToolItem;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class ToolRepository {
    private final List<ToolItem> tools = new ArrayList<>(List.of(
        new ToolItem(1L, "HAM-100", "Hammer", "AVAILABLE", true),
        new ToolItem(2L, "DRL-220", "Cordless Drill", "CHECKED_OUT", true),
        new ToolItem(3L, "SAW-310", "Saw", "AVAILABLE", true)
    ));

    public List<ToolItem> findAll() {
        return tools;
    }

    public Optional<ToolItem> findById(Long id) {
        return tools.stream().filter(tool -> tool.getId().equals(id)).findFirst();
    }

    public Optional<ToolItem> findBySerialNumber(String serialNumber) {
        // TODO: current implementation is too strict and breaks lowercase search.
        return tools.stream().filter(tool -> tool.getSerialNumber().equals(serialNumber)).findFirst();
    }
}
