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
      <div className="">
        <ul>
          
          { feed.map(action => (
            <li key={action.id}>
              <div className="flex flex-row mb-5">
                <div className="basis-1/5">
                  Icon
                </div>
                <div className="flex flex-col gap-2 basis-4/5 text-sm">
                  <div>
                    {action.howlongago}
                  </div>
                  <div>
                    {action.description}
                  </div>
                  <div className="rounded-md border border-gray-100 font-serif px-2">
                    {action.file}
                  </div>
                </div>
              </div>
            </li>
          ))}

        </ul>

      </div>
    );
  }

{/* <div className='min-h-40 font-mono flex flex-col px-8 pb-8'>
                <li key={project.id}>
                  <span className="text-2xl mb-5">
                    {project.name}
                  </span>
                  <p>
                    {project.description}
                  </p>
                  <Link to={project.route}>
                    <div className="hover:bg-white">
                      LINK
                    </div>
                  </Link>
                </li>
    </div> */}