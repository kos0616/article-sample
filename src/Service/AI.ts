const API = import.meta.env.VITE_APP_URL

export default async function getAIResponse() {
  const response = await fetch(API + '/api/ai')
  if (response.ok) {
    const result = await response.json()
    return result
  }
}
