import { NavLink } from "react-router-dom";
import "./sidebar.css"
// import { useState } from "react";

// RouteLink renders the links for the site navigation links and external links
function RouteLink(props: {name:string, route:string}) {
    return (
      <div className="">
        <NavLink 
        className=" text-slate-500 text-sm hover:text-blue-400 py-1 px-2 rounded-md"
        to={props.route}
        title={`Go to my ${props.name}`}>

            {props.name}    
        </NavLink>
      </div>
    )
  }

export default function Sidebar() {

    return (
      <nav className="font-sans flex flex-col gap-4 mx-5 pt-5" id="nav-bar">
          <RouteLink name="Home" route="/" />
          <RouteLink name="Find a tutor" route="/tutor" />
          <RouteLink name="Messages" route="/messages" />
          <RouteLink name="Library" route="/library" />
          <RouteLink name="Ask Shepherd" route="/ask_shepherd" />
          <RouteLink name="Performance" route="/performance" />
          <RouteLink name="Study Plans" route="/study_plans" />
          <RouteLink name="Notes" route="/notes" />
          <RouteLink name="Flahscards" route="/flashcards" />
          <RouteLink name="Pinned Notes" route="/pinned_notes" />
      </nav>
    );
  }
  
