
export default function Home() {

  // get the current date from the date primitve and rebuild it based on mockup
  const currentDate = new Date();

  // Define options for formatting the date
  const options = {
    weekday: 'long', // Display full name of the day of the week
    month: 'long',   // Display full name of the month
    day: 'numeric',  // Display day of the month
    year: 'numeric'  // Display the year
  };

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  // Convert the Date object to a localized string
  const dateString = currentDate.toLocaleString(undefined, options);


    return (
      <div className=' px-10 py-10 font-sans tracking-wide bg-green-100 flex flex-col gap-7'>
        <div>
          Hi Liam, Welcome back!
          <p>
            • {dateString} • {hours}:{minutes}
          </p>
        </div>

        {/* Weekly summary and Quiz performance */}
        <div className="flex flex-row">
          <div className="basis-1/2 flex flex-col">
             {/* Weekly summary card */}
            <span>
              Weekly Summary
            </span>
            <div className="flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div>
                  Cards studied
                </div>
                <div>
                  <span>0</span> cards
                </div>
              </div>
              <div className="basis-1/2 flex flex-col">
                <div>
                    Time studied
                  </div>
                <div>
                  <span>05</span> hrs <span>30</span> minutes
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
             {/* Quiz performance card */}
            Quiz Performance
          </div>
        </div>

        
      </div>


    );
  }