import { NavLink } from "react-router-dom";
import "./sidebar.css";

// RouteLink renders the links for the site navigation links and external links
function RouteLink(props: {name:string, route:string}) {
    return (
      <div className="">

        <NavLink 
        className=""
        to={props.route}
        title={`Go to my ${props.name}`}
        >
          <div className="flex flex-row nav-link text-slate-500 font-semibold hover:text-blue-400 py-2 px-3 rounded-md">
          
            <div className="icon bg-gray-400 flex items-center justify-center rounded-full w-8 h-8 mr-3">
                
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

            <div className="pt-1 whitespace-nowrap">
              {props.name}
            </div>
          </div>
        </NavLink>
      </div>
    )
  }

export default function Sidebar() {
    return (
      <nav className="font-sans flex flex-col gap-1 mr-2 ml-2 pt-5" id="nav-bar">
          <RouteLink name="Home" route="/" />
          <RouteLink name="Find a tutor" route="/tutor"/>
          <RouteLink name="Messages" route="/messages"/>
          <RouteLink name="Library" route="/library"/>
          <div className="border-t border-gray-200 m-0 p-0"></div>
          <RouteLink name="Ask Shepherd" route="/ask_shepherd"/>
          <RouteLink name="Performance" route="/performance"/>
          <RouteLink name="Study Plans" route="/study_plans"/>
          <RouteLink name="Notes" route="/notes"/>
          <RouteLink name="Flahscards" route="/flashcards"/>
          <div className="border-t border-gray-200 my-0 mx-0"></div>
          <RouteLink name="Pinned Notes" route="/pinned_notes"/>
      </nav>
    );
  }
  