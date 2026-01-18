import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/Context/UserContext';


function App() {
    return (
        <div>
            <WelcomeMessage />
             <Header />
      <MainContent />
      <Footer />
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />

      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

        </div>

    );
}

export default App;
