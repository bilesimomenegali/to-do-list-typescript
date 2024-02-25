import './global.css'
import { Header } from './components/Header'
import { InputBar } from './components/InputBar'
import { Content } from './components/Content'

export function App () {
  return (
    <div>
      <Header />
      <InputBar />
      <Content />
    </div>
  )
}