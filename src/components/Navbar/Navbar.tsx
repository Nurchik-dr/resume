
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar-main">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>About</NavLink>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>SKILLS & ABILITIES</NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Projects</NavLink>
        </nav>
    )
}

export default Navbar