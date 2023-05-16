import { Link } from "react-router-dom"
// import { useEffect } from "react-redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import fetchAllUsers from "../../store/actions/Users";

const routes = [
    {
        path: "/",
        label: "Posts",
        id: "1",
    },
];

const NavBar = () => {
    const { post, loading, error } = useSelector((state) => state.usersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, []);

    console.log(loading, post);

    if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            <div>
                {routes.map((el) => (
                    <Link style={{ marginRight: "30px" }}
                        to={el.path}
                        key={`${el.id} ${el.label}`}
                    >
                        {el.label}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default NavBar;