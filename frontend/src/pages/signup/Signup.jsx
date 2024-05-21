import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base text-fuchsia-50 label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Enter Your Name'
							className='w-full input input-bordered  h-10'
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base text-fuchsia-50 label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base text-fuchsia-50 label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base text-fuchsia-50 label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<GenderCheckBox />

					{/* <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						href='#'
					>
						Already have an account?
					</Link> */}

					<div>
						<button className='btn text-base btn-block btn-sm mt-2 border border-slate-700 h-10'>
							Signup
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Signup
