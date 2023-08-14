import PropTypes from "prop-types"
import Button from "./Button"

import { useLocation } from "react-router-dom"

const Header = ({ title, onAdd, showAdd }) => {
   const location = useLocation()

   return (
      <header className="header">
         <h1>{title}</h1>

         {location.pathname === "/" && (
            <Button
               color={showAdd ? "red" : "green"}
               text={showAdd ? "Close" : "Show"}
               onClick={onAdd}
            />
         )}

         {/* <Button color="blue" text="Hello1" />
         <Button color="red" text="Hello2" /> */}
      </header>
   )
}
Header.defaultProps = {
   title: "Task Tracker",
}
Header.propTypes = {
   title: PropTypes.string.isRequired,
}
// CSS in JS
// const headingStyle = {
//    color: "blue",
//    backgroundColor: "black",
// }

export default Header
