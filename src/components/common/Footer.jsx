const Footer = ({ t }) => {
	return (
		<footer className='bg-green-800 text-white py-4 fixed bottom-0 inset-x-0 z-10'>
			<div className='w-full px-4 text-center'>
				<p className='text-green-100'>{t.footer}</p>
				<p className='text-green-200 text-sm mt-2'>{t.footerPowered}</p>
			</div>
		</footer>
	)
}

export default Footer
