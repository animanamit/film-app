import { supabase } from '@/services/supabase-client'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    console.log(email)
    console.log(process.env.REACT_APP_SUPABASE_URL)

    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
      console.log(error)
    } finally {
      setLoading(false)
      alert('success!')
      // navigate('/')
    }
  }
  return (
    <>
      <div></div>
      <div className='flex flex-col justify-center items-center space-y-2'>
        <h5 className='text-small mt-12 uppercase text-left'>Login or Create account</h5>

        {loading ? (
          <h5 className='text-small mt-12 uppercase text-left'>Loading...</h5>
        ) : (
          <>
            <h5 className='text-small text-left mt-6'>Email Address</h5>
            <form className='w-3/5 items-center flex flex-col' onSubmit={handleLogin}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                className='text-black w-3/5 placeholder-gray-500 text-small px-4 py-2 border-[1px] border-black'
              />
              <button
                type='submit'
                className='text-white w-3/5 text-small uppercase py-2 px-4 bg-black mt-6'
              >
                continue
              </button>
            </form>
          </>
        )}
      </div>
      <div></div>
    </>
  )
}

export default Login
