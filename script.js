
var accord = document.getElementsByClassName('accordian');
var lastOpened = [];

for (let i = 0; i < accord.length; i++) {
    accord[i].addEventListener('click', function() {

        this.classList.toggle('active');

        // Find the information panel inside the same accordion item.
        var Info = this.parentElement.querySelector('.Info');
        Info.classList.toggle('active');

        this.setAttribute(
            'aria-expanded',
            this.classList.contains('active')
        );

        lastOpened = lastOpened.filter(index => index !== i);

        if (this.classList.contains('active')) {
            lastOpened.push(i);
        }

        document.querySelector('.Centraliser').classList.remove(
            'colour-1', 'colour-2', 'colour-3'
        );

        document.body.classList.remove(
            'colour-1', 'colour-2', 'colour-3'
        );

        if (lastOpened.length > 0) {
            let latest = lastOpened[lastOpened.length - 1];
            let colour = `colour-${(latest % 3) + 1}`;

            document.querySelector('.Centraliser').classList.add(colour);
            document.body.classList.add(colour);
        }
    });
}


async function askAI(message) {
  try {
    const response = await fetch(
      "https://my-groq-api.jackmcsnoop.workers.dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "AI request failed");
    }

    return data.reply;

  } catch (error) {
    console.error("AI Error:", error);
    return "Sorry, something went wrong connecting to the AI.";
  }
}
