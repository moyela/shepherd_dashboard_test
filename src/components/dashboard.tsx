import ActivityFeed from "./activity_feed";

export default function Dashboard() {

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
      <div className=' px-5 py-10 font-sans tracking-wide flex flex-col gap-7'>
        <div>
          Hi Liam, Welcome back!
          <p>
            • {dateString} • {hours}:{minutes}
          </p>
        </div>

        {/* Weekly summary and Quiz performance */}
        <div className="flex flex-row gap-2">

          <div className="basis-1/2 flex flex-col px-5 py-2 bg-red-500">
          {/* Weekly summary card */}
            
            <div className="mb-2">
              Weekly Summary
            </div>

            <div className="flex flex-row mb-3">
            {/* Cards studied and Time studied suboptions*/}

              <div className="basis-1/2 flex flex-col">
                <div>
                  Cards studied
                </div>
                <div>
                  <span className="text-xl font-semibold">
                    0
                  </span> cards
                </div>
              </div>
              <div className="basis-1/2 flex flex-col">
                <div>
                    Time studied
                  </div>
                <div className="flex flex-row gap-2">
                  <div>
                    <span className="text-xl font-semibold">
                      05
                    </span> hrs 
                  </div>
                  <div>
                    <span className="text-xl font-semibold">
                      30 
                    </span> minutes
                  </div>
                
                </div>
              </div>
            {/* END of Cards studied and Time studied suboptions*/}
            </div>

            <div className="flex flex-row gap-5 mb-5">
            {/* Flashcard Performance and Carousel */}

              <div className="basis-1/2">
              {/* Flashcard performance */}
                <div className="mb-1">
                  Flashcard performance
                </div>
                <div className="flex flex-row justify-between">
                  <span>Got it right</span>
                  <span>40%</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Didn't remember</span>
                  <span>40%</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Got it wrong</span>
                  <span>20%</span>
                </div>

              </div>
              <div className="basis-1/2 bg-black">
              {/* BLACK SQUARE => should be a Carousel of streaks */}
                
              </div>
           
            </div>

            <div>
              Current streak: <span className="font-semibold">20 days</span>
            </div>
          </div>
          

          <div className="basis-1/2 px-5 py-2 bg-blue-500">
          {/* Quiz performance sections */}

            Quiz Performance
          </div>

        {/* END of Weekly summary and Quiz performance row*/}
        </div>

        <div className="flex flex-row gap-2">
        {/* Activity feed and Schedule section */}

          <div className="basis-3/5 bg-yellow-300 flex flex-col px-5 py-2">
          {/* Activity feed half */}
            <div className="flex flex-row justify-between mb-2">
              <div>
                • Activity feed
              </div>
              <div className="border border-gray-100 rounded-md px-2">
                <button>
                  This week
                </button>
              </div>
            </div>
            
            <ActivityFeed/>
          </div>
          <div className="basis-2/5 bg-green-300">
            Schedule
          </div>
        </div>

        
      </div>


    );
  }