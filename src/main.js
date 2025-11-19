// File upload

let files = []
const uploader = document.querySelector('input')
const files_preview = document.querySelector('#fileslist')

uploader.addEventListener('change', e => {
  files = [...files, e.target.files[0]]
  console.log("Saved files")
  if (e.target.files[0].type.includes("video")) {
    let preview_elem = document.createElement("video")
    preview_elem.src = downloadFile(e.target.files[0].name)
    files_preview.appendChild(preview_elem)
  }

  if (e.target.files[0].type.includes("audio")) {
    let preview_elem = document.createElement("audio")
    preview_elem.src = downloadFile(e.target.files[0].name)
    files_preview.appendChild(preview_elem)
  }
})

function downloadFile(fileName, open=false) {
  let blob = new Blob([files.filter(file => file.name == fileName)][0], { type:files.filter(file => file.name == fileName)[0].type })
  if (open == false) {
    return URL.createObjectURL(blob)
  }
  else {
    window.open(URL.createObjectURL(blob), '_blank').focus();
  }
}