import React, { useEffect } from 'react'
import fetchAllUsers from '../../store/actions/Users'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import cont from '../Posts.module.css'
const UsersPosts = () => {

  const dispatch = useDispatch()
  const { loading, users } = useSelector((state) => state.usersReducer);
  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])
  return (
    <div>{!loading ? users.map((el) => {
      return (
        <div key={el.id} className={cont.secman}>
          <h2 className={cont.man}>{el.id} <br /> {el.title}</h2>
          <Link to={`/posts/${el.id}`}> <button>Details</button></Link>
          <div className={cont.men}> <div className={'bodyPosts'}>{el.body.length > 20 ? el.body.substr(0, 20) + '...' : el.body}</div>
            <Link to={`/posts/${el.id}`}> More </Link> </div>
        </div>
      );
    }) : <h1>error</h1>}</div>
  )
}

export default UsersPosts