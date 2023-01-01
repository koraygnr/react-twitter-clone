import Layout from './components/Layout/Layout';
import useWindowSize from './hooks/useWindowSize';
import breakPoints from './constants/breakPoints';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import Extra from './components/Extra/Extra';

function App() {
  const size = useWindowSize();
  return (
    <Layout>
      <SideBar flat={size.width < breakPoints.desktop_size}>sidebar</SideBar>
      <Main>{size.width}px / {size.height}px</Main>
      {
        size.width > breakPoints.tablet_size && <Extra>extra</Extra>
      }
    </Layout>
  );
}

export default App;
