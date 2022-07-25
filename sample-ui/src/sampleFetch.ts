export async function sampleFetch() {
    const res = await fetch('http://localhost:8080/')
    console.log('res:', res)
    const data = (await res.json()).data
    console.log('data:', data)
    return data
}