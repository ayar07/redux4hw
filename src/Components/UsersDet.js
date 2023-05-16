import { useEffect } from "react"
import { setError, setUsers, setLoading } from "../store/reducers/postSlice";
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import cont from "./Posts.module.css"

const UsersDet = () => {
  const navig = useNavigate();
  const params = useParams();
  console.log(params);


  const { post, loading, error } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true));

    fetch(`http://localhost:4000/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUsers(data));
      })

      .catch((err) => dispatch(setError(err)))
      .finally(() => dispatch(setLoading(false)))


  }, [])

  console.log(loading, post);

  if (error) {
    return <div>err: {error}</div>;
  }

  return (
    <div>
      {loading == true ? (
        "loading"
      ) : (
        <div className={'secman'}>
          <button onClick={() => navig("/")}>Back</button>
          <h1 className={'men'}> {post.id} <br />  {post.title} <br /></h1>
          <div> {post.body}</div>
        </div>
      )}
    </div>
  )
}
export default UsersDet;