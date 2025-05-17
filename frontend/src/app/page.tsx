'use client'
import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    })
    const data = await res.json()
    setAnswer(data.answer)
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Chat with LLM</h1>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={4}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleSubmit}
      >
        Send
      </button>
      {answer && (
        <pre className="mt-4 p-4 bg-gray-100 rounded whitespace-pre-wrap">
          {answer}
        </pre>
      )}
    </main>
  )
}
