//import { useState } from "react";
//import { Link } from "react-router-dom";
//import "./index.css";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

// const SideNav1 = () => {
//   const [toggleClass, setToggle] = useState("close-nav");
//   return (
//     <>
//       <div id="mySidenav" className={`sidenav ${toggleClass}`}>
//         <div
//           className="closebtn"
//           onClick={() => {
//             setToggle("close-nav");
//           }}
//         >
//           &times;
//         </div>
//         <Link to="/home">Home</Link>
//       </div>

//       <div
//         style={{
//           fontSize: "20px",
//           cursor: "pointer",
//           background: "#6f6f6f",
//           color: "white",
//           position: "fixed",
//           zIndex: "1000",
//           width: "100%",
//           padding: "5px"
//         }}
//         onClick={() => {
//           setToggle("open-nav");
//         }}
//       >
//         &#9776; &nbsp; Shan Map Live
//       </div>
//     </>
//   );
// };


const SideNav = () => {
  return (
    <>
      <Navigation
          // you can use your own router's api to get pathname
          activeItemId="/management/members"
          onSelect={({itemId}) => {
            // maybe push to the route
          }}
          items={[
            {
              title: 'Dashboard',
              itemId: '/dashboard',
              // you can use your own custom Icon component as well
              // icon is optional
              elemBefore: () => <i class="fa fa-home"></i>,
            },
            {
              title: 'Management',
              itemId: '/management',
              elemBefore: () => <i class="fa fa-home"></i>,
              subNav: [
                {
                  title: 'Projects',
                  itemId: '/management/projects',
                },
                {
                  title: 'Members',
                  itemId: '/management/members',
                },
              ],
            },
            {
              title: 'Another Item',
              itemId: '/another',
              subNav: [
                {
                  title: 'Teams',
                  itemId: '/management/teams',
                },
              ],
            },
          ]}
        />
    </>
  );
};

export default SideNav;
//export default SideNav1;
