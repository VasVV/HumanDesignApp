export const hasBought = (item) => {
    return {
        type: 'HASBOUGHT',
        payload: item
    };
};