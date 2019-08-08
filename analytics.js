const {app} = require('electron')
const ua = require('universal-analytics');
const uuid = require('uuid/v4');
const log = require('electron-log');
const Store = require('electron-store');
const store = new Store();


// Retrieve the userid value, and if it's not there, assign it a new uuid.
const userId = store.get('userid') || uuid();
// (re)save the userid, so it persists for the next app session.
store.set('userid', userId);
log.info("uuid:" + store.get('userid'))

const usr = ua('UA-120295167-6', userId);
function trackEvent(category, action, label, value) {
  usr
    .event({
      ec: category,
      ea: action,
      el: label,
      ev: value,
    })
    .send();
}
module.exports = { trackEvent };
