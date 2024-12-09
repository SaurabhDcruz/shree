import { useState, React } from 'react'
import SubHeader from '../../src/Component/SubHeader/SubHeader';

export default function Career2 () {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [activeTab,setActiveTab]=useState("student")

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    // Validate form data
    if (Object.values(data).some(value => !value)) {
      setMessage({ type: 'error', text: 'Please fill in all fields' })
      setLoading(false)
      return
    }

    // Simulate successful submission
    setMessage({
      type: 'success',
      text: `${
        activeTab === 'student' ? 'Student' : 'Teacher'
      } form submitted successfully!`
    })
    e.currentTarget.reset()
    setLoading(false)
  }

  return (
    <>
      <SubHeader />
      <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
          <div className='px-6 py-8'>
            <h2 className='text-2xl font-bold text-center text-gray-900 mb-8'>
              Career Options
            </h2>

            {/* Tabs */}
            <div className='flex space-x-2 mb-8'>
              <button
                onClick={() => {
                  setActiveTab('student')
                  setMessage(null)
                }}
                className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 ${
                  activeTab === 'student'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => {
                  setActiveTab('teacher')
                  setMessage(null)
                }}
                className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 ${
                  activeTab === 'teacher'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Teacher
              </button>
            </div>

            {/* Forms */}
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='Enter your name'
                />
              </div>

              <div>
                <label
                  htmlFor='mobile'
                  className='block text-sm font-medium text-gray-700'
                >
                  Mobile
                </label>
                <input
                  type='tel'
                  id='mobile'
                  name='mobile'
                  required
                  pattern='[0-9]{10}'
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='Enter your mobile number'
                />
              </div>

              {activeTab === 'student' ? (
                <>
                  <div>
                    <label
                      htmlFor='age'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Age
                    </label>
                    <input
                      id='age'
                      name='age'
                      required
                      min='16'
                      max='99'
                      className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                      placeholder='Enter your age'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='careerGoal'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Career Goal
                    </label>
                    <textarea
                      id='careerGoal'
                      name='careerGoal'
                      required
                      rows={3}
                      className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                      placeholder='Describe your career goals'
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Subject
                    </label>
                    <input
                      type='text'
                      id='subject'
                      name='subject'
                      required
                      className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                      placeholder='Enter your subject'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='experience'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Years of Experience
                    </label>
                    <input
                      id='experience'
                      name='experience'
                      required
                      min='0'
                      max='50'
                      className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                      placeholder='Enter your experience in years'
                    />
                  </div>
                </>
              )}

              {message && (
                <div
                  className={`p-4 rounded-md ${
                    message.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {message.text}
                </div>
              )}

              <button
                type='submit'
                disabled={loading}
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {loading ? (
                  <svg
                    className='animate-spin h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
