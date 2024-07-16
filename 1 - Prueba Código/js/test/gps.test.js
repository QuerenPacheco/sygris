import navigate from '../problems/gps.js';

test('navigate function returns the correct route', () => {
    const start = 0;
    const finish = 4;
    const numberOfIntersections = 5;
    const roads = [
        { from: 0, to: 1, drivingTime: 5 },
        { from: 0, to: 2, drivingTime: 10 },
        { from: 1, to: 2, drivingTime: 10 },
        { from: 1, to: 3, drivingTime: 2 },
        { from: 2, to: 3, drivingTime: 2 },
        { from: 2, to: 4, drivingTime: 5 },
        { from: 3, to: 2, drivingTime: 2 },
        { from: 3, to: 4, drivingTime: 10 }
    ];

    const expectedRoute = [0, 1, 3, 2, 4];

    const result = navigate(numberOfIntersections, roads, start, finish);

    expect(result).toEqual(expectedRoute);
});