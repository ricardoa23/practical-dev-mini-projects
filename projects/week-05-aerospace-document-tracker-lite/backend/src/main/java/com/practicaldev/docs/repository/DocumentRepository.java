package com.practicaldev.docs.repository;

import com.practicaldev.docs.model.TrackedDocument;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class DocumentRepository {
    private final List<TrackedDocument> documents = new ArrayList<>(List.of(
        new TrackedDocument(1L, "AERO-7", "OrbitalWorks", "Wing Checklist", "draft"),
        new TrackedDocument(2L, "AERO-7", "OrbitalWorks", "Stress Review", "review"),
        new TrackedDocument(3L, "LUN-2", "Moonrise", "Thermal Notes", "approved")
    ));

    public List<TrackedDocument> search(String projectCode, String customer, String status) {
        return documents.stream()
            .filter(doc -> projectCode == null || doc.getProjectCode().contains(projectCode))
            .filter(doc -> customer == null || doc.getCustomer().contains(customer))
            .filter(doc -> status == null || doc.getStatus().equals(status))
            .toList();
    }

    public Optional<TrackedDocument> findById(Long id) {
        return documents.stream().filter(doc -> doc.getId().equals(id)).findFirst();
    }
}
