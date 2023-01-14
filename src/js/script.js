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

const handleCountUp = () => {
  let timeLeftForCoffee = 2500;
  let timeLeftForGirls = 280;
  let timeLeftForProjects = 2680;
  let timeLeftForHours = 8265;

  let timerEl1 = document.getElementById("counter-1");
  let timerEl2 = document.getElementById("counter-2");
  let timerEl3 = document.getElementById("counter-3");
  let timerEl4 = document.getElementById("counter-4");

  let timer = setInterval(() => {
    timerEl1.innerHTML = timeLeftForCoffee;
    timerEl2.innerHTML = timeLeftForGirls;
    timerEl3.innerHTML = timeLeftForProjects;
    timerEl4.innerHTML = timeLeftForHours;

    if (timeLeftForCoffee === 3000) {
      clearInterval(timer);
      timerEl1.innerHTML = "3000+";
      timerEl2.innerHTML = "780+";
      timerEl3.innerHTML = "3120+";
      timerEl4.innerHTML = "8765+";
    }
    timeLeftForGirls++;
    timeLeftForCoffee++;
    timeLeftForProjects++;
    timeLeftForHours++;
  }, 1);
}

// Move counter section
onVisible(element, () => {
  handleCountUp()
});