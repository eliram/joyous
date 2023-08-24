import React, { useEffect, useState }  from 'react';
import './App.css';

interface TimeSlot {
  time: string;
  users: any[];
}

interface SlotsByDay {
  [day: string]: TimeSlot[];
}


function App() {
  const [slots, setSlots] = useState<SlotsByDay>({})
  const [days, setDays] = useState<string[]>([])

  const [availableTimes, setAvailableTimes] = useState<string[]>([])

  const daySelected = ( day: string ) => {
    let availableTimeSlots:TimeSlot[] = slots[day]
    const timeArray: string[] = availableTimeSlots.map(item => new Date(item.time).toISOString().substr(11, 8));
    setAvailableTimes(timeArray)
  }
  const DaysList = ({ days }: { days: string[] }) => (
  <div>
    {days.map(day => (
      <div key={day}>
          <button type="button" onClick={() => daySelected(day)}>{day}</button>
      </div>
    ))}
  </div>
  );

  const AvailableTimesList = ({times}: {times: string[]}) => (
  <div>
      {times.map(time => (
      <div key={time}>
          <button type="button" onClick={() => alert(time)}>{time}</button>
      </div>
      ))}
  </div>
  )
  
    useEffect(() => {
      setSlots(getSlots());
      // setSlots(JSON.parse('{"2023-08-25":[{"time":"2023-08-25T08:00:00.000Z","users":[]},{"time":"2023-08-25T08:30:00.000Z","users":[]},{"time":"2023-08-25T09:00:00.000Z","users":[]},{"time":"2023-08-25T09:30:00.000Z","users":[]},{"time":"2023-08-25T10:00:00.000Z","users":[]},{"time":"2023-08-25T10:30:00.000Z","users":[]},{"time":"2023-08-25T11:00:00.000Z","users":[]},{"time":"2023-08-25T11:30:00.000Z","users":[]},{"time":"2023-08-25T12:00:00.000Z","users":[]},{"time":"2023-08-25T12:30:00.000Z","users":[]},{"time":"2023-08-25T13:00:00.000Z","users":[]},{"time":"2023-08-25T13:30:00.000Z","users":[]},{"time":"2023-08-25T14:00:00.000Z","users":[]},{"time":"2023-08-25T14:30:00.000Z","users":[]},{"time":"2023-08-25T15:00:00.000Z","users":[]},{"time":"2023-08-25T15:30:00.000Z","users":[]}],"2023-08-28":[{"time":"2023-08-28T08:00:00.000Z","users":[]},{"time":"2023-08-28T08:30:00.000Z","users":[]},{"time":"2023-08-28T09:00:00.000Z","users":[]},{"time":"2023-08-28T10:00:00.000Z","users":[]},{"time":"2023-08-28T10:30:00.000Z","users":[]},{"time":"2023-08-28T11:00:00.000Z","users":[]},{"time":"2023-08-28T11:30:00.000Z","users":[]},{"time":"2023-08-28T12:00:00.000Z","users":[]},{"time":"2023-08-28T12:30:00.000Z","users":[]},{"time":"2023-08-28T13:00:00.000Z","users":[]},{"time":"2023-08-28T13:30:00.000Z","users":[]},{"time":"2023-08-28T14:00:00.000Z","users":[]},{"time":"2023-08-28T14:30:00.000Z","users":[]},{"time":"2023-08-28T15:00:00.000Z","users":[]},{"time":"2023-08-28T15:30:00.000Z","users":[]}],"2023-08-29":[{"time":"2023-08-29T08:00:00.000Z","users":[]},{"time":"2023-08-29T08:30:00.000Z","users":[]},{"time":"2023-08-29T09:00:00.000Z","users":[]},{"time":"2023-08-29T09:30:00.000Z","users":[]},{"time":"2023-08-29T10:00:00.000Z","users":[]},{"time":"2023-08-29T10:30:00.000Z","users":[]},{"time":"2023-08-29T11:00:00.000Z","users":[]},{"time":"2023-08-29T11:30:00.000Z","users":[]},{"time":"2023-08-29T12:00:00.000Z","users":[]},{"time":"2023-08-29T12:30:00.000Z","users":[]},{"time":"2023-08-29T13:00:00.000Z","users":[]},{"time":"2023-08-29T13:30:00.000Z","users":[]},{"time":"2023-08-29T14:00:00.000Z","users":[]},{"time":"2023-08-29T14:30:00.000Z","users":[]},{"time":"2023-08-29T15:00:00.000Z","users":[]},{"time":"2023-08-29T15:30:00.000Z","users":[]}],"2023-08-30":[{"time":"2023-08-30T08:00:00.000Z","users":[]},{"time":"2023-08-30T08:30:00.000Z","users":[]},{"time":"2023-08-30T09:00:00.000Z","users":[]},{"time":"2023-08-30T09:30:00.000Z","users":[]},{"time":"2023-08-30T10:00:00.000Z","users":[]},{"time":"2023-08-30T10:30:00.000Z","users":[]},{"time":"2023-08-30T11:00:00.000Z","users":[]},{"time":"2023-08-30T11:30:00.000Z","users":[]},{"time":"2023-08-30T12:00:00.000Z","users":[]},{"time":"2023-08-30T12:30:00.000Z","users":[]},{"time":"2023-08-30T13:00:00.000Z","users":[]},{"time":"2023-08-30T13:30:00.000Z","users":[]},{"time":"2023-08-30T14:00:00.000Z","users":[]},{"time":"2023-08-30T14:30:00.000Z","users":[]},{"time":"2023-08-30T15:00:00.000Z","users":[]},{"time":"2023-08-30T15:30:00.000Z","users":[]}],"2023-08-31":[{"time":"2023-08-31T08:00:00.000Z","users":[]},{"time":"2023-08-31T08:30:00.000Z","users":[]},{"time":"2023-08-31T09:00:00.000Z","users":[]},{"time":"2023-08-31T09:30:00.000Z","users":[]},{"time":"2023-08-31T10:00:00.000Z","users":[]},{"time":"2023-08-31T10:30:00.000Z","users":[]},{"time":"2023-08-31T11:00:00.000Z","users":[]},{"time":"2023-08-31T11:30:00.000Z","users":[]},{"time":"2023-08-31T12:00:00.000Z","users":[]},{"time":"2023-08-31T12:30:00.000Z","users":[]},{"time":"2023-08-31T13:00:00.000Z","users":[]},{"time":"2023-08-31T13:30:00.000Z","users":[]},{"time":"2023-08-31T14:00:00.000Z","users":[]},{"time":"2023-08-31T14:30:00.000Z","users":[]},{"time":"2023-08-31T15:00:00.000Z","users":[]},{"time":"2023-08-31T15:30:00.000Z","users":[]}]}'))
  },[])

  useEffect(() => {
    setDays(Object.keys(slots))
  }, [slots]);


  const getSlots = () => {
    return JSON.parse('{"2023-08-25":[{"time":"2023-08-25T08:00:00.000Z","users":[]},{"time":"2023-08-25T08:30:00.000Z","users":[]},{"time":"2023-08-25T09:00:00.000Z","users":[]},{"time":"2023-08-25T09:30:00.000Z","users":[]},{"time":"2023-08-25T10:00:00.000Z","users":[]},{"time":"2023-08-25T10:30:00.000Z","users":[]},{"time":"2023-08-25T11:00:00.000Z","users":[]},{"time":"2023-08-25T11:30:00.000Z","users":[]},{"time":"2023-08-25T12:00:00.000Z","users":[]},{"time":"2023-08-25T12:30:00.000Z","users":[]},{"time":"2023-08-25T13:00:00.000Z","users":[]},{"time":"2023-08-25T13:30:00.000Z","users":[]},{"time":"2023-08-25T14:00:00.000Z","users":[]},{"time":"2023-08-25T14:30:00.000Z","users":[]},{"time":"2023-08-25T15:00:00.000Z","users":[]},{"time":"2023-08-25T15:30:00.000Z","users":[]}],"2023-08-28":[{"time":"2023-08-28T08:00:00.000Z","users":[]},{"time":"2023-08-28T08:30:00.000Z","users":[]},{"time":"2023-08-28T09:00:00.000Z","users":[]},{"time":"2023-08-28T10:00:00.000Z","users":[]},{"time":"2023-08-28T10:30:00.000Z","users":[]},{"time":"2023-08-28T11:00:00.000Z","users":[]},{"time":"2023-08-28T11:30:00.000Z","users":[]},{"time":"2023-08-28T12:00:00.000Z","users":[]},{"time":"2023-08-28T12:30:00.000Z","users":[]},{"time":"2023-08-28T13:00:00.000Z","users":[]},{"time":"2023-08-28T13:30:00.000Z","users":[]},{"time":"2023-08-28T14:00:00.000Z","users":[]},{"time":"2023-08-28T14:30:00.000Z","users":[]},{"time":"2023-08-28T15:00:00.000Z","users":[]},{"time":"2023-08-28T15:30:00.000Z","users":[]}],"2023-08-29":[{"time":"2023-08-29T08:00:00.000Z","users":[]},{"time":"2023-08-29T08:30:00.000Z","users":[]},{"time":"2023-08-29T09:00:00.000Z","users":[]},{"time":"2023-08-29T09:30:00.000Z","users":[]},{"time":"2023-08-29T10:00:00.000Z","users":[]},{"time":"2023-08-29T10:30:00.000Z","users":[]},{"time":"2023-08-29T11:00:00.000Z","users":[]},{"time":"2023-08-29T11:30:00.000Z","users":[]},{"time":"2023-08-29T12:00:00.000Z","users":[]},{"time":"2023-08-29T12:30:00.000Z","users":[]},{"time":"2023-08-29T13:00:00.000Z","users":[]},{"time":"2023-08-29T13:30:00.000Z","users":[]},{"time":"2023-08-29T14:00:00.000Z","users":[]},{"time":"2023-08-29T14:30:00.000Z","users":[]},{"time":"2023-08-29T15:00:00.000Z","users":[]},{"time":"2023-08-29T15:30:00.000Z","users":[]}],"2023-08-30":[{"time":"2023-08-30T08:00:00.000Z","users":[]},{"time":"2023-08-30T08:30:00.000Z","users":[]},{"time":"2023-08-30T09:00:00.000Z","users":[]},{"time":"2023-08-30T09:30:00.000Z","users":[]},{"time":"2023-08-30T10:00:00.000Z","users":[]},{"time":"2023-08-30T10:30:00.000Z","users":[]},{"time":"2023-08-30T11:00:00.000Z","users":[]},{"time":"2023-08-30T11:30:00.000Z","users":[]},{"time":"2023-08-30T12:00:00.000Z","users":[]},{"time":"2023-08-30T12:30:00.000Z","users":[]},{"time":"2023-08-30T13:00:00.000Z","users":[]},{"time":"2023-08-30T13:30:00.000Z","users":[]},{"time":"2023-08-30T14:00:00.000Z","users":[]},{"time":"2023-08-30T14:30:00.000Z","users":[]},{"time":"2023-08-30T15:00:00.000Z","users":[]},{"time":"2023-08-30T15:30:00.000Z","users":[]}],"2023-08-31":[{"time":"2023-08-31T08:00:00.000Z","users":[]},{"time":"2023-08-31T08:30:00.000Z","users":[]},{"time":"2023-08-31T09:00:00.000Z","users":[]},{"time":"2023-08-31T09:30:00.000Z","users":[]},{"time":"2023-08-31T10:00:00.000Z","users":[]},{"time":"2023-08-31T10:30:00.000Z","users":[]},{"time":"2023-08-31T11:00:00.000Z","users":[]},{"time":"2023-08-31T11:30:00.000Z","users":[]},{"time":"2023-08-31T12:00:00.000Z","users":[]},{"time":"2023-08-31T12:30:00.000Z","users":[]},{"time":"2023-08-31T13:00:00.000Z","users":[]},{"time":"2023-08-31T13:30:00.000Z","users":[]},{"time":"2023-08-31T14:00:00.000Z","users":[]},{"time":"2023-08-31T14:30:00.000Z","users":[]},{"time":"2023-08-31T15:00:00.000Z","users":[]},{"time":"2023-08-31T15:30:00.000Z","users":[]}]}');
    //TODO: need to see why the api call isn't working.
    
  // const response = await fetch('http://localhost:3002/users?apiKey=cal_7f67d3c81e02a5db2e9bdd585da9ef68', {
  //   method: 'GET',
  //   headers: {
  //     'content-type': 'application/json;charset=UTF-8',
  //   },
  // })
  // const res = await response.json()
  // console.log(res)
  }

  getSlots();

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <td>
              <DaysList days={days} />
            </td>
            <td>
              {availableTimes.length > 0 &&
                <AvailableTimesList times={availableTimes} />
            }

            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
