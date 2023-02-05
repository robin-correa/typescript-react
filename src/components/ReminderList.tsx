import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
}

export default function ReminderList({ items }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}
