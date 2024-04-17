import { navItems } from 'src/utils/NavigationList';
import { Outlet } from 'react-router-dom';
import Navigation from 'src/components/Navigation/Navigation';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Container from 'src/components/core/Container/Container';

const Layout = () => {
  return (
    <Container>
      <Sidebar>
        <h2>Profile info</h2>
        <Navigation navItems={navItems} />
      </Sidebar>

      <Outlet />
    </Container>
  );
};

export default Layout;
