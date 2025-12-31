import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import { useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Submitted:', taskName);
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <Input
          id='input'
          labelText='task:'
          type='text'
          placeholder='Ex.: estudar para a prova'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <Button icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
