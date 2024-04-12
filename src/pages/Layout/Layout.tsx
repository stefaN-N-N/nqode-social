import { Outlet } from 'react-router-dom';
import Container from 'src/components/core/Container/Container';

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;
