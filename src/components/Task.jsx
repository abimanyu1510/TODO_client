import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask,editTask ,removeTask } from "../redux/actions/taskActions"; // Import removeTask

const Task = ({ task, handleStatusChange }) => {


  const dispatch = useDispatch();
  const tasksRes = useSelector((state) => state.tasks.data.taskList);
  const [tasks, setTasks] = useState(tasksRes);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [editId,setEditId]=useState(-1);
  const[message,setMessage]=useState("");

  useEffect(() => {
    setTasks(tasksRes);
  }, [tasksRes]);

  const handleUpdate=()=>{

  }
  const handleEdit=()=>{

  }

  // const handleDelete=async (taskId)=>{
  //   try {
  //     // Call the removeTask action
  //     await dispatch(removeTask(taskId)); // Ensure removeTask returns a promise
      
  //     // Update local state by removing the deleted task
  //     setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));

  //     setMessage("Task deleted Successfully 🤗");
  //     setTimeout(()=>{
  //       setMessage("")
  //     },2000)
  //   } catch (error) {
  //     console.error("Error deleting task:", error);
  //   }

  // }

  const handleDelete = async (taskId) => {
    try {
      // Call the removeTask action
      await dispatch(removeTask(taskId)); // Ensure removeTask returns a promise
  
      // Update local state by removing the deleted task
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
      
      // Set a success message
      setMessage("Task deleted successfully 🤗");
      
      // Clear the message after 2 seconds
      setTimeout(() => {
        setMessage(""); // Clear the message
      }, 2000);
    } catch (error) {
      console.error("Error deleting task:", error);
      setMessage("Failed to delete the task. Please try again."); // Set an error message if deletion fails
  
      // Clear the error message after 2 seconds
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };
  
  return (
    <div key={task.id} className="border-b py-2">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-600 overflow-wrap break-words">
        {task.description}
      </p>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mt-2">
        <div>
          <label className="text-sm font-medium text-gray-700">Status:</label>
          <span
            className={`ml-2 px-2 py-1 rounded-md ${
              task.taskStatus === "To do"
                ? "bg-red-500 text-white"
                : task.taskStatus === "In progress"
                ? "bg-purple-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {task.taskStatus}
          </span>
        </div>
        <div>
          <label
            htmlFor={`status-${task.id}`}
            className="text-sm font-medium text-gray-700"
          >
            Change:
          </label>
          <select
            id={`status-${task.id}`}
            name={`status-${task.id}`}
            value={task.taskStatus}
            onChange={(e) => handleStatusChange(task.id, e.target.value)}
            className="ml-2 p-1 border rounded-md focus:outline-purple-500"
          >
            <option value="To do">TO DO</option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </div>

      <div className="column p-3 d-flex align-items-end gap-2 w-24">
      <div className="d-flex gap-2">

         {editId == -1 || editId !==task.id ? <button className="btn btn-info" onClick={()=>handleEdit(task)}>Edit</button>:
         <button onClick={handleUpdate}>Update</button>
         }

         {editId == -1 ?<button className="btn btn-danger" onClick={()=>handleDelete(task.id)}>Delete</button>:
         <button className="btn btn-danger w-4" onClick={() => setEditId(-1)}>Cancel</button>}


         </div>
         
      </div>
      <div className="row  d-flex gap-2 ">
         {message && <p className="text-success">{message}</p>}
         </div>



    </div>
  );
};

export default Task;
