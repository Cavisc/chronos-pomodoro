import { useEffect, useReducer } from 'react';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;
    console.log(countDownSeconds);

    if (countDownSeconds === 0) {
      console.log('Timer finished!');
      worker.terminate();
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log('No active task, terminating worker.');
      worker.terminate();
    }

    worker.postMessage(state);
  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
