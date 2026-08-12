/* =========================================================
NANDU'S DEVOPS INTERVIEW MASTER GUIDE
JAVASCRIPT
========================================================= */

/* =========================================================
TOPIC SEARCH
========================================================= */

function searchTopics() {

```
const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

const cards = document.querySelectorAll(".topic-card");

cards.forEach(card => {

    const text = card.innerText.toLowerCase();

    if (text.includes(input)) {

        card.style.display = "flex";

    } else {

        card.style.display = "none";

    }

});
```

}

/* =========================================================
PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

```
console.log(
    "🚀 Nandu's DevOps Interview Master Guide Loaded!"
);
```

});
