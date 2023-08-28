module.exports.hostname = ''; // change to the hostname or IP of your host
module.exports.port = 80;
module.exports.hamqthcall = process.env.HAMQTH_USER;
module.exports.hamqthapipw = process.env.HAMQTH_PASSWORD;
module.exports.hamqthprog = 'kk4gq-qsochat';
module.exports.title = 'KK4GQ QSOchat'; //change to your title for page
module.exports.logo = '/images/kk4gq.png'; //change to your logo in images directory
module.exports.links = [
        {href:'https://kk4gq.org',description:'Fayette County Amateur Radio Club'},
        {href:'https://github.com/g4klx',description:'G4KLX Software'},
        {href:'https://github.com/johnhays/QSOChat',description:'QSOChat Source'}
]; //a JSON encoded list of links
module.exports.standardfreqs = [ "7.287.5", "5346.5", "3.975" ]; //an array of frequencies to use for preselect buttons;

