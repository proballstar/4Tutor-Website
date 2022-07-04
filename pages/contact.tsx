import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../src/components/Navbar';
import { useFormik } from 'formik'

const input_styles = 'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
const label_styles = 'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'

//const DocumentLayout = dynamic(() => import('../src/components/Layout'))

export default function Home() {

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      'message': '',
      'last': '',
      'first': '',
      'email': '',

    },
    onSubmit: async (values, helpers) => {
      const formData = new URLSearchParams()
      formData.append('entry.1650781788', values.message)
      formData.append('entry.2066407430', values.last)
      formData.append('entry.667540114', values.first)
      formData.append('emailAddress', values.email)
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdvtef6PnD00UZiSmiUAlnVF8NM5heuLdN8qU8OzgtElasCQQ/formResponse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          mode: "no-cors",
          body: formData.toString(),
        }
      );
    }
  })

  return (
    <div>
      <Navbar />  
      <form className='p-3' onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor='first'
            className={label_styles}
          >
            First Name:
          </label>
          <input
            className={input_styles}
            name='first' 
            id='first'
            onChange={handleChange}
            value={values.first}
            placeholder=" "
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor='last'
            className={label_styles}
          >
            Last Name:
          </label>
          <input
            name='last'
            onChange={handleChange}
            value={values.last}
            placeholder=" "
            className={input_styles}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </div>
          <label
            htmlFor='email'
            className={label_styles}
          >
            Email Address:
          </label>
          <input
            name='email'
            onChange={handleChange}
            value={values.email}
            type='email'
            placeholder=" "
            className={input_styles}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor='message'
            className={label_styles}
          >
            Message:
          </label>
          <textarea
            name='message'
            onChange={handleChange}
            value={values.message}
            placeholder=" "
            className={input_styles}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
