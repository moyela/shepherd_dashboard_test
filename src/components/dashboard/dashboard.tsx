import ActivityFeed from "./activity_feed/activity_feed";
import QuizPerformanceChart from "./quiz_performance/quiz_performance";
import Schedule from "./schedule/schedule"
import WeeklySummaryCarousel from "./weekly_summary/weekly_summary_carousel";

export default function Dashboard() {

  // get date option
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', // Display full name of the day of the week
    month: 'long',   // Display full name of the month
    day: 'numeric',  // Display day of the month
  };
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const dateString = currentDate.toLocaleString(undefined, options);
  // ----------------

    return (
      <div className='p-8 flex flex-col gap-5'>
        <div>
          <span className="font-semibold text-2xl">
            Hi Liam, Welcome back!
          </span>
          <p className="text-slate-500">
            🌥️ • {dateString} • {hours}:{minutes}
          </p>
        </div>

        {/* Weekly summary and Quiz performance */}
        <div className="flex flex-row gap-5">

          <div className="basis-5/12 flex flex-col border border-gray-200 rounded-md">
          {/* Weekly summary card */}
            
            <div className="mb-2 font-semibold text-lg px-5 pt-2">
              Weekly Summary
            </div>

            <div className="flex flex-row mb-3 px-5">
            {/* Cards studied and Time studied suboptions*/}

              <div className="basis-1/2 flex flex-col">
                <div className="text-slate-500 text-sm">
                  Cards studied
                </div>
                <div>
                  <span className="text-xl font-semibold mr-1">
                    0 
                  </span> 
                  <span className="text-slate-500 text-sm">
                    cards
                  </span>
                </div>
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="text-slate-500 text-sm">
                    Time studied
                  </div>
                <div className="flex flex-row gap-2">
                  <div>
                    <span className="text-xl font-semibold mr-1">
                      05
                    </span> 
                    <span className="text-slate-500 text-sm">
                      hrs
                    </span> 
                  </div>
                  <div>
                    <span className="text-xl font-semibold mr-1">
                      30 
                    </span>
                    <span className="text-slate-500 text-sm">
                      minutes
                    </span> 
                  </div>
                
                </div>
              </div>
            {/* END of Cards studied and Time studied suboptions*/}
            </div>

            <div className="flex flex-row my-2 px-5 border-t border-slate-200">
            {/* Flashcard Performance and Carousel */}

              <div className="basis-1/2 border-r my-0 border-slate-200 pr-2">
              {/* Flashcard performance */}
                <div className="mb-1 mt-3 text-slate-500 text-sm">
                  Flashcard performance
                </div>
                <div className="flex flex-row justify-between text-slate-500 text-sm">
                  <span>Got it right</span>
                  <span>40%</span>
                </div>
                <div className="flex flex-row justify-between text-slate-500 text-sm">
                  <span>Didn't remember</span>
                  <span>40%</span>
                </div>
                <div className="flex flex-row justify-between text-slate-500 text-sm">
                  <span>Got it wrong</span>
                  <span>20%</span>
                </div>

              </div>
              <div className="basis-1/2 rounded-md">
              {/* Should be a Carousel of streaks */}
                <WeeklySummaryCarousel/>
              </div>
           
            </div>

            <div className="bg-gray-100 rounded px-4 py-1">
              <span className="text-slate-500 text-sm">Current streak:</span> <span className="font-semibold">20 days</span>
            </div>
          </div>
          

          <div className="basis-7/12 px-5 py-2 border border-gray-200 bg-gray-100 rounded-md">
          {/* Quiz performance sections */}
            <span className="font-semibold text-lg">
              Quiz Performance
            </span>
            <div>
              <QuizPerformanceChart/>
            </div>
          </div>

        {/* END of Weekly summary and Quiz performance row*/}
        </div>

        <div className="flex flex-row gap-5">
        {/* Activity feed and Schedule section */}

          <div className="basis-3/5 flex flex-col px-5 py-2 border border-gray-200 rounded-md">
          {/* Activity feed half */}
            <div className="flex flex-row justify-between mb-2">
              <div className="font-semibold text-lg">
              ⚡ Activity Feed
              </div>
              <div className="border border-gray-200 rounded-md px-2">
                <button>
                  This week
                </button>
              </div>
            </div>
            
            <ActivityFeed/>
          </div>
          <div className="basis-2/5 border flec flex-col border-gray-200 rounded-md px-5 py-2">
            <div className="font-semibold text-lg">
            ⏲️ Schedule
            </div>
            <div>
              <Schedule/>
            </div>
          </div>
        </div>

        
      </div>


    );
  }