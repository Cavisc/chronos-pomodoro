import { SaveIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { showMessage } from '../../adapters/showMessage';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { MainTemplate } from '../../templates/MainTemplate';

export function Settings() {
  useEffect(() => {
    document.title = 'Configurações | Chronos Pomodoro';
  }, []);

  const { state, dispatch } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    const formErrors: string[] = [];

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Use apenas valores numéricos para as configurações');
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('O tempo de foco deve ser entre 1 e 99 minutos');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push(
        'O tempo de descanso curto deve ser entre 1 e 30 minutos',
      );
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push(
        'O tempo de descanso longo deve ser entre 1 e 60 minutos',
      );
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => showMessage.error(error));
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: { workTime, shortBreakTime, longBreakTime },
    });
    showMessage.success('Configurações salvas com sucesso!');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action='' className='form'>
          <div className='formRow'>
            <Input
              id='workTime'
              labelText='Foco'
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <Input
              id='shortBreakTime'
              labelText='Descanso curto'
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <Input
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <Button
              type='submit'
              icon={<SaveIcon />}
              aria-label='Salvar configurações'
              title='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
