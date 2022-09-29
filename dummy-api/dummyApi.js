function inject(request, state, logger, callback) {
    const response = require('/Users/yogesh/personal_projects/mountebank-first/dummy-api/response/success.json')
    console.log('The response is --> ', response);
    callback(response);
}