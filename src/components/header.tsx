import { NavLink } from "react-router-dom";
// import { ResumeIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "../assets";
import { useState, useEffect } from "react";

// RouteLink renders the links for the site navigation links and external links
function RouteLink(props: {name:string, route:string}) {
    return (
      <div className="">
        <NavLink 
        className="text-xl hover:text-lime-700 py-1 px-3 rounded-2xl"
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


export default function Header() {
    const twitter = "./twitter_icon.svg"
    const x = "./twitter_x_icon.svg"
    const [twitterIcon, setTwitterIcon ] = useState(twitter)

    useEffect(() => {
        // Set up an interval to update the prop every second
        const intervalId = setInterval(() => {
            let newValue

            if (twitterIcon === twitter) {
                newValue = x
            }
            else {
                newValue = twitter
            }
          
          // Update the state with the new value
          setTwitterIcon(newValue);
        }, 1000); // Interval in milliseconds (1000 milliseconds = 1 second)
    
        // Clear the interval when the component unmounts or when needed
        return () => clearInterval(intervalId);
      },); // Empty dependency array to run the effect only once on mount

    return (

    <div className="text-left flex flex-col border-red-600">
        <div className="flex justify-between px-20 pb-5">
            <div className="pt-11">
                <p className="font-mono font-semibold text-4xl">
                    Wemi Moyela
                </p>
                <p className="font-mono font-thin">
                    Software Engineer
                </p>
                <p className="font-mono text-green-700 ">
                    wemimoyela |at| gmail |dot| com
                </p>
                <div className="flex gap-5 mt-2">
                    {/* This is the external link div with links to LinekdIn, GitHub, etc */}
                    <ImageLink 
                        name="Resume" 
                        address="https://docs.google.com/document/d/19n8JIwD1Jv7BMvNPfM_93ACNE-QXsCCNJTb_Z-4LN0Y/edit?usp=sharing"
                        img_src="./resume_icon.svg"
                        img_alt="Resume" 
                    />
                    <ImageLink 
                        name="GitHub profile" 
                        address="https://www.github.com/moyela"
                        img_src="./github_icon.svg"
                        img_alt="Github" 
                    />
                    <ImageLink 
                        name="LinkedIn profile" 
                        address="https://www.linkedin.com/in/moyela"
                        img_src="./linkedin_icon.svg"
                        img_alt="LinkedIn" 
                    />
                    <ImageLink 
                        name="Instagram profile" 
                        address="https://www.instagram.com/wemimoyela"
                        img_src="./instagram_icon.svg"
                        img_alt="Instagram" 
                    />
                    <ImageLink 
                        name="Bluesky profile" 
                        address="https://bsky.app/profile/moyela.com"
                        img_src="./bluesky_icon.svg"
                        img_alt="Bluesky" 
                    />
                    <ImageLink 
                        name="Twitter/X profile" 
                        address="https://www.twitter.com/wemimoyela"
                        img_src={twitterIcon}
                        img_alt="Twitter" 
                    />
                </div>
            </div>
            <div className="">
                <img className="header-photo-circle" src="./moyela_green.png"/>
            </div>
        </div>

        <nav className="font-mono flex gap-20 px-20 mx-auto mt-5" id="nav-bar">
                    <RouteLink name="HOME" route="/" />
                    <RouteLink name="WORK" route="/work" />
                    <RouteLink name="WRITING" route="/writing" />
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
