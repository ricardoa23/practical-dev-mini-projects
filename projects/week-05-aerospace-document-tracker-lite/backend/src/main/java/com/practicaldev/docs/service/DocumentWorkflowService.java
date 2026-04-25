package com.practicaldev.docs.service;

import com.practicaldev.docs.model.TrackedDocument;
import com.practicaldev.docs.repository.DocumentRepository;

public class DocumentWorkflowService {
    private final DocumentRepository repository;

    public DocumentWorkflowService(DocumentRepository repository) {
        this.repository = repository;
    }

    public TrackedDocument transition(Long id, String nextStatus) {
        TrackedDocument document = repository.findById(id).orElseThrow();
        // TODO: bug: this accepts any status change.
        document.setStatus(nextStatus);
        return document;
    }
}
