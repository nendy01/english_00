

const fragment = document.createDocumentFragment()

for (let i = 1; i <= 87; i++) {
  const audioContainer = document.createElement("div")
  const audio = document.createElement("audio")
  const audioTitle = document.createElement("h2")
    audio.setAttribute("controls","controls")
    audio.preload = "metadata"
  if (i < 10) {
      audio.src = `./audios/GS_Track_0${i}.mp3`
      audioTitle.textContent = `GS_Track_0${i}`
  } else {
      audio.src = `./audios/GS_Track_${i}.mp3`
     audioTitle.textContent = `GS_Track_${i}`
  }

  if (i === 2) audio.setAttribute("autoplay","autoplay")
  audio.type = "audio/mp3"

  audioContainer.append(audioTitle,audio)

audio.addEventListener("ended", ({target}) =>{
    const nextAudio = target.parentElement.nextElementSibling.lastElementChild
    setTimeout(() => nextAudio.play(), 3000);
})

  fragment.appendChild(audioContainer) 
}

document.body.appendChild(fragment)