// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }),
)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    })
})

// Header background change on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
        header.style.background = "rgba(255, 255, 255, 0.95)"
        header.style.backdropFilter = "blur(10px)"
    } else {
        header.style.background = "var(--white)"
        header.style.backdropFilter = "none"
    }
})

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
        }
    })
}, observerOptions)

// Observe all cards for animation
document.querySelectorAll(".product-card, .tool-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
})

// Add loading animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1"
})

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in effect to body
    document.body.style.opacity = "0"
    document.body.style.transition = "opacity 0.5s ease"

    // Trigger animations after a short delay
    setTimeout(() => {
        document.body.style.opacity = "1"
    }, 100)
})

// Contact form functionality (if needed)
function handleContactForm() {
    // Add contact form handling logic here
    console.log("Contact form functionality can be added here")
}

// WhatsApp integration
function openWhatsApp() {
    const phoneNumber = "573123456789" // Replace with actual number
    const message = "Hola, me interesa conocer más sobre los productos de Ferremacro Col"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
}

// Add WhatsApp button functionality to social links
document.querySelector(".fa-whatsapp").parentElement.addEventListener("click", (e) => {
    e.preventDefault()
    openWhatsApp()
})