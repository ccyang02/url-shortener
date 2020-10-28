function validateForm() {
  const input = document.querySelector('.input-url')
  if (input.value) return true
  else {
    alert("Input URL could not be empty.")
    return false
  }
}

function clickEvent() {
  const shortUrl = document.querySelector('.hidden-input')
  shortUrl.setAttribute('type', 'text')
  shortUrl.select()
  document.execCommand("copy")
  shortUrl.setAttribute('type', 'hidden')
}