const dateTime = new Date()
const hours = dateTime.getHours() > 9
  ? dateTime.getHours() : `0${dateTime.getHours()}`
const mins = dateTime.getMinutes() > 9
  ? dateTime.getMinutes() : `0${dateTime.getMinutes()}`

document.getElementById('time').innerHTML = `${hours}:${mins}`
