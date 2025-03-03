// Create and inject chat widget styles
const style = document.createElement('style');
style.textContent = `
.chat-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    transition: all 0.3s ease;
}

.chat-widget.expanded {
    width: 380px;
    height: 600px;
}

.chat-button {
    background: #2563eb;
    color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.chat-button:hover {
    transform: scale(1.1);
}

.chat-window {
    display: none;
    position: absolute;
    bottom: 80px;
    right: 0;
    width: 380px;
    height: 500px;
    background: #1a1a1a;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.chat-window.active {
    display: flex;
    flex-direction: column;
}

.chat-header {
    background: #2d2d2d;
    padding: 16px;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-button {
    cursor: pointer;
    padding: 4px;
}

.messages-container {
    flex-grow: 1;
    overflow-y: auto;
    padding: 16px;
}

.message {
    max-width: 80%;
    margin: 8px;
    padding: 12px;
    border-radius: 12px;
    color: white;
}

.user-message {
    background-color: #2563eb;
    margin-left: auto;
}

.bot-message {
    background-color: #2d2d2d;
    margin-right: auto;
}

.input-container {
    padding: 16px;
    background: #2d2d2d;
    display: flex;
    gap: 8px;
}

.chat-input {
    flex-grow: 1;
    padding: 8px 12px;
    border-radius: 20px;
    border: none;
    background: #1a1a1a;
    color: white;
}

.send-button {
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    cursor: pointer;
}

.typing-indicator {
    display: none;
    padding: 12px;
    background: #2d2d2d;
    border-radius: 12px;
    margin: 8px;
}

.dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    background: white;
    border-radius: 50%;
    animation: wave 1.3s linear infinite;
}

.dot:nth-child(2) { animation-delay: -1.1s; }
.dot:nth-child(3) { animation-delay: -0.9s; }

@keyframes wave {
    0%, 60%, 100% { transform: initial; }
    30% { transform: translateY(-10px); }
}
`;
document.head.appendChild(style);

// Create chat widget HTML
const chatWidget = document.createElement('div');
chatWidget.className = 'chat-widget';
chatWidget.innerHTML = `
    <div class="chat-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    </div>
    <div class="chat-window">
        <div class="chat-header">
            <span>RoxomBot Assistant</span>
            <span class="close-button">✕</span>
        </div>
        <div class="messages-container">
            <div class="message bot-message">
                Hi! I'm RoxomBot. How can I help you understand BTC-denominated futures trading?
            </div>
            <div class="typing-indicator">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
        <div class="input-container">
            <input type="text" class="chat-input" placeholder="Type your message...">
            <button class="send-button">Send</button>
        </div>
    </div>
`;

// Add chat widget to page
document.body.appendChild(chatWidget);

// Chat functionality
const chatButton = chatWidget.querySelector('.chat-button');
const chatWindow = chatWidget.querySelector('.chat-window');
const closeButton = chatWidget.querySelector('.close-button');
const messagesContainer = chatWidget.querySelector('.messages-container');
const chatInput = chatWidget.querySelector('.chat-input');
const sendButton = chatWidget.querySelector('.send-button');
const typingIndicator = chatWidget.querySelector('.typing-indicator');

let conversationHistory = [];

// Toggle chat window
chatButton.addEventListener('click', () => {
    chatWindow.classList.add('active');
    chatWidget.classList.add('expanded');
    chatInput.focus();
});

closeButton.addEventListener('click', () => {
    chatWindow.classList.remove('active');
    chatWidget.classList.remove('expanded');
});

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    messagesContainer.insertBefore(messageDiv, typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    typingIndicator.style.display = 'block';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    chatInput.value = '';
    showTypingIndicator();

    try {
        const response = await fetch('https://roxom-chat.vercel.app/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                history: conversationHistory
            }),
        });

        const data = await response.json();
        hideTypingIndicator();

        if (data.error) {
            addMessage('Sorry, I encountered an error. Please try again.');
        } else {
            addMessage(data.response);
            conversationHistory.push(
                { role: 'user', content: message },
                { role: 'assistant', content: data.response }
            );
        }
    } catch (error) {
        hideTypingIndicator();
        addMessage('Sorry, I encountered an error. Please try again.');
    }
}

sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
