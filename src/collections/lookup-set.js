import * as near from '../api'

export class LookupSet {
    constructor(keyPrefix) {
        this.keyPrefix = keyPrefix
    }

    contains(key) {
        let storageKey = this.keyPrefix + key
        return near.jsvmStorageHasKey(storageKey)
    }
    
    remove(key) {
        let storageKey = this.keyPrefix + key
        if (near.jsvmStorageRemove(storageKey)) {
            return near.storageGetEvicted()
        }
        return null
    }

    set(key) {
        let storageKey = this.keyPrefix + key
        if (near.jsvmStorageWrite(storageKey, '')) {
            return near.storageGetEvicted()
        }
        return null
    }

    extend(keys) {
        for(let key of keys) {
            this.set(key)
        }
    }
}