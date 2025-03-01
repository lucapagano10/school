import os
from openai import OpenAI
from pathlib import Path
import markdown
import re
from dotenv import load_dotenv
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Load environment variables from .env file
load_dotenv()

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def chunk_text(text, max_chunk_size=1000):
    """Split text into smaller chunks."""
    sentences = text.split('. ')
    chunks = []
    current_chunk = []
    current_size = 0

    for sentence in sentences:
        sentence_size = len(sentence.split())
        if current_size + sentence_size > max_chunk_size:
            if current_chunk:
                chunks.append('. '.join(current_chunk) + '.')
                current_chunk = []
                current_size = 0
        current_chunk.append(sentence)
        current_size += sentence_size

    if current_chunk:
        chunks.append('. '.join(current_chunk) + '.')

    return chunks

def get_embedding(text):
    """Get embedding for text using OpenAI's API."""
    response = client.embeddings.create(
        model="text-embedding-ada-002",
        input=text
    )
    return response.data[0].embedding

def load_markdown_content():
    """Load and process all markdown files from the docs directory."""
    content = []
    docs_path = Path("docs")

    for md_file in docs_path.rglob("*.md"):
        with open(md_file, "r") as f:
            # Read the content
            text = f.read()
            # Remove YAML frontmatter
            text = re.sub(r"---.*?---", "", text, flags=re.DOTALL)
            # Convert markdown to plain text
            text = markdown.markdown(text)
            # Remove HTML tags
            text = re.sub(r"<[^>]+>", "", text)
            # Split into chunks
            chunks = chunk_text(text)
            for chunk in chunks:
                if len(chunk.strip()) > 50:  # Only include meaningful chunks
                    content.append({
                        "file": str(md_file),
                        "content": chunk,
                        "embedding": get_embedding(chunk)
                    })

    return content

def find_relevant_content(query, content, top_k=3):
    """Find the most relevant content chunks for the query."""
    query_embedding = get_embedding(query)

    # Calculate similarities
    similarities = []
    for item in content:
        similarity = cosine_similarity(
            [query_embedding],
            [item["embedding"]]
        )[0][0]
        similarities.append(similarity)

    # Get top k relevant chunks
    top_indices = np.argsort(similarities)[-top_k:]
    relevant_content = [content[i]["content"] for i in top_indices]

    return "\n\n".join(relevant_content)

def create_system_prompt(relevant_content):
    """Create a system prompt with context from the documentation."""
    return f"""You are RoxomBot, an AI assistant for the School of Roxom platform.
You help users understand concepts about BTC-denominated futures trading and the Roxom platform.
You should answer questions based on the following relevant documentation content:

{relevant_content}

Always be helpful, clear, and accurate. If you're not sure about something, say so.
Focus on explaining concepts in a way that's easy to understand while maintaining technical accuracy."""

def get_chatbot_response(user_input, content, conversation_history=[]):
    """Get a response from the chatbot using OpenAI's API."""
    try:
        # Find relevant content based on user query
        relevant_content = find_relevant_content(user_input, content)

        messages = [
            {"role": "system", "content": create_system_prompt(relevant_content)},
            *conversation_history,
            {"role": "user", "content": user_input}
        ]

        response = client.chat.completions.create(
            model="gpt-4",
            messages=messages,
            temperature=0.7,
            max_tokens=500
        )

        return response.choices[0].message.content

    except Exception as e:
        return f"Sorry, I encountered an error: {str(e)}"

def main():
    print("Loading School of Roxom content...")
    print("This might take a few minutes as we process and embed the content...")
    content = load_markdown_content()
    conversation_history = []

    print("RoxomBot: Hi! I'm here to help you understand School of Roxom concepts. What would you like to know?")

    while True:
        user_input = input("You: ")

        if user_input.lower() in ['quit', 'exit', 'bye']:
            print("RoxomBot: Goodbye! Happy trading!")
            break

        response = get_chatbot_response(user_input, content, conversation_history)
        print(f"RoxomBot: {response}")

        # Update conversation history
        conversation_history.extend([
            {"role": "user", "content": user_input},
            {"role": "assistant", "content": response}
        ])

if __name__ == "__main__":
    main()
