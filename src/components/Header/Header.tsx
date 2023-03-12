import { FC } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header: FC = () => {
  return (
    <header className="header-container">
      <div className="banner-container">
        <h1 className="banner">IdeaBoxTS</h1>
      </div>
      <div className="link-container">
        <Link to="/archive">Archive View</Link>
      </div>
    </header>
  )
}

export default Header