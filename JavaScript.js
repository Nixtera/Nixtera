document.addEventListener("DOMContentLoaded", () => {
  
  const tabLinks = document.querySelectorAll("nav ul li a")

  tabLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").substring(1)

      tabLinks.forEach((link) => link.classList.remove("active"))

      this.classList.add("active")

      document.querySelectorAll(".tab-content").forEach((section) => {
        section.classList.remove("active")
      })

      document.getElementById(targetId).classList.add("active")

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  })

  function handleHashChange() {
    const hash = window.location.hash || "#home"
    const targetId = hash.substring(1)

    tabLinks.forEach((link) => link.classList.remove("active"))

    document.querySelector(`nav ul li a[href="${hash}"]`).classList.add("active")

    document.querySelectorAll(".tab-content").forEach((section) => {
      section.classList.remove("active")
    })

    document.getElementById(targetId).classList.add("active")
  }

  window.addEventListener("hashchange", handleHashChange)

  if (window.location.hash) {
    handleHashChange()
  }

  const versionSelects = document.querySelectorAll(".version-select")

  versionSelects.forEach((select) => {
    select.addEventListener("change", function () {
      const os = this.id.split("-")[0]
      const version = this.value
      const downloadBtn = document.querySelector(`.download-btn`)

      if (downloadBtn) {

        downloadBtn.href = `https://example.com/download/${os}/${version}`

        downloadBtn.textContent = `Download`
      }
    })
  })
})
