export default jest.fn(() => {
        Promise.resolve({
            response : {
                div: 'Output Div'
            }
        })
    });
