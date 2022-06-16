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
      navigate('/')
    }
  }
  return (
    <>
      <div></div>
      <div className='flex flex-col items-center justify-center space-y-2'>
        <h5 className='mt-12 text-left uppercase text-small'>Login or Create account</h5>

        {loading ? (
          <h5 className='mt-12 text-left uppercase text-small'>Loading...</h5>
        ) : (
          <>
            <h5 className='mt-6 text-left text-small'>Email Address</h5>
            <form className='flex flex-col items-center w-3/5' onSubmit={handleLogin}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                className='text-black w-3/5 placeholder-gray-500 text-small px-4 py-2 border-[1px] border-black'
              />
              <button
                type='submit'
                className='w-3/5 px-4 py-2 mt-6 text-white uppercase bg-black text-small'
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
