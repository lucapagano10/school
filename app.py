from flask import Flask, request, jsonify, render_template
from roxom_bot import load_markdown_content, get_chatbot_response
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Load content once when starting the server
print("Loading and processing content...")
content = load_markdown_content()
print("Content loaded!")

@app.route('/')
def home():
    return render_template('chat.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '')
        conversation_history = data.get('history', [])

        response = get_chatbot_response(user_message, content, conversation_history)

        return jsonify({
            'response': response,
            'error': None
        })
    except Exception as e:
        return jsonify({
            'response': None,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True)
