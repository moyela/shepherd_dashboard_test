import './schedule.css'; // Import CSS for styling
import { useState, useEffect } from "react";

export default function Schedule()  {
    const [weekDates, setWeekDates] = useState<Date[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Function to get the current week's dates ----------------------------------------------------------
    useEffect(() => {
      const getCurrentWeekDates = (): Date[] => {
        const today = new Date();
        const currentDay = today.getDay(); // Get the current day (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
        const startDate = new Date(today); // Copy the current date
        startDate.setDate(startDate.getDate() - currentDay); // Set startDate to Sunday of the current week
  
        const weekDates: Date[] = [];
        for (let i = 0; i < 7; i++) {
          const currentDate = new Date(startDate);
          currentDate.setDate(currentDate.getDate() + i); // Increment the date to get each day of the week
          weekDates.push(currentDate);
        }
        return weekDates;
      };
  
      setWeekDates(getCurrentWeekDates());
      setSelectedDate(new Date()); // select the present day when component renders initially
    }, []); 
    // ---------------------------------------------------------------
   
    const getCurrentMonth = () => {
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
      
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
      
        return months[currentMonth];
      };

    //   handle clicking on dates 
    const handleDateClick = (date: Date) => {
        setSelectedDate(date === selectedDate ? null : date); // Toggle selection
      };

    return (
        <div>
            <div className="my-2 text-slate-500">
                {getCurrentMonth()}
            </div>
            <div className="flex flex-row justify-between">

                {weekDates.map((date, index) => (
                    <div key={index} 
                    className={`flex flex-col calendar-date ${selectedDate && selectedDate.getTime() === date.getTime() ? 'selected' : ''}`}
                    onClick={() => handleDateClick(date)}
                    >
                        <div className="mx-auto text-xl">
                            {date.getDate()}
                        </div>
                        <div className="text-xs text-slate-400 mx-auto uppercase">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })} 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 
   
