import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import Navber from '../components/navber/Navber';

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <div className="min-h-[calc(100vh)] w-full mx-auto pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
