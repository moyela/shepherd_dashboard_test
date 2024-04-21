import { NavLink } from "react-router-dom";
// import { ResumeIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "../assets";
import { useState, useEffect } from "react";

// RouteLink renders the links for the site navigation links and external links
function RouteLink(props: {name:string, route:string}) {
    return (
      <div className="">
        <NavLink 
        className="text-l hover:text-lime-700 py-1 px-1     rounded-2xl"
        to={props.route}
        title={`Go to my ${props.name}`}>

            {props.name}    
        </NavLink>
      </div>
    )
  }

// ImageLink renders the external profile links to socials and github etc
function ImageLink(props: {name:string, address:string, img_src:string, img_alt:string }) {
    return (
        <div className=" rounded-sm">
  
        <a className="" 
        href={props.address} 
        title={`Go to my ${props.name}`}
        target="_blank">
            
           <img 
           src={props.img_src} 
           alt={props.img_alt} 
           className="header-external-link"
           />
        </a>
    </div>
    )
}


export default function Sidebar() {
    const twitter = "./twitter_icon.svg"
    const x = "./twitter_x_icon.svg"
    const [twitterIcon, setTwitterIcon ] = useState(twitter)

    return (

    <div className="text-left flex border-red-600">

        <nav className="font-mono flex flex-col gap-4 mx-5 pt-5 " id="nav-bar">
            <RouteLink name="Home" route="/" />
            <RouteLink name="Find a tutor" route="/work" />
            <RouteLink name="Messages" route="/writing" />
            <RouteLink name="Library" route="/" />
            <RouteLink name="Ask Shepherd" route="/" />
            <RouteLink name="Performance" route="/" />
            <RouteLink name="Study Plans" route="/" />
            <RouteLink name="Notes" route="/" />
            <RouteLink name="Flahscards" route="/" />
            <RouteLink name="Pinned Notes" route="/" />
        </nav>
    </div>
    );
  }
  

// template for svg links kept below:

// function SVGLink(props: {name:string, address:string, whichicon:string}) {

//     let icon

//     switch (props.whichicon) {
//         case 'resume':
//             icon = <ResumeIcon />
//             break;
//         case 'linkedin':
//             icon = <LinkedinIcon/>
//             break;
//         case 'github':
//             icon = <GithubIcon/>
//             break;
//         case 'twitter':
//             icon = <TwitterIcon/>
//             break;
//         case 'instagram':
//             icon = <InstagramIcon/>
//             break;
//     }

//     return (
//         <div className="h-full">
  
//         <a className="" 
//         href={props.address} 
//         title={`Go to my ${props.name}`}
//         target="_blank"
//         >
//             <div style={{color:'red'}} className="header-external-link  hover:h-7 hover:fill-white">
//                 {icon}
//             </div>
//         </a>
//     </div>
//     )
// }
