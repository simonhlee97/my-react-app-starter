import { StartMenu } from 'components'
import { useState} from 'react'
import styles from './styles.module.css'

export const App = () => {
  const [mode, setMode] = useState('start')

  return (
    <div className={ styles.main}>
      <StartMenu onStartClick={() => setMode('battle')} />

      {mode === 'start' && <StartMenu/>}
      {mode === 'battle' && <>Battle Mode</>}
      
      {mode === 'gameOver' && <>Game Over</>}

    </div>
  );
}

