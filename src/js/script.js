const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
});

// Trigger counting from event
const element = document.getElementById("counting-stats");

function onVisible(element, callback) {
  new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        callback(element);
        observer.disconnect();
      }
    });
  }).observe(element);
}

// Move counter section
onVisible(element, () => {
  console.log("Obs");
  // const startValues = new Map()
  // endValues.set("counter-1", 0)
  // endValues.set("counter-2", 0)
  // endValues.set("counter-3", 0)
  // endValues.set("counter-4", 0)

  const endValues = new Map()
  endValues.set("counter-1", 3000)
  endValues.set("counter-2", 780)
  endValues.set("counter-3", 3120)
  endValues.set("counter-4", 8765)

  const elArr = [
    document.getElementById("counter-1"),
    document.getElementById("counter-2"),
    document.getElementById("counter-3"),
    document.getElementById("counter-4")
  ]

  for (const el of elArr) {
    const id = el.getAttribute("id");

    el.value += Number(el.value) + 1;

    console.log(el.value);
    if (el.value >= endValues.get(id)) {
      continue;
    }

    setTimeout(20)
  }



});