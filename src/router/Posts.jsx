import { Outlet } from "react-router-dom";
import PostList from "../components/PostLists";

function Posts() {

  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  )
}

export default Posts;
