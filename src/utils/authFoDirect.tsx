import { Link, useLocation, Outlet } from '@umijs/max'

const MATCHPATHNAMES = ['/login']

const Root: React.FC = () => {
  const location = useLocation()

  const token = window.localStorage.getItem('token')

  if (token) {
    return MATCHPATHNAMES.includes(location.pathname) ? <Link to="/" /> : <Outlet />
  } else {
    return MATCHPATHNAMES.includes(location.pathname) ? <Outlet /> : <Link to="/" />
  }
}

export default Root
