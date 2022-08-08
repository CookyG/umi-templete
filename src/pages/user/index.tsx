import { Outlet } from '@umijs/max'

const User = () => {
  return (
    <div className="login w-full h-full">
      <Outlet />
    </div>
  )
}

export default User
