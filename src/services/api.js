export default async function fetchAPI (id) {
  if (!id) {
    const response = await fetch('http://localhost:1337/immobiles')
    const data = await response.json()
    return data
  } else {
    const response = await fetch(`http://localhost:1337/immobiles/:${id}`)
    const data = await response.json()
    return data
  }
}
