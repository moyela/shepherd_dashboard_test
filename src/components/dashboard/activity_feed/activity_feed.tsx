export default function ActivityFeed() {

    const feed = [
      {
        id: 1,
        file: 'documentationtitle.pdf',
        description: `You uploaded documentationtitle.pdf to your workspace`,
        howlongago: "2 hours ago",
      },
      {
        id: 2,
        file: 'favouriteartistlist.pdf',  
        description: "You created a new note favouriteartist.pdf",
        howlongago: "7 hours ago",
      },
      {
        id: 3,
        file: 'documenttitleflash',  
        description: "You created a new flashcard deck documenttitleflash...",
        howlongago: "Yesterday • 13:00",
      },
      {
        id: 4,
        file: 'favouriteartistlist.pdf',  
        description: "You created a new note favouriteartist.pdf",
        howlongago: "17th May 2023 • 13:00",
      }
    ]

    return (
      <ul>
        
        { feed.map(action => (
          <li key={action.id}>
            <div className="flex flex-row mb-5 gap-5">

              <div className=" bg-yellow-200 text-slate-400 flex items-center justify-center rounded-full w-8 h-8">
                  
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                      <path
                          fillRule="evenodd"
                          d="M4.293 7.293a1 1 0 011.414 0L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                          clipRule="evenodd"
                      />
                  </svg>
              </div>
              

              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <div>
                  {action.howlongago}
                </div>
                <div>
                  {action.description}
                </div>
                <div className="rounded-md border border-gray-100 font-serif pl-2 max-w-40">
                  {action.file}
                </div>
              </div>
            </div>
          </li>
        ))}

      </ul>
    );
  }
