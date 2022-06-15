import { NearContract, NearBindgen, call, view, near } from 'near-sdk-js'
import { serialize, deserialize } from 'borsh';
import { panic } from '../../../src/api';
import { Buffer } from 'buffer/'

@NearBindgen
class StatusMessage extends NearContract {
    constructor() {
        super()
        this.records = new Map()
    }

    deserialize() {
        borshDeserializeStatusMessage(this)
    }

    serialize() {
        borshSerializeStatusMessage(this)
    }

    @call
    set_status(message) {
        let account_id = near.signerAccountId()
        env.log(`${account_id} set_status with message ${message}`)
        this.records.set(account_id, message)
    }

    @view
    get_status(account_id) {
        env.log(`get_status for account_id ${account_id}`)
        return this.records.get(account_id) || null
    }
}

// This doesn't work, maybe due to @Nearbindgen cause this no longer the same class as StatusMessage
// const schema = new Map([[StatusMessage, {
//     'kind': 'struct',
//     'fields': [
//         ['records', {kind: 'map', key: 'string', value: 'string'}]
//     ]
// }]]);

class Assignable {
    constructor(properties) {
        Object.keys(properties).map((key) => {
            this[key] = properties[key];
        });
    }
}

class StatusMessageBorsh extends Assignable {}

const schema = new Map([[StatusMessageBorsh, {
    'kind': 'struct',
    'fields': [
        ['records', {kind: 'map', key: 'string', value: 'string'}]
    ]
}]]);

function borshSerializeStatusMessage(statusMessage) {
    let temp = new StatusMessageBorsh({records: statusMessage.records})
    near.jsvmStorageWrite('STATE', serialize(schema, temp));
}

function borshDeserializeStatusMessage(to) {
    let state = near.jsvmStorageRead('STATE');

    if (state) {
        let temp = deserialize(schema, StatusMessageBorsh, Buffer.from(state))
        Object.assign(to, temp);
    } else {
        throw new Error('Contract state is empty')
    }
}