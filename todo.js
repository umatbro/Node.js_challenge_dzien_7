const fs =  require('fs');

const DB_PATH = './app/data/todos.json'

let TODO =  function (title='', done=false) {
    this.title = title;
    this.done = done;
};

TODO.prototype.addToDbFile = function (dbPath=DB_PATH) {
    if (!fs.existsSync(dbPath)) {
        fs.writeFileSync(dbPath, JSON.stringify([]), 'utf8');
    }

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) console.log(err);
        else {
            let todos = JSON.parse(data);
            todos.push(this);
            fs.writeFile(dbPath, JSON.stringify(todos), 'utf8', (err) => {
                if (err) console.log(`Error writing new list: ${err}`);
            });
        }
    });

    console.log('after write');
};

/**
 * Read db file contents and do some actions with it.
 *
 * @param dbPath
 */
TODO.getAllFromDb = function(dbPath=DB_PATH) {
    return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
};


module.exports = TODO;