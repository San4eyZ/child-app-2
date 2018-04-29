export default ({ options, speed, capacity, quantity }) => ({
    options: Object.keys(options)
        .filter(value => options[value])
        .map(value => value.split('_')),
    speed,
    capacity,
    quantity
});
