import { Camera, CheckCircle, Mail, Save, User } from 'lucide-react'
import { useState } from 'react'

const ProfilePage = ({ t, currentUser, onUpdateUser, onLogout }) => {
	const [username, setUsername] = useState(currentUser?.username || '')
	const [email, setEmail] = useState(currentUser?.email || '')
	const [avatar, setAvatar] = useState(currentUser?.avatar || '')
	const [success, setSuccess] = useState('')
	const [error, setError] = useState('')

	const handleAvatarChange = event => {
		const file = event.target.files?.[0]
		if (!file) return

		if (!file.type.startsWith('image/')) {
			setError(t.invalidImage)
			return
		}

		const reader = new FileReader()
		reader.onload = () => {
			setAvatar(reader.result)
		}
		reader.readAsDataURL(file)
	}

	const handleSave = e => {
		e.preventDefault()
		setSuccess('')
		setError('')

		if (!username.trim()) {
			setError(t.fillAllFields)
			return
		}

		const normalizedEmail = email.trim().toLowerCase()
		if (normalizedEmail) {
			const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
				normalizedEmail,
			)
			if (!isValidEmail) {
				setError(t.invalidEmail)
				return
			}
		}

		onUpdateUser({
			username: username.trim(),
			email: normalizedEmail,
			avatar,
		})
		setSuccess(t.profileUpdated)
	}

	if (!currentUser) {
		return null
	}

	return (
		<div className='max-w-4xl mx-auto space-y-6'>
			<div className='bg-gradient-to-br from-green-700 via-emerald-700 to-teal-700 rounded-3xl p-6 md:p-8 text-white shadow-xl'>
				<div className='flex flex-col md:flex-row md:items-center gap-6'>
					<div className='relative'>
						<div className='w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border-2 border-white/40'>
							{avatar ? (
								<img
									src={avatar}
									alt={username}
									className='w-full h-full object-cover'
								/>
							) : (
								<User className='w-10 h-10' />
							)}
						</div>
						<label className='absolute -bottom-2 -right-2 bg-white text-green-700 rounded-full p-2 shadow-lg cursor-pointer hover:bg-green-50'>
							<Camera className='w-4 h-4' />
							<span className='sr-only'>{t.uploadPhoto}</span>
							<input
								type='file'
								accept='image/*'
								onChange={handleAvatarChange}
								className='hidden'
							/>
						</label>
					</div>

					<div className='flex-1'>
						<h2 className='font-hero text-2xl md:text-3xl'>
							{t.profile}
						</h2>
						<p className='text-emerald-100 text-sm md:text-base'>
							{t.editProfile}
						</p>
						<div className='mt-3 text-sm text-emerald-100'>
							{t.profilePhoto}
						</div>
					</div>
				</div>
			</div>

			<div className='bg-white rounded-3xl shadow-xl p-6 md:p-8'>
				{success && (
					<div className='mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2'>
						<CheckCircle className='w-5 h-5' />
						<span className='text-sm'>{success}</span>
					</div>
				)}

				{error && (
					<div className='mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2'>
						<span className='text-sm'>{error}</span>
					</div>
				)}

				<form onSubmit={handleSave} className='space-y-4'>
					<div className='flex flex-col sm:flex-row sm:items-center gap-3'>
						<label className='block text-sm font-semibold text-gray-700 sm:w-32 sm:text-right'>
							{t.username}
						</label>
						<div className='relative flex-1'>
							<User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
							<input
								type='text'
								value={username}
								onChange={e => setUsername(e.target.value)}
								placeholder={t.enterUsername}
								className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none'
							/>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row sm:items-center gap-3'>
						<label className='block text-sm font-semibold text-gray-700 sm:w-32 sm:text-right'>
							{t.email}
						</label>
						<div className='relative flex-1'>
							<Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
							<input
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder={t.enterEmail}
								className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none'
							/>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row sm:items-center gap-3'>
						<label className='block text-sm font-semibold text-gray-700 sm:w-32 sm:text-right'>
							{t.password}
						</label>
						<div className='flex-1'>
							<div className='w-full px-4 py-3 rounded-xl border-2 border-dashed border-gray-200 text-gray-400 text-sm'>
								••••••••
							</div>
							<p className='text-xs text-gray-400 mt-1'>
								{t.passwordHint}
							</p>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row sm:items-center gap-3'>
						<div className='sm:w-32'></div>
						<div className='flex flex-col sm:flex-row gap-3'>
							<button
								type='submit'
								className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2'
							>
								<Save className='w-5 h-5' />
								{t.saveChanges}
							</button>
							<button
								type='button'
								onClick={onLogout}
								className='border-2 border-gray-200 hover:border-red-300 hover:text-red-600 px-6 py-3 rounded-xl font-semibold text-gray-600'
							>
								{t.logout}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ProfilePage
