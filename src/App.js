import Hd from './component/layout/Hd'
import Mainbanner from './component/main/Mainbanner'
import PlatformInfo from './component/main/PlatformInfo'
import PlatformAd from './component/main/PlatformAd'
import PlatformM from './component/main/PlatformiM'
import Faq from './component/layout/Faq'
import Ft from './component/layout/Footer'
import Quick from './component/layout/Quick'

function App() {
  return (
    <div className="App">
         <Hd></Hd>
         <Mainbanner></Mainbanner>
         <PlatformInfo></PlatformInfo>
         <PlatformAd></PlatformAd> 
         <PlatformM></PlatformM> 
         <Faq></Faq>
         <Quick></Quick>
         <Ft></Ft>     
    </div>
  );
}

export default App;
