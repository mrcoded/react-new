import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../hooks/use-http';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp()

  const createTask = (task, data) => {
    // const key = data.id
    const generatedId = Math.random(); // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text };
    props.onAddTask(createdTask);
    console.log(data);
  }

  const enterTaskHandler = async (task) => {
    try {
      sendTaskRequest({
        url: 'https://react-http-e4524-default-rtdb.firebaseio.com/movies.json',
        method: 'POST',
        body: { text: task },
        headers: {
          'Content-Type': 'application/json',
        }
      }, createTask.bind(task))
      console.log(task);
    }
    catch (err) {
      console.log(err.message || 'Something went wrong!');
    }
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
