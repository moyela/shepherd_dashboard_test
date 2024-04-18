
export default function Dashboard() {
    return (
        <div className="flex flex-col">  
            {/*Greeting section*/}
            <div className=""> 
                <p>
                    Hi Liam, Welcome back!
                </p>

            </div>

            {/*Weekly summary and quiz performance*/}
            <div>
                <p>
                    Weekly Summary
                </p>
                <p>
                    Quiz Performance
                </p>
                
            </div>

            {/*Activity feed and schedule*/}
            <div>
                <p>
                    Activity feed
                </p>
                <p>
                    Schedule
                </p>
            </div>
        </div>

    )
}