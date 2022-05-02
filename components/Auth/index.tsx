import { useState } from 'react'

// Redux
import { login } from '../../redux/slices/auth.slice'
import { useAppDispatch } from '../../redux/hooks'
import { userLogin } from '../../lib/data/auth'

const Auth = () => {
  const dispatch = useAppDispatch()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = (e) => {
    e.preventDefault()
    const auth = userLogin(username, password)
    if (auth) {
      const auths = {
        isLoggingIn: true,
        user: {
          uid: auth.login.uuid,
          first: auth.name.first,
          last: auth.name.last,
          email: auth.email,
          photoURL: auth.picture.thumbnail,
        },
      }
      dispatch(login(auths))
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
                px-6 py-10 sm:px-10 sm:py-6
                bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Login
          </h2>
          <label
            htmlFor="username"
            className="block text-xs font-semibold text-gray-600 uppercase"
          >
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Dolbymat"
            autoComplete="username"
            className="block w-full py-3 px-1 mt-2
                        text-gray-800 appearance-none
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required
          />
          <label
            htmlFor="password"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="password"
            autoComplete="current-password"
            className="block w-full py-3 px-1 mt-2 mb-4
                        text-gray-800 appearance-none
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
            required
          />

          <button
            type="submit"
            onClick={(e) => handleLogin(e)}
            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                        font-medium text-white uppercase
                        focus:outline-none hover:bg-gray-700 hover:shadow-none"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
