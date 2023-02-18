const { generateText, checkAndGenerate } = require('./util');
test('should output name and age', () => {
    const text = generateText('James', 34);
    expect(text).toBe('James (34 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)')
})


test('should generate a valid text output', () => {
    const text = checkAndGenerate('James', 34);
    expect(text).toBe('James (34 years old)')
});