export const doFiltering = (array, key, filter) => {
        return array.filter((item) =>
            (item[key].toLowerCase().includes(filter)));
    };