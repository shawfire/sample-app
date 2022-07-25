export async function sampleFetch() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log('res:', res)
    const data = (await res.json()).title
    console.log('data:', data)
    return data
}