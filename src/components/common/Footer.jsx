const Footer = ({ t }) => {
	return (
		<footer className='bg-green-800 text-white mt-16 py-8'>
			<div className='max-w-7xl mx-auto px-4 text-center'>
				<p className='text-green-100'>{t.footer}</p>
				<p className='text-green-200 text-sm mt-2'>{t.footerPowered}</p>
			</div>
		</footer>
	)
}

export default Footer
