import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [formValues, setFormValues] = useState<any>({});
  const [users, setusers] = useState<any>([]);
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const createPost = async () => {
    await axios.post("http://localhost:3001/posts", formValues);
    setFormValues({ text: "" });
    getPosts();
  };
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const users = (await axios.get("http://localhost:3001/posts")).data;
    console.log(users);

    setusers(users);
  };

  console.log(formValues);
  return (
    <div>
      <TextField
        label="Техст поста"
        onChange={onChange}
        name="text"
        value={formValues?.text}
      ></TextField>
      <Button onClick={createPost}>Создать пост</Button>
      <div>
        {users.map((post: any) => {
          return <h2>{post.text}</h2>;
        })}
      </div>
    </div>
  );
};
export default Posts;
