// Mobile menu toggle
document
	.getElementById('mobile-menu-button')
	.addEventListener('click', function () {
		const menu = document.getElementById('mobile-menu')
		menu.classList.toggle('hidden')
	})

// FAQ toggle
document.querySelectorAll('.faq-toggle').forEach(button => {
	button.addEventListener('click', () => {
		const content = button.nextElementSibling
		const icon = button.querySelector('i')

		content.classList.toggle('hidden')
		icon.classList.toggle('rotate-180')
	})
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const targetId = this.getAttribute('href')
		const targetElement = document.querySelector(targetId)

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 80,
				behavior: 'smooth',
			})

			// Close mobile menu if open
			const mobileMenu = document.getElementById('mobile-menu')
			if (!mobileMenu.classList.contains('hidden')) {
				mobileMenu.classList.add('hidden')
			}
		}
	})
})

// Copy to clipboard function
function copyToClipboard(text) {
	navigator.clipboard.writeText(text).then(() => {
		// Show copied tooltip
		const button = event.currentTarget
		const originalIcon = button.innerHTML
		button.innerHTML = '<i class="fas fa-check"></i>'

		setTimeout(() => {
			button.innerHTML = originalIcon
		}, 2000)
	})
}

// Animate elements when they come into view
const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate-fadeIn')
			}
		})
	},
	{
		threshold: 0.1,
	}
)

document.querySelectorAll('.joker-card, .token-graphic').forEach(el => {
	observer.observe(el)
})
