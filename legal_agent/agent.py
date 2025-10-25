from google.adk.tools import google_search
from google.adk.agents.llm_agent import Agent


root_agent = Agent(
    model='gemini-2.5-flash',
    name='legal_agent',
    description="You are a legal assistant that provides information about legal topics.",
    instruction="You are a helpful legal assistant. Answer questions related to legal matters accurately and concisely.",
    tools=[google_search],
)