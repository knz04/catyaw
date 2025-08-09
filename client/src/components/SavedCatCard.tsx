import { useState } from "react";

interface Cat {
  id: string;
  tags: string[];
  mimetype: string;
  createdAt: string;
  notes?: string;
}

interface SavedCatCardProps {
  cat: Cat;
  onDelete: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
}

export function SavedCatCard({
  cat,
  onDelete,
  onUpdateNotes,
}: SavedCatCardProps) {
  const imageUrl = `https://cataas.com/cat/${cat.id}`;
  const [editedNotes, setEditedNotes] = useState<string>(cat.notes || "");

  const handleDeleteClick = () => {
    (
      document.getElementById(
        `confirm_delete_modal_${cat.id}`
      ) as HTMLDialogElement
    )?.showModal();
  };

  const confirmDelete = () => {
    onDelete(cat.id);

    (
      document.getElementById(
        `confirm_delete_modal_${cat.id}`
      ) as HTMLDialogElement
    )?.close();
  };

  const handleEditClick = () => {
    setEditedNotes(cat.notes || "");
    (
      document.getElementById(`edit_notes_modal_${cat.id}`) as HTMLDialogElement
    )?.showModal();
  };

  const handleSaveNotes = () => {
    onUpdateNotes(cat.id, editedNotes);
    (
      document.getElementById(`edit_notes_modal_${cat.id}`) as HTMLDialogElement
    )?.close();
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={imageUrl}
          alt={`Cat with ID: ${cat.id}`}
          className="w-full h-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-center flex-wrap gap-2">
          {cat.tags && cat.tags.length > 0 ? (
            cat.tags.map((tag) => (
              <div key={tag} className="badge badge-outline">
                {tag}
              </div>
            ))
          ) : (
            <div className="badge badge-outline">No Tags</div>
          )}
        </div>
        <p>{cat.notes}</p>
        <div className="flex flex-row justify-end">
          <button
            className="btn btn-ghost"
            data-tip="Edit Notes"
            onClick={handleEditClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
              <path d="M13.5 6.5l4 4" />
            </svg>
          </button>
          <button className="btn btn-ghost" onClick={handleDeleteClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <dialog
          id={`confirm_delete_modal_${cat.id}`}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Deletion</h3>
            <p className="py-4">
              Are you sure you want to delete this cat? This action cannot be
              undone.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-error mr-2"
                  onClick={confirmDelete}
                  type="button"
                >
                  Delete
                </button>

                <button className="btn">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>

        <dialog
          id={`edit_notes_modal_${cat.id}`}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Edit Notes for {cat.id.substring(0, 8)}...
            </h3>
            <div className="py-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend sr-only">
                  Edit Cat Notes
                </legend>{" "}
                <textarea
                  className="textarea textarea-bordered h-24 w-full"
                  placeholder="Add notes to cat..."
                  value={editedNotes}
                  onChange={(e) => setEditedNotes(e.target.value)}
                ></textarea>
              </fieldset>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-primary mr-2"
                  onClick={handleSaveNotes}
                  type="button"
                >
                  Save Notes
                </button>

                <button className="btn">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
