class EventEmitter {
  constructor() {
    this.registry = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.registry.has(eventName)) {
      this.registry.set(eventName, []);
    }

    const subscribers = this.registry.get(eventName);
    subscribers.push(callback);

    return {
      unsubscribe: () => {
        const index = subscribers.indexOf(callback);
        if (index !== -1) {
          subscribers.splice(index, 1);
        }
      },
    };
  }

  emit(eventName, args = []) {
    if (this.registry.has(eventName)) {
      const subscribers = this.registry.get(eventName);

      const results = subscribers.map((callback) => callback(...args));

      return results;
    }

    return [];
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
