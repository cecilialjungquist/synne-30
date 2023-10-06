import './App.css';
import Fans from './components/Fans';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Paragraph from './components/Paragraph';

function App() {
  const contentOne = [
    "ÄNTLIGEN, vår älskade Synne, är det din tur att fylla vuxen! Du är ju den sista av The Amazing Trio att kliva in i denna mytomspunna klubb och enligt tradition så vill vi givetvis fira GEMENSAMT och ordentligt!",
    "Eftersom vi är dina bästa vänner och helt otroligt förstående, så är vi med på att du just nu kanske vill fokusera mer på en annan trio, nämligen dig själv, Hampus och lilla Otis*.",
    "Vi vill dock vara tydliga med att detta endast är tillfälligt och att vi snart förväntar oss att bli ditt viktigaste fokus igen."
  ]

  const contentTwo = [
    "Det är ju lite av en utmaning att planera något tillsammans med en gravid soon to be mami. Men tro inte att du kommer undan för det!",
    "Vi antar att du tyckte om vår resa till Split lika mycket som vi, så varför ändra på ett vinnande koncept? Dags för favorit i repris!",
    "När du känner dig redo, bestämmer du resmål och tidpunkt - vi kirrar biffen. Om det är en helg i Ullared eller i Paris, det spelar ingen roll. Vad än DU känner för!"
  ]

  return (
    <div className='app'>
      <Header />
      <Main content={contentOne} />
      <img className="latrice" src="https://media.giphy.com/media/nmXzfuNWmGzTi/giphy.gif" />
      <Main content={contentTwo} />
      <img className="latrice" src="https://media.giphy.com/media/i2esNmDizlU7Od6Wol/giphy.gif" />
      <Paragraph>STORT GRATTIS</Paragraph>
      <Paragraph className='p-big'>ÄLSKADE SYNNE</Paragraph>
      <Paragraph>önskar dina största fans</Paragraph>
      <Fans />
      <Footer />
    </div>
  )
}

export default App;
