import { useState } from "react";
export default function NewReminder(): JSX.Element {
  const [title, setTitle] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="title"></label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          type="text"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary my-3 rounded-pill">
          Add Reminder
        </button>
      </form>
    </div>
  );
}
