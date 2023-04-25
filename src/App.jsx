import React from 'react';
import Logo from './assets/Green_logo.svg';

const App = () => {
	return (
		// <div className="h-screen">
		// 	<div className="mx-auto h-full max-w-[80%]">
		// 		<div className="absolute left-1/2 top-1/2 w-1/3 translate-x-[-50%] translate-y-[-50%]">
		// 			<form className=" space-y-5 rounded-md bg-blue-300 px-10 py-10 text-white">
		// 				<div>
		// 					<label className="block" htmlFor="username">
		// 						Username:
		// 					</label>
		// 					<input type="text" id="username" placeholder="Enter username" />
		// 				</div>
		// 				<div>
		// 					<label className="block" htmlFor="pass">
		// 						Password:
		// 					</label>
		// 					<input type="password" id="pass" placeholder="Enter password" />
		// 				</div>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div>
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className=" mx-auto sm:w-full">
					<div className="mx-auto flex w-auto items-center justify-center gap-4 sm:w-[80%]">
						<img className=" h-20 w-auto" src={Logo} alt="Your Company" />
						<h1 className="text-4xl font-semibold italic text-green-500">
							Green{' '}
							<span className="text-[#3ab5cb]">University of Bangladesh</span>
						</h1>
					</div>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-green-500 hover:text-green-600">
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Sign in
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Not a member?{' '}
						<a
							href="#"
							className="font-semibold leading-6 text-green-500 hover:text-green-600">
							Sign Up
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default App;
