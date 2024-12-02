
    let timerInterval;
    let timeLeft;

    function startTimer() {
        timeLeft = parseInt(document.getElementById('timerInput').value);
        document.getElementById('timeRemaining').textContent = timeLeft;

        timerInterval = setInterval(function () {
            if (timeLeft > 0) {
                timeLeft--;
                document.getElementById('timeRemaining').textContent = timeLeft;
            } else {
                clearInterval(timerInterval);
                alert('Time is up!');
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
        alert('Timer stopped.');
    }
