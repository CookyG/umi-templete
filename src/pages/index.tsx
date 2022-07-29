import { Outlet } from '@umijs/max'

const Main: React.FC = () => {
  return (
    <div className="body">
      <Outlet />
    </div>
  )
}

export default Main
