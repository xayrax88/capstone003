const functions = require('./CreatePost');

describe('CreatePost', () => {
    test('should render the title and description inputs', () => {
        render(<CreatePost />);
        expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Post...')).toBeInTheDocument();
        expect(screen.getByText('Create A Post')).toBeInTheDocument();
    });

    // test('should allow the user to enter text in the title and description inputs', () => {
    //     render(<CreatePost />);
    //     fireEvent.change(screen.getByPlaceholderText('Title...'), {
    //         target: { value: 'Post Title' },
    //     });
        // expect(screen.getByPlaceholderText('Title...').value).toBe('Post Title');
        // fireEvent.change(screen.getByPlaceholderText('Post...'), {
        //     target: { value }
