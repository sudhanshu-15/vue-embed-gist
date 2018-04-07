const $ = {
    ajax: jest.fn(() => {
        Promise.resolve({
            response : {
                div: 'Output Div'
            }
        })
    })
};
export default $;