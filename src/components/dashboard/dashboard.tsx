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
      <div className='pt-4 px-4 sm:p-8 flex flex-col gap-5'>
        <div className="whitespace-nowrap">
          <span className="font-semibold text-2xl">
            Hi Liam, Welcome back!
          </span>
          <p className="text-slate-500">
            🌥️ • {dateString} • {hours}:{minutes}
          </p>
        </div>

        {/* Weekly summary and Quiz performance */}
        <div className="flex flex-col sm:flex-row gap-5">

          <div className=" flex flex-col border border-gray-200 rounded-md min-w-96">
          {/* Weekly summary card */}
            
            <div className="mb-2 font-semibold text-lg px-5 pt-2">
            📋 Weekly Summary
            </div>

            <div className="flex flex-row my-1 px-5">
            {/* Cards studied and Time studied suboptions*/}

              <div className="basis-1/2 flex flex-col">
                <div className="text-slate-500 text-sm">
                  Cards studied
                </div>
                <div>
                  <span className="text-2xl font-semibold mr-1">
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
                    <span className="text-2xl font-semibold mr-1">
                      05
                    </span> 
                    <span className="text-slate-500 text-sm">
                      hrs
                    </span> 
                  </div>
                  <div>
                    <span className="text-2xl font-semibold mr-1">
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

            <div className="flex flex-row my-2 pl-5 border-t border-slate-200">
            {/* Flashcard Performance and Carousel */}

              <div className=" border-r py-5 border-slate-200 pr-2 min-w-48">
              {/* Flashcard performance */}
                <div className="mb-3 text-slate-500 text-sm">
                  Flashcard performance
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between text-slate-500 text-sm ">
                    <span>🟩  Got it right</span>
                    <span>40%</span>
                  </div>
                  <div className="flex flex-row justify-between text-slate-500 text-sm">
                    <span>🟨  Didn't remember</span>
                    <span>40%</span>
                  </div>
                  <div className="flex flex-row justify-between text-slate-500 text-sm">
                    <span>🟥  Got it wrong</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>

              <div className="min-w-32 max-w- overflow-hidden">
              {/* Should be a Carousel of streaks */}
                <WeeklySummaryCarousel/>
              </div>
            </div>

            <div className="bg-gray-100 rounded px-4 py-1 my-0  ">
              <span className="text-slate-500 text-sm">Current streak:</span> <span className="font-semibold">20 days</span>
            </div>
          </div>
          

          <div className="px-5 py-2 border border-gray-200 bg-gray-100 rounded-md min-w-96">
          {/* Quiz performance sections */}
            <span className="font-semibold text-lg">
            📚 Quiz Performance
            </span>
            <div>
              <QuizPerformanceChart/>
            </div>
          </div>

        {/* END of Weekly summary and Quiz performance row*/}
        </div>



        <div className="flex flex-col md:flex-row gap-5">
        {/* Activity feed and Schedule section */}


          <div className="flex flex-col border border-gray-200 rounded-md min-w-96 md:min-w-max">
          {/* Activity feed half */}
            <div className="flex flex-row justify-between px-5 py-3 border-b border-slate-200">
              <div className="font-semibold text-lg">
              ⚡ Activity Feed
              </div>
              <div className="border border-gray-200 rounded-md px-2">
                <button>
                  This week
                </button>
              </div>
            </div>
            <div className="px-5 py-3">
              <ActivityFeed/>
            </div>
          </div>



          <div className="border flex flex-col border-gray-200 rounded-md min-w-96">
            <div className="font-semibold text-lg px-5 py-3 border-b border-slate-200">
            ⏲️ Schedule
            </div>
            <div className="px-5 py-3">
              <Schedule/>
            </div>
            <div>
              <div className="px-5 py-2 text-slate-500">
                Upcoming events
              </div>
              <div className="px-5 py-2 text-xs text-slate-500">
                Today
              </div>
              <div className="px-5 py-3 mb-4 flex flex-col gap-1 border-l-4 border-orange-400 bg-orange-50">
                <div className="text-lg font-semibold">
                  Chemistry lesson with Leslie Peters
                </div>
                <div className=" text-slate-500 text-xs">
                  15:30 {'->'} 16:30 (1hr)
                </div>
              </div>
              <div className="px-5 py-3 flex flex-col gap-1 border-l-4 border-green-400 bg-green-50">
                <div className="text-lg font-semibold">
                  Geography lesson with Chiji Makainde
                </div>
                <div className=" text-slate-500 text-xs">
                  17:00 {'->'} 18:00 (1hr)
                </div>
              </div>
            </div>
          


          </div>
        </div>
      </div>


    );
  }