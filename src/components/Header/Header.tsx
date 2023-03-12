import { FC } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header: FC = () => {
  return (
    <header className="header-container">
      <Link to='/' className="banner-link">
        <div className="banner-container">
          <h1 className="banner">IdeaBoxTS</h1>
        </div>
      </Link>
      <div className="link-container">
        <Link to="/archive">Archive View</Link>
      </div>
    </header>
  )
}

export default Header