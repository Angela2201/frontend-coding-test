export async function getItems() {
    const request = await fetch('http://localhost:3001/people/');
    const items = await request.json();

    return items;
}