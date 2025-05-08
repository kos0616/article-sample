const API = import.meta.env.VITE_API_URL

export default async function sendMessage(message: string) {
  await fetch(API + '/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })
}
