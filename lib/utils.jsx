import { getItems } from "../services/itemService";

export async function getPathsFromIds() {
    const items = await getItems();

    const ids = items.map(item => {
        return {
            params: {
                id: convertToPath(item.fullName),
            },
        };
    });

    return ids;
}

export async function getItemData(id) {
    const items = await getItems();

    const person = items.find((item) => convertToPath(item.fullName) === id);

    return {
        id: id,
        data: person,
    }
}

export function convertToPath(fullName) {
    return fullName.toLowerCase().replace(/\s/g, "-");
}