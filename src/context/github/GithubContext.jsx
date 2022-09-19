import { createContext, useReducer } from "react";
import { createRoutesFromChildren } from "react-router-dom";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

// const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
// const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(true)
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer,  initialState)

  // const getUsers = async () => {
  //   setLoading()

  //   const res = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   })
  //   const data = await res.json()
  
  //   // setUsers(data)
  //   // setLoading(false)
  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: data
  //   })
  // }
  

 

  
 

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // user: state.user,
        // repos: state.repos,
        // loading: state.loading,
        ...state,
        // getUsers
        dispatch,
        //searchUsers,
        //clearUsers,
        //getUser,
        //getUserRepos
      }}>
        {children}
    </GithubContext.Provider>
  )
}

export default GithubContext