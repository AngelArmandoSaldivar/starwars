import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const TaskForm = () => {

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const { addTask, updateTask, tasks } = useContext(GlobalContext);

  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.id) {
      addTask(task);
    } else {
      updateTask(task);
    }
    navigate("/");
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    if (taskFound) {
      setTask({
        id: taskFound.id,
        title: taskFound.title,
        description: taskFound.description,
      });
    }
  }, [params.id, tasks]);

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <h2 >
          {task.id ? "Update " : "Create "}A Task
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Write a title"           
            autoFocus
          />
        </div>
        <div className="mb-5">
          <textarea
            value={task.description}
            name="description"
            rows="2"
            placeholder="write a description"
            onChange={handleChange}            
          ></textarea>
          <button>
            {task.id ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
