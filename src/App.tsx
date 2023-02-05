import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import ReminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };

  return (
    <div className="App">
      <NewReminder />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
