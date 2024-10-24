import { Outlet } from "react-router-dom";
import PostList from "../components/PostLists";

function Post() {

  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  )
}

export default Post;
