import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, deleteAll } from "./features/todoSlice";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function clickHandle() {
    dispatch(addTodo(input));
    setInput("");
          toast.success("Todo Added Sucessfully", { position: "top-right" });
  }
  return (
    <div className="flex flex-col items-center justify-center my-32">
      <Toaster />
      <div className="flex justify-between  w-80 border-x border-t border-black px-5">
        <input
          className="border border-black my-5 p-1"
          type="text"
          value={input}
          placeholder="Enter Task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="border mx-1 p-2 bg-blue-500 hover:bg-blue-600 my-4 hover:text-white"
          disabled={input === ""}
          onClick={() => clickHandle()}
        >
          ADD TASK
        </button>
      </div>
      <div className="flex flex-col justify-between w-80 border border-black px-5">
        {count.map((item, index) => (
          <div className="flex justify-between  my-2 ">
            <div>{item}</div>
            <button
              className="border-black text-black border p-2 bg-red-600 hover:bg-red-700 hover:text-white"
              onClick={() => dispatch(deleteTodo(index))}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
      {count.length !== 0 && (
        <button
          className="border-black border my-1 py-3 w-80 text-black border p-2 bg-red-600 hover:bg-red-700 hover:text-white"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
