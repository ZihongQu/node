'use strict';

const common = require('../common');
if (!common.hasCrypto)
  common.skip('missing crypto');

const assert = require('assert');
const crypto = require('crypto');

/* eslint-disable no-restricted-properties, no-restricted-syntax */
// TODO(zi): Remove no-restricted-syntax once we add no-restricted-properties to test/.eslintrc.yaml
assert.strictEqual(globalThis.crypto, crypto.webcrypto);
assert.strictEqual(Crypto, crypto.webcrypto.constructor);
assert.strictEqual(SubtleCrypto, crypto.webcrypto.subtle.constructor);
