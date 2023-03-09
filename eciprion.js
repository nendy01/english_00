

const fragment = document.createDocumentFragment()

for (let i = 1; i <= 87; i++) {
  const audioContainer = document.createElement("div")
  const audio = document.createElement("audio")
  const audioTitle = document.createElement("h2")
  audio.setAttribute("controls", "controls")
  audio.preload = "auto"

  if (i < 10) {
    audio.src = i === 1 ? `./audios/GS_Track_01.mp3` : `./audios/GS_Track_0${i}.mp3`
    audioTitle.textContent = `GS_Track_0${i}`
  }else {
    audio.src = `./audios/GS_Track_${i}.mp3`
    audioTitle.textContent = `GS_Track_${i}`
  }
  audio.classList.add(`audio${i}`)
  if (i == 1) {
    audio.setAttribute('autoplay', 'autoplay');
  }
  audio.type = "audio/mp3"
  if (i === 1) audioTitle.textContent = `Introduction`
  audio.setAttribute("id", i)
  
  audioContainer.append(audioTitle, audio)
  
  audio.addEventListener("ended", ({ target }) => {
    const nextAudio = target.parentElement.nextElementSibling.lastElementChild
    setTimeout(() => nextAudio.play(), 3000);
  })
  
  fragment.appendChild(audioContainer)
}

document.body.appendChild(fragment)
