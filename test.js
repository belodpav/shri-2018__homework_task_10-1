const emitter = {
    _table: {},
    // O(1) амортизированная,
    on: function(event, handler) {
        // TODO: подписать
        this._table[event] = this._table[event] || new Set();

        this._table[event].add(handler);
    },
    // O(1) - амортизировання
    off: function(event, handler) {
        // TODO: отписать
        this._table[event].delete(handler);
    },
    /**
     *  O(n), где n - колличество обработчиков
     *  для события event
     */
    emit: function(event) {
        // TODO: обработка события
        const handlers = this._table[event];

        for (handler of handlers) {
            handler();
        }
    }
 }


const handlerFirst = function () {
    console.log('first');
};

const handlerSecond = function () {
    console.log('second');
};


// подписали
emitter.on('event', handlerFirst);
// обработали событие
//emitter.emit('event');
emitter.on('event', handlerSecond);
emitter.emit('event');
// отписали
emitter.off('event', handlerFirst);

console.log('----');
emitter.emit('event');