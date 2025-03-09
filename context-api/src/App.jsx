
import { ThemeProvider } from '../context/ThemeContext'
import MySwitch from './components/MySwitch'
import Title from './components/Title'
import "./App.css"
function App() {
  return (
<>      
<ThemeProvider>

      <MySwitch></MySwitch>
      <Title></Title>

</ThemeProvider>
    </>
  )
}

export default App
