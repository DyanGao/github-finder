import axios from "axios"

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization : `token ${GITHUB_TOKEN}` },
})


// Get Search results
export const searchUsers = async (text) => {

  const params = new URLSearchParams({
    q: text
  })

  // const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //   headers: {
  //     Authorization : `token ${GITHUB_TOKEN}`,
  //   }
  // })

  // const { items } = await res.json()
  
  // return items

  const res = await github.get(`/search/users?${params}`)
  return res.data.items

}

 // get single user
// export const getUser = async (login) => {

//     const res = await fetch(`${GITHUB_URL}/users/${login}`, {
//       headers: {
//         Authorization : `token ${GITHUB_TOKEN}`,
//       }
//     })

//     if (res.status === 404) {
//       window.location = '/notfound'
//     } else {
//       const data = await res.json()
    
//       return data
//     } 
//   }



// export const getUserRepos = async (login) => {

//     const params = new URLSearchParams({
//       sort: 'created',
//       per_page: 10,
//     })

//     const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//       headers: {
//         Authorization : `token ${GITHUB_TOKEN}`,
//       }
//     })

//     const data = await res.json()
    
//     return data
//   }

// get user and repos

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`)
  ])

  return { user: user.data, repos: repos.data }
}