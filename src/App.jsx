import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Overview from './pages/Overview';
import Campaign from './pages/Campaign'
import Account from './pages/Account';
import Marketing from './pages/Marketing';
import Error from './components/Error';
import CreateCampaign from './pages/CreateCampaign';


 
function App() {
  return(
    <Router>
    <Routes>
      <Route element ={<Layout />} >
        <Route path='/' element ={<Overview />} />
        <Route path='/campaign' element ={<Campaign />} />
        <Route path='/marketing' element ={<Marketing />} />
        <Route path='/account' element ={<Account />} />
        <Route path='*' element={<Error />} />
        <Route path= '/newcampaign' element ={<CreateCampaign />} />
      </Route>
    </Routes> 
    </Router>
    
  )
}

export default App
