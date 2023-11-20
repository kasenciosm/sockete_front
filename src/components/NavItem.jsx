import { NavLink } from "react-router-dom"

function NavItem({ content, href }) {
    return (
        <li className='px-2 py-2 text-lg font-semibold'>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-slate-900"
                }
                to={href}>{content}</NavLink>
        </li>
    )
}

export default NavItem