import { FC } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

interface Props {
  location: string
}

const textHandler = (location:string, loc:string) => {
  return location === loc ?
  <Link to="/archive">Archived Ideas</Link> :
  <Link to='/'>Current Ideas</Link>
}

const Header: FC<Props> = ({ location }) => {
  return (
    <header className="header-container">
      <Link to='/' className="banner-link">
        <div className="banner-container">
          <h1 className="banner">IdeaBoxTS</h1>
        </div>
      </Link>
      <div className="link-container">
        {textHandler(location, '/')}
      </div>
    </header>
  )
}

export default Header