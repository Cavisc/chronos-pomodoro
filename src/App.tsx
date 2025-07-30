import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

import './styles/theme.css';
import './styles/global.css';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form'>
          <div className='formRow'>
            <Input
              id='input'
              labelText='task:'
              type='text'
              placeholder='Ex.: estudar para a prova'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>
        </form>
      </Container>
    </>
  );
}
