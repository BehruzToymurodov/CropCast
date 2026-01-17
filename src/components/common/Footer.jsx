const Footer = ({ t }) => {
	return (
		<footer className='bg-green-800 text-white mt-8 md:mt-16 py-6 md:py-8'>
			<div className='max-w-7xl mx-auto px-4 text-center'>
				<p className='text-sm md:text-base text-green-100'>{t.footer}</p>
				<p className='text-green-200 text-xs md:text-sm mt-2'>
					{t.footerPowered}
				</p>
			</div>
		</footer>
	)
}

export default Footer
