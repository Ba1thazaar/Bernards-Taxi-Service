import  {useMediaQuery} from 'react-responsive'
import Desktop from './components/desktop'
import Mobile from './components/mobile'


function App() {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 480px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1000px)",
  });

  return (
    <div>
      {isMobileDevice && <Mobile/>}
      {isDesktop && <Desktop/>}
    </div>
  );
}
//https://blog.logrocket.com/using-react-responsive-to-implement-responsive-design/
//Read this for mobile modification
export default App;
