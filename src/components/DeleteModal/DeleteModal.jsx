import React from "react";
import "./DeleteModal.css";

const DeleteModal = ({ confirmDelete, cancelDelete }) => {
  return (
    <div className="modal-overlay" onClick={cancelDelete}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon delete-icon">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="m19 6-.867 12.142A2 2 0 0 1 16.138 20H7.862a2 2 0 0 1-1.995-1.858L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          </svg>
        </div>
        <h3>Delete task?</h3>
        <p>This task will be permanently deleted and cannot be recovered.</p>
        <div className="modal-buttons">
          <button className="btn-confirm" onClick={confirmDelete}>
            Delete
          </button>
          <button className="btn-cancel" onClick={cancelDelete}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
