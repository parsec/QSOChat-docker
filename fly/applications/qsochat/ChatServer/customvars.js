module.exports.hostname = ''; // change to the hostname or IP of your host
module.exports.port = 80;
module.exports.hamqthcall = 'n4sbx';
module.exports.hamqthapipw = process.env.HAMQTH_PASSWORD;
module.exports.hamqthprog = 'kk4gqchat';
module.exports.title = 'KK4GQ QSOchat'; //change to your title for page
module.exports.logo = '/images/kk4gq.png'; //change to your logo in images directory
module.exports.links = [
        {href:'https://kk4gq.org',description:'Fayette County Amateur Radio Club'},
        {href:'https://github.com/parsec/QSOChat-docker',description:'QSOChat-docker Repo'}
]; //a JSON encoded list of links
module.exports.standardfreqs = [ "7.287.5", "5346.5", "3.975" ]; //an array of frequencies to use for preselect buttons;

