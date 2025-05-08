const API = import.meta.env.VITE_API_URL

export default async function getAllMessage() {
  const response = await fetch(API + '/api/chat')
  if (response.ok) {
    const result = await response.json()
    return result
  }
}
