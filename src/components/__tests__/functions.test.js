const axios = require('axios');
const functions = require('./functions');

//lifecycle methods? 

//runs before each and after each tests
// beforeEach(() => initDatabase()); 
// afterEach(() => closeDatabase());

//runs once before all & after all
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name...')

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });
    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});


//-----------------
//working with async data
//Promise 
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     });
// });


//Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');

});