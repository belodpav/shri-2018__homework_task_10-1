const emitter = {
    _table: {},
    // O(1) амортизированная,
    on: function(event, handler) {
        // TODO: подписать
        this._table[event] = this._table[event] || new Map();
        this._table[event].set(handler.name, handler);
    },
    // O(1) - амортизировання
    off: function(event, handler) {
        // TODO: отписать
        this._table[event].delete(handler.name);
    },
    /**
     *  O(n), где n - колличество обработчиков
     *  для события event
     */
    emit: function(event) {
        // TODO: обработка события
        const handlers = this._table[event].values();

        for (let handle of handlers) {
            handle();
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
emitter.emit('event');
emitter.on('event', handlerSecond);
emitter.emit('event');
// отписали
emitter.off('event', handlerFirst);