from fastapi import FastAPI
from pydantic import BaseModel
from llama_cpp import Llama

app = FastAPI()
llm = Llama.from_pretrained(
    repo_id="Qwen/Qwen2-0.5B-Instruct-GGUF",
    filename="Qwen2-0.5B-Instruct-q8_0.gguf",
    verbose=False,
)

class Query(BaseModel):
    prompt: str

@app.post("/chat")
def chat(q: Query):
    out = llm(f"Q: {q.prompt}\nA:", max_tokens=64, stop=["\n", "Q:"])
    return {"answer": out["choices"][0]["text"].strip()}
