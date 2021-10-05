// generate a random unique id
export const uid = (prefix = "") => {
    return prefix + Date.now().toString(36) + Math.random().toString(36).substr(2);
}