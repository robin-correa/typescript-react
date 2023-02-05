import { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

export default function NewReminder({
  onAddReminder,
}: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      return;
    }

    onAddReminder(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="title"></label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          type="text"
          className="form-control"
          autoFocus
        />
        <button type="submit" className="btn btn-primary my-3 rounded-pill">
          Add Reminder
        </button>
      </form>
    </div>
  );
}
