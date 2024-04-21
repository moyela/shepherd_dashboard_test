import { NavLink } from "react-router-dom";

import { useState } from "react";

// RouteLink renders the links for the site navigation links and external links
function RouteLink(props: {name:string, route:string}) {
    return (
      <div className=" nav-bar">
        <NavLink 
        className=" text-slate-700 hover:text-blue-400 py-1 px-4 rounded-md w-auto"
        to={props.route}
        title={`Go to my ${props.name}`}>

            {props.name}    
        </NavLink>
      </div>
    )
  }

export default function Sidebar() {
    const twitter = "./twitter_icon.svg"
    const x = "./twitter_x_icon.svg"
    const [twitterIcon, setTwitterIcon ] = useState(twitter)

    return (

    <div className="text-left flex">

        <nav className="font-sans flex flex-col gap-4 mx-5 pt-5">
            <RouteLink name="Home" route="/" />
            <RouteLink name="Find a tutor" route="/work" />
            <RouteLink name="Messages" route="/writing" />
            <RouteLink name="Library" route="/wor" />
            <RouteLink name="Ask Shepherd" route="/wor1" />
            <RouteLink name="Performance" route="/wor2" />
            <RouteLink name="Study Plans" route="/wor3" />
            <RouteLink name="Notes" route="/wor4" />
            <RouteLink name="Flahscards" route="/wor5" />
            <RouteLink name="Pinned Notes" route="/wor6" />
        </nav>
    </div>
    );
  }
  
