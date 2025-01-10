// Add this at the beginning of your script
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');

    // Hide loading screen after 5 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        // Remove from DOM after fade out
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300);

        // Start your page animations here
        startPageAnimations();
    }, 3000);
});

// Wrap your existing GSAP animations in this function
function startPageAnimations() {
    // Hero text animations
    gsap.from(".text1", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power4.out"
    });

    gsap.from(".text2", {
        duration: 1,
        y: 100,
        opacity: 0,
        delay: 0.2,
        ease: "power4.out"
    });

    // ... rest of your existing animations
}

// Initial page animations
gsap.from(".hero-icons", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".line", {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".dashboard-preview", {
    duration: 1,
    y: 100,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
});

// Create floating effect for the yellow dot
gsap.to(".yellow-dot", {
    y: -10,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Chatbot functionality
const chatbotTrigger = document.querySelector('.chatbot-trigger');
const chatbotOverlay = document.querySelector('.chatbot-overlay');
const chatbotContainer = document.querySelector('.chatbot-container');
const chatbotClose = document.querySelector('.chatbot-close');
const chatbotInput = document.querySelector('.chatbot-input');
const chatbotSend = document.querySelector('.chatbot-send');
const chatbotMessages = document.querySelector('.chatbot-messages');
const chatbotInputContainer = document.querySelector('.chatbot-input-container');
const body = document.querySelector('body');

// Debugging: Check if elements are selected correctly
console.log("Chatbot Elements:", {
    chatbotTrigger,
    chatbotOverlay,
    chatbotContainer,
    chatbotClose,
    chatbotInput,
    chatbotSend,
    chatbotMessages,
    chatbotInputContainer
});

// Ensure all elements are present
if (!chatbotTrigger || !chatbotOverlay || !chatbotContainer || !chatbotClose || !chatbotInput || !chatbotSend || !chatbotMessages || !chatbotInputContainer) {
    console.error("One or more chatbot elements are missing. Please check your HTML structure.");
}

// Open chatbot with GSAP animation
chatbotTrigger.addEventListener('click', () => {
    console.log("Chatbot trigger clicked.");
    chatbotOverlay.style.display = 'flex';

    // Hide the chatbot trigger icon
    chatbotTrigger.classList.add('hidden');

    // Create animation timeline
    const tl = gsap.timeline();

    tl.to(chatbotContainer, {
        right: "0",
        opacity: 1,
        duration: 0.5,
        ease: "power4.out"
    })
        .to(chatbotInputContainer, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });

    addMessage("Hello! How can I help you today? 👋", 'bot');
    chatbotInput.focus();
});

chatbotTrigger.addEventListener('click', () => {
    chatbotTrigger.classList.add('clicked');
    const chatbotHelpText = document.querySelector('.chatbot-help-text');
    if (chatbotHelpText) chatbotHelpText.style.display = 'none'; // Hide help text
    chatbotOverlay.style.display = 'flex'; // Open chatbot
});


// Close chatbot with GSAP animation
function closeChatbot() {
    console.log("Chatbot close initiated.");
    const tl = gsap.timeline();

    tl.to(chatbotContainer, {
        right: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.in"
    }).then(() => {
        chatbotOverlay.style.display = 'none';
        chatbotMessages.innerHTML = '';

        // Show the chatbot trigger icon again
        chatbotTrigger.classList.remove('hidden');
    });
}

chatbotClose.addEventListener('click', closeChatbot);
chatbotOverlay.addEventListener('click', (e) => {
    if (e.target === chatbotOverlay) {
        closeChatbot();
    }
});

// Add message to chat with animation
function addMessage(text, sender) {
    console.log(`Adding message from ${sender}: "${text}"`);
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    const formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')  // Replace ** with <b> for bold
        .replace(/\n/g, '<br>');  // Replace newline with <br> for line breaks
    messageDiv.innerHTML = formattedText;
    chatbotMessages.appendChild(messageDiv);

    // GSAP animation
    gsap.fromTo(messageDiv,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Define bot responses based on user input
function getBotResponse(message) {
    const msg = message.toLowerCase();
    console.log(`Processing user message: "${msg}"`);

    // Greeting responses
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return "Hi there! 👋 How can I assist you today?";
    }

    // Asking for help
    if (msg.includes('help') || msg.includes('support')) {
        return "Sure, I'm here to help! What do you need assistance with?";
    }

    // Inquiring about services
    if (msg.includes('service') || msg.includes('services')) {
        return "We offer a variety of analytics services to help you shape the future. Would you like to know more about them?";
    }

    // Saying goodbye
    if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('see you')) {
        return "Goodbye! If you have any more questions, feel free to reach out.";
    }

    // Default response
    return "I'm not sure I understand. Could you please elaborate?";
}

// Add this near the top of your file with other constants
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// Update the mobile device detection and event handlers
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Mobile device detected
    let viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;

    function updateViewportHeight() {
        viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${viewportHeight * 0.01}px`);

        // Scroll to bottom of messages
        setTimeout(() => {
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 100);
    }

    // Update viewport height on various events
    window.visualViewport?.addEventListener('resize', updateViewportHeight);
    window.visualViewport?.addEventListener('scroll', updateViewportHeight);

    chatbotInput.addEventListener('focus', () => {
        body.classList.add('keyboard-visible');

        // For iOS, add a slight delay before scrolling
        setTimeout(() => {
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            if (isIOS) {
                window.scrollTo(0, 0);
            }
        }, isIOS ? 300 : 100);
    });

    chatbotInput.addEventListener('blur', () => {
        body.classList.remove('keyboard-visible');
    });

    // Initial viewport height setup
    updateViewportHeight();

    // Prevent bounce scrolling on iOS
    document.body.addEventListener('touchmove', function (e) {
        if (e.target.closest('.chatbot-messages')) {
            const messageContainer = e.target.closest('.chatbot-messages');
            const scrollTop = messageContainer.scrollTop;
            const scrollHeight = messageContainer.scrollHeight;
            const height = messageContainer.clientHeight;

            if ((scrollTop <= 0 && e.touches[0].screenY > e.touches[0].startY) ||
                (scrollTop + height >= scrollHeight && e.touches[0].screenY < e.touches[0].startY)) {
                e.preventDefault();
            }
        } else {
            e.preventDefault();
        }
    }, { passive: false });
}

// Send message function
async function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        chatbotInput.value = '';

        // Reset input height
        chatbotInput.style.height = 'auto';

        // Scroll to bottom immediately after sending
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        try {
            const response = await fetch('api/chatbot/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            console.log("Response:", response);

            if (response.ok) {
                const data = await response.json();
                console.log("Response Data:", data);

                // Extract the message text from the API response
                const botMessage = data?.outputs?.[0]?.outputs?.[0]?.results?.message?.text ||
                    "I'm sorry, I couldn't process your request.";

                addMessage(botMessage, 'bot');
            } else {
                console.error("Error:", response.statusText);
                console.log(response.json());
                addMessage("Failed to connect to the chatbot server.", 'bot');
            }
        } catch (error) {
            console.error("Error:", error);
            addMessage("An error occurred. Please try again later.", 'bot');
        }

        // Scroll to bottom again after response
        setTimeout(() => {
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 100);
    }
}


// Send message handlers
chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Auto-resize textarea
chatbotInput.addEventListener('input', () => {
    chatbotInput.style.height = 'auto';
    chatbotInput.style.height = chatbotInput.scrollHeight + 'px';
});

// Add this near the top of your file with other initialization code
const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const easing = 0.5;

// Update cursor position with smooth animation
function animateCursor() {
    // Calculate the distance to move
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;

    // Apply easing with faster response
    cursorX += distX * easing;
    cursorY += distY * easing;

    // Update cursor position
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    // Continue animation
    requestAnimationFrame(animateCursor);
}

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Show cursor
    cursor.style.opacity = '1';
});

// Hide cursor when mouse leaves the window
document.addEventListener('mouseout', () => {
    cursor.style.opacity = '0';
});

// Start animation
animateCursor();

// Add magnetic effect to buttons and links
const magneticElements = document.querySelectorAll('a, button');
const magnetStrength = 0.5;

magneticElements.forEach(elem => {
    elem.addEventListener('mousemove', (e) => {
        const rect = elem.getBoundingClientRect();
        const elemCenterX = rect.left + rect.width / 2;
        const elemCenterY = rect.top + rect.height / 2;
        const distanceX = e.clientX - elemCenterX;
        const distanceY = e.clientY - elemCenterY;

        mouseX = e.clientX - distanceX * magnetStrength;
        mouseY = e.clientY - distanceY * magnetStrength;
    });
});

// Hide default cursor
document.body.style.cursor = 'none';

// Show default cursor on touch devices
if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    document.body.style.cursor = 'auto';
}

// Add this after your existing GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Icon animations
gsap.from(".flash-icon", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: "elastic.out(1, 0.7)",
    delay: 0.8
});

gsap.from(".growicon", {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "elastic.out(1, 0.7)",
    delay: 1
});

gsap.from(".audio-waves", {
    duration: 1.5,
    scale: 0,
    opacity: 0,
    ease: "elastic.out(1, 0.7)",
    delay: 1.2
});

// Add floating animation to icons
gsap.to([".flash-icon", ".growicon", ".audio-waves"], {
    y: -10,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    stagger: 0.2
});