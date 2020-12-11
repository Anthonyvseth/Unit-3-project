import React, { useState } from "react";
import { __CreateTodo } from "../../services/TodoService";
import TextInput from "../TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function TodoForm(props) {
  const { setNeedsRefresh } = props;
  const [description, setDescription] = useState("");
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    switch (fieldName) {
      case "description":
        setDescription(fieldValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formState = {
      description: description,
    };
    try {
      const addTodo = await __CreateTodo(formState);
      setNeedsRefresh(true);
      props.history.push("/home");
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="todo-form">
      <TextInput
        className="todo-form"
        type="text"
        name="description"
        placeholder="To Do?"
        onChange={handleChange}
      />
      <FontAwesomeIcon
        className="fas fa-white"
        icon={faPlusSquare}
        onClick={handleSubmit}
      />
    </form>
  );
}

export default TodoForm;
