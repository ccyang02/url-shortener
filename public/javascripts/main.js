function validateForm() {
  // for preventing form submitted when empty input
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

$(function () {
  $('.copy').popover({ delay: { "hide": 500 } })
  $('.copy').popover().click(function () {
    setTimeout(function () {
      $('.copy').popover('hide')
    }, 2000)
  })
})
