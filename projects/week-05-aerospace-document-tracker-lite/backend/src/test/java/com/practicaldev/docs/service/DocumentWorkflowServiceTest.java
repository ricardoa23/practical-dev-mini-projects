package com.practicaldev.docs.service;

import com.practicaldev.docs.repository.DocumentRepository;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;

class DocumentWorkflowServiceTest {
    @Test
    void invalidTransitionsShouldFail() {
        DocumentWorkflowService service = new DocumentWorkflowService(new DocumentRepository());
        assertThrows(IllegalStateException.class, () -> service.transition(1L, "released"));
    }
}
