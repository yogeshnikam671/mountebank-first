function inject(request, state, logger, callback) {
    const response = require(process.cwd() + '/dummy-api/response/success.json')
    console.log('The response is --> ', response);
    callback(response);
}