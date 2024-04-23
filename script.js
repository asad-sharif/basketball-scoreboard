const homeTeam = document.querySelector('.home-team');
const guestTeam = document.querySelector('.guest-team');
const DisplayHomeScore = document.querySelector('.score-board-home');
const DisplayGuestScore = document.querySelector('.score-board-guest');
const homeTeamScoreButtons = document.querySelectorAll('.home-team .btns button');
const guestTeamScoreButtons = document.querySelectorAll('.guest-team .btns button');

let homeScore = 0;
let guestScore = 0;
let leadingTeamInfo; // Declare a variable to hold the reference to the leading team info element

// Function to determine the leading team and update the leading team info
function determineLeadingTeam() {
    // Check if the leading team info element exists
    if (!leadingTeamInfo) {
        // If it doesn't exist, create it
        leadingTeamInfo = document.createElement('h2');
        document.body.append(leadingTeamInfo); // Append it to the body

        //styles
        leadingTeamInfo.style.color = 'black'
        leadingTeamInfo.style.textAlign = 'center'
        leadingTeamInfo.style.margin = '1rem auto'
        leadingTeamInfo.style.padding = '1rem '
        leadingTeamInfo.style.backgroundColor = 'white'
        leadingTeamInfo.style.borderRadius = '5px'
        leadingTeamInfo.style.width = 'fit-content'
        leadingTeamInfo.style.fontSize = '2rem'
        leadingTeamInfo.style.fontFamily = 'verdana'
    }

    // Determine the leading team and update the text content accordingly
    if (homeScore > guestScore) {
        leadingTeamInfo.textContent = 'Home team is leading';
    } else if (guestScore > homeScore) {
        leadingTeamInfo.textContent = 'Guest team is leading';
    } else {
        leadingTeamInfo.textContent = 'Both teams are tied';
    }
}

// Function to update the score display
function updateScore() {
    DisplayHomeScore.textContent = homeScore;
    DisplayGuestScore.textContent = guestScore;
    determineLeadingTeam(); // Update the leading team info after each score update
}

// Event listeners for home team score buttons
homeTeamScoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        let value = parseInt(button.textContent);
        homeScore += value;
        updateScore();
    });
});

// Event listeners for guest team score buttons
guestTeamScoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        let value = parseInt(button.textContent);
        guestScore += value;
        updateScore();
    });
});
