import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-http';
import { useCallback } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const httpData = useHttp()

  const { isLoading, error, sendRequest: fetchTasks } = httpData

  useEffect(() => {
    const transformTasks = data => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    }

    fetchTasks({ url: 'https://react-http-e4524-default-rtdb.firebaseio.com/movies.json' },
      transformTasks);
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;




// import React from 'react';
// import BackwardCounter from './components/BackwardCounter';
// import ForwardCounter from './components/ForwardCounter';

// function App() {
//   return (
//     <React.Fragment>
//       <ForwardCounter />
//       <BackwardCounter />
//     </React.Fragment>
//   );
// }

// export default App;