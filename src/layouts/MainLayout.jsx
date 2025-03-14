import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import Navber from '../components/navber/Navber';

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <div className="min-h-[calc(100vh)] w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
