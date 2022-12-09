export async function getItems() {
    const request = await fetch('http://localhost:3001/people');
    const items = await request.json();

    return items;
}

export async function getTasks() {
    const request = await fetch('http://localhost:3001/tasks');
    const tasks = await request.json();

    return tasks;
}

