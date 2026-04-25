package com.practicaldev.inventory.service;

import com.practicaldev.inventory.repository.ToolRepository;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

class ToolServiceTest {
    @Test
    void checkInMarksToolAvailable() {
        ToolService service = new ToolService(new ToolRepository());
        assertEquals("AVAILABLE", service.checkIn(2L).getStatus());
    }

    @Test
    void checkOutMarksToolUnavailable() {
        ToolService service = new ToolService(new ToolRepository());
        assertFalse(service.checkOut(1L).isAvailable());
    }
}
