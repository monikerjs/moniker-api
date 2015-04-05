
var db = require( '../../util/level' );


module.exports = function*() {
    var res = null;

    try {
        res = yield db.subs.meta.get( 'categories' );
    } catch( err ) {
        this.status = 500;
        this.body = {
            status: 500,
            message: 'Error getting categories',
            verbose: err
        };
    }

    this.status = 200;
    this.body = {
        status: 200,
        message: res
    };
};