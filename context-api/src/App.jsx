
import { ThemeProvider } from '../context/ThemeContext'
import MySwitch from './components/MySwitch'
import Title from './components/Title'
import "./App.css"
import { LangProvider } from '../context/LangContext'
function App() {
  return (
<>      
<ThemeProvider>
  <LangProvider>

      <MySwitch></MySwitch>
      <Title></Title>


      </LangProvider>

</ThemeProvider>
    </>
  )
}

export default App
