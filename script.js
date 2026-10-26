/* Feature 1: Light/dark theme toggle */
const themeButton = document.getElementById("toggle");
const body = document.body;
themeButton.addEventListener("click", function switchTheme() {
    if (body.classList.contains("darkThemeBCWhite"))
    {
        body.classList.remove("darkThemeBCWhite");
        body.classList.remove("darkThemeBCBlack");
        body.classList.remove("darkThemeColWhite");
        body.classList.remove("darkThemeOutWhite");
        body.classList.remove("darkThemeOutBlack");
        body.classList.remove("darkThemeBorWhite");
        body.classList.remove("darkThemeBorBlack");
    }
    else 
    {
        body.classList.add("darkThemeBCWhite");
        body.classList.add("darkThemeBCBlack");
        body.classList.add("darkThemeColWhite");
        body.classList.add("darkThemeOutWhite");
        body.classList.add("darkThemeOutBlack");
        body.classList.add("darkThemeBorWhite");
        body.classList.add("darkThemeBorBlack");
    }
})
/* Feature 2: Trivia quiz */
const packersButton = document.getElementById("gbp");
const sixersButton = document.getElementById("p76");
const chelseaButton = document.getElementById("cfc");
const rmButton = document.getElementById("rmcf");
const tqPage = document.getElementById("tqPage");
if (packersButton)
{
    packersButton.addEventListener("click", function gbpTriviaQuiz() {
        tqPage.innerHTML = "";
        tqPage.innerHTML = ` 
            <h1 id="gbpHeading" class="mainHeadings">Packers Trivia Quiz</h1>
            <form id="gbpForm" class="tqForms">
                <ol>
                    <!--Question 1-->
                    <li id="gbpQ1" class="questions">Which Packers player holds the franchise record for appearances?</li>
                    <input id="rad1_1_1" type="radio" name="q1" value="BS" class="rads">
                    <label id="label1_1_1" class="tqLabels" for="rad1_1_1">Bart Starr</label> <br>
                    <input id="rad1_1_2" type="radio" name="q1" value="BF" class="rads">
                    <label id="label1_1_2" class="tqLabels" for="rad1_1_2">Brett Favre</label> <br>
                    <input id="rad1_1_3" type="radio" name="q1" value="AR" class="rads">
                    <label id="label1_1_3" class="tqLabels" for="rad1_1_3">Aaron Rodgers</label> <br>
                    <input id="rad1_1_4" type="radio" name="q1" value="MC" class="rads">
                    <label id="label1_1_4" class="tqLabels" for="rad1_1_4">Mason Crosby</label> <br> <!--Right answer-->
                    <!--Question 2-->
                    <li id="gbpQ2" class="questions">Which Packers player holds the franchise record for receiving touchdowns?</li>
                    <input id="rad1_2_1" type="radio" name="q2" value="DH" class="rads">
                    <label id="label1_2_1" class="tqLabels" for="rad1_2_1">Don Hutson</label> <br> <!--Right answer-->
                    <input id="rad1_2_2" type="radio" name="q2" value="DD" class="rads">
                    <label id="label1_2_2" class="tqLabels" for="rad1_2_2">Donald Driver</label> <br>
                    <input id="rad1_2_3" type="radio" name="q2" value="DA" class="rads">
                    <label id="label1_2_3" class="tqLabels" for="rad1_2_3">Davante Adams</label> <br>
                    <input id="rad1_2_4" type="radio" name="q2" value="JN" class="rads">
                    <label id="label1_2_4" class="tqLabels" for="rad1_2_4">Jordy Nelson</label> <br>
                    <!--Question 3-->
                    <li id="gbpQ3" class="questions">Which Packers player holds the franchise record for single-season rushing yards?</li>
                    <input id="rad1_3_1" type="radio" name="q3" value="JJ" class="rads">
                    <label id="label1_3_1" class="tqLabels" for="rad1_3_1">Josh Jacobs</label> <br>
                    <input id="rad1_3_2" type="radio" name="q3" value="AG" class="rads">
                    <label id="label1_3_2" class="tqLabels" for="rad1_3_2">Ahman Green</label> <br> <!--Right answer-->
                    <input id="rad1_3_3" type="radio" name="q3" value="JT" class="rads">
                    <label id="label1_3_3" class="tqLabels" for="rad1_3_3">Jim Taylor</label> <br>
                    <input id="rad1_3_4" type="radio" name="q3" value="DoL" class="rads">
                    <label id="label1_3_4" class="tqLabels" for="rad1_3_4">Dorsey Levens</label> <br>
                    <!--Question 4-->
                    <li id="gbpQ4" class="questions">Which team is NOT a division rival of the Packers?</li>
                    <input id="rad1_4_1" type="radio" name="q4" value="CB" class="rads">
                    <label id="label1_4_1" class="tqLabels" for="rad1_4_1">Chicago Bears</label> <br>
                    <input id="rad1_4_2" type="radio" name="q4" value="PE" class="rads">
                    <label id="label1_4_2" class="tqLabels" for="rad1_4_2">Philadelphia Eagles</label> <br> <!--Right answer-->
                    <input id="rad1_4_3" type="radio" name="q4" value="MV" class="rads">
                    <label id="label1_4_3" class="tqLabels" for="rad1_4_3">Minnesota Vikings</label> <br>
                    <input id="rad1_4_4" type="radio" name="q4" value="DeL" class="rads">
                    <label id="label1_4_4" class="tqLabels" for="rad1_4_4">Detroit Lions</label> <br>
                    <!--Question 5-->
                    <li id="gbpQ5" class="questions">Did the Packers win their most recent Super Bowl appearance?</li>
                    <input id="rad1_5_1" type="radio" name="q5" value="YES" class="rads">
                    <label id="label1_5_1" class="tqLabels" for="rad1_5_1">Yes</label> <br> <!--Right answer-->
                    <input id="rad1_5_2" type="radio" name="q5" value="NO" class="rads">
                    <label id="label1_5_2" class="tqLabels" for="rad1_5_2">No</label> <br>
                    <!--Question 6-->
                    <li id="gbpQ6" class="questions">Which Packers head coach holds the franchise record for the highest regular season win 
                    percentage?</li>
                    <input id="rad1_6_1" type="radio" name="q6" value="MM" class="rads">
                    <label id="label1_6_1" class="tqLabels" for="rad1_6_1">Mike McCarthy</label> <br>
                    <input id="rad1_6_2" type="radio" name="q6" value="MLF" class="rads">
                    <label id="label1_6_2" class="tqLabels" for="rad1_6_2">Matt LaFleur</label> <br>
                    <input id="rad1_6_3" type="radio" name="q6" value="MG" class="rads">
                    <label id="label1_6_3" class="tqLabels" for="rad1_6_3">Mike Holmgren</label> <br>
                    <input id="rad1_6_4" type="radio" name="q6" value="VL" class="rads">
                    <label id="label1_6_4" class="tqLabels" for="rad1_6_4">Vince Lombardi</label> <br> <!--Right answer-->
                    <!--Question 7-->
                    <li id="gbpQ7" class="questions">Which Packers player is tied for the NFL record for defensive touchdowns?</li>
                    <input id="rad1_7_1" type="radio" name="q7" value="HA" class="rads">
                    <label id="label1_7_1" class="tqLabels" for="rad1_7_1">Herb Adderley</label> <br>
                    <input id="rad1_7_2" type="radio" name="q7" value="CW" class="rads">
                    <label id="label1_7_2" class="tqLabels" for="rad1_7_2">Charles Woodson</label> <br> <!--Right answer-->
                    <input id="rad1_7_3" type="radio" name="q7" value="DS" class="rads">
                    <label id="label1_7_3" class="tqLabels" for="rad1_7_3">Darren Sharper</label> <br>
                    <input id="rad1_7_4" type="radio" name="q7" value="LB" class="rads">
                    <label id="label1_7_4" class="tqLabels" for="rad1_7_4">LeRoy Butler</label> <br>
                    <!--Question 8-->
                    <li id="gbpQ8" class="questions">Which Packers player holds the offical franchise record for sacks?</li>
                    <input id="rad1_8_1" type="radio" name="q8" value="CM" class="rads">
                    <label id="label1_8_1" class="tqLabels" for="rad1_8_1">Clay Matthews</label> <br> <!--Right answer-->
                    <input id="rad1_8_2" type="radio" name="q8" value="WD" class="rads">
                    <label id="label1_8_2" class="tqLabels" for="rad1_8_2">Willie Davis</label> <br>
                    <input id="rad1_8_3" type="radio" name="q8" value="RW" class="rads">
                    <label id="label1_8_3" class="tqLabels" for="rad1_8_3">Reggie White</label> <br>
                    <input id="rad1_8_4" type="radio" name="q8" value="KGB" class="rads">
                    <label id="label1_8_4" class="tqLabels" for="rad1_8_4">Kabeer Gbaja-Biamala</label> <br>
                    <!--Question 9-->
                    <li id="gbpQ9" class="questions">How many former Packers players have made it into the Pro Football Hall of Fame?</li>
                    <input id="rad1_9_1" type="radio" name="q9" value="29" class="rads">
                    <label id="label1_9_1" class="tqLabels" for="rad1_9_1">29</label> <br> <!--Right answer-->
                    <input id="rad1_9_2" type="radio" name="q9" value="40" class="rads">
                    <label id="label1_9_2" class="tqLabels" for="rad1_9_2">40</label> <br>
                    <input id="rad1_9_3" type="radio" name="q9" value="27" class="rads">
                    <label id="label1_9_3" class="tqLabels" for="rad1_9_3">27</label> <br>
                    <input id="rad1_9_4" type="radio" name="q9" value="36" class="rads">
                    <label id="label1_9_4" class="tqLabels" for="rad1_9_4">36</label> <br> 
                    <!--Question 10-->
                    <li id="gbpQ10" class="questions">True or false: the Lambeau Leap was created by Sterling Sharpe.</li>
                    <input id="rad1_10_1" type="radio" name="q10" value="TRUE" class="rads">
                    <label id="label1_10_1" class="tqLabels" for="rad1_10_1">True</label> <br>
                    <input id="rad1_10_2" type="radio" name="q10" value="FALSE" class="rads">
                    <label id="label1_10_2" class="tqLabels" for="rad1_10_2">False</label> <br> <!--Right answer-->
                </ol><br><br>
                <button id="gbpBackButton" class="quizBackButtons" type="button">Go back</button> <br> <br>
                <button id="gbpSubmitButton" class="quizSubmitButtons" type="submit">Submit answers</button>
            </form>
        `; /* "`" lets you turn the subsequent text into a multi-line string */
        /* Back button code */
        const gbpBackButton = document.getElementById("gbpBackButton");
        gbpBackButton.addEventListener("click", function gbpGoBack(){
            tqPage.innerHTML = `
                <h1 id="h5_1" class="mainHeadings">Sports Team Trivia Quiz</h1>
                <h2 id="h5_2" class="genText">Choose a team:</h2>
                <!--This div element is used to align the team cards in the centre-->
                <div id="tcContainer">
                    <button id="gbp" class="teamCards" type="button">
                    <img class="logos" src="images/gb.png" alt="A picture of the Green Bay Packers logo" width="200" height="200"><br>
                    Green Bay Packers
                    </button>
                    <button id="p76" class="teamCards" type="button">
                    <img class="logos" src="images/76ers.png" alt="A picture of the Philadelphia 76ers logo" width="200" height="200"><br>
                    Philadelphia 76ers
                    </button>
                    <button id="cfc" class="teamCards" type="button">
                    <img class="logos" src="images/chelsea.png" alt="A picture of the Chelsea FC logo" width="200" height="200"><br>
                    Chelsea FC
                    </button>
                    <button id="rmcf" class="teamCards" type="button">
                    <img class="logos" src="images/rm.png" alt="A picture of the Real Madrdid CF logo" width="200" height="200"><br>
                    Real Madrid CF
                    </button>
                </div>
            `;
        })
        /* Submit button code */
        gbpSubmitButton.addEventListener("click", function gbpSubmit(){
            const gbpSubmitButton = document.getElementById("gbpSubmitButton");
            let gbpScore = 0;
            /* Increment gbpScore for correct answers */
            if (document.getElementById("rad1_1_4").checked)
            {
                gbpScore++;
            }
            if (document.getElementById("rad1_2_1").checked)
            {
                gbpScore++;
            }
            if (document.getElementById("rad1_3_2").checked)
            {
                gbpScore++;
            }
            if (document.getElementById("rad1_4_2").checked)
            {
                gbpScore++;
            }
            if (document.getElementById("rad1_5_1").checked)
            {
                gbpScore++;
            }
            if (document.getElementById("rad1_6_4").checked)
            {
                gbpScore++;
            }
            if (document.getElementById("rad1_7_2").checked)
            {
                gbpScore++;
            }
            if (document.getElementById("rad1_8_1").checked)
            {
                gbpScore++;
            }
            if (document.getElementById("rad1_9_1").checked)
            {
                gbpScore++;
            }
            if (document.getElementById("rad1_10_2").checked)
            {
                gbpScore++;
            }
            tqPage.innerHTML = `
                <h1 id="h5_1" class="mainHeadings">Packers Trivia Quiz</h1>
                <h2 id="h5_2" class="genText">Your results:</h2>
                <div id="tqForm1" class="tqForms">
                    <p id="gbpResult" class="results">Congratulations!</p>
                </div>
            `;
            let gbResult = document.getElementById("gbpResult").innerHTML;
            gbResult = "Congratulations, you got a score of " + gbpScore.toString() + "/10.";
            document.getElementById("gbpResult").innerHTML = gbResult;
        })
    })
}
if (sixersButton)
{
    sixersButton.addEventListener("click", function p76TriviaQuiz() {
        tqPage.innerHTML = "";
        tqPage.innerHTML = ` 
            <h1 id="p76Heading" class="mainHeadings">76ers Trivia Quiz</h1>
            <form id="p76Form" class="tqForms">
                <ol>
                    <!--Question 1-->
                    <li id="p76Q1" class="questions">Which 76ers player holds the franchise record for appearances?</li>
                    <input id="rad2_1_1" type="radio" name="q1" value="AI" class="rads">
                    <label id="label2_1_1" class="tqLabels" for="rad2_1_1">Allen Iverson</label> <br>
                    <input id="rad2_1_2" type="radio" name="q1" value="HG" class="rads">
                    <label id="label2_1_2" class="tqLabels" for="rad2_1_2">Hal Greer</label> <br> <!--Right answer-->
                    <input id="rad2_1_3" type="radio" name="q1" value="DRJ" class="rads">
                    <label id="label2_1_3" class="tqLabels" for="rad2_1_3">Julius Erving</label> <br>
                    <input id="rad2_1_4" type="radio" name="q1" value="DS" class="rads">
                    <label id="label2_1_4" class="tqLabels" for="rad2_1_4">Dolph Schayes</label> <br>
                    <!--Question 2-->
                    <li id="p76Q2" class="questions">Which 76ers player holds the franchise record for rebounds?</li>
                    <input id="rad2_2_1" type="radio" name="q2" value="MM" class="rads">
                    <label id="label2_2_1" class="tqLabels" for="rad2_2_1">Moses Malone</label> <br>
                    <input id="rad2_2_2" type="radio" name="q2" value="WC" class="rads">
                    <label id="label2_2_2" class="tqLabels" for="rad2_2_2">Wilt Chamberlain</label> <br>
                    <input id="rad2_2_3" type="radio" name="q2" value="CB" class="rads">
                    <label id="label2_2_3" class="tqLabels" for="rad2_2_3">Charles Barkley</label> <br>
                    <input id="rad2_2_4" type="radio" name="q2" value="DS" class="rads">
                    <label id="label2_2_4" class="tqLabels" for="rad2_2_4">Dolph Schayes</label> <br> <!--Right answer-->
                    <!--Question 3-->
                    <li id="p76Q3" class="questions">Which 76ers player is NOT tied for the franchise record for assists in a game?</li>
                    <input id="rad2_3_1" type="radio" name="q3" value="MC" class="rads">
                    <label id="label2_3_1" class="tqLabels" for="rad2_3_1">Maurice Cheeks</label> <br>
                    <input id="rad2_3_2" type="radio" name="q3" value="JH" class="rads">
                    <label id="label2_3_2" class="tqLabels" for="rad2_3_2">James Harden</label> <br>
                    <input id="rad2_3_3" type="radio" name="q3" value="WC" class="rads">
                    <label id="label2_3_3" class="tqLabels" for="rad2_3_3">Wilt Chamberlain</label> <br>
                    <input id="rad2_3_4" type="radio" name="q3" value="BS" class="rads">
                    <label id="label2_3_4" class="tqLabels" for="rad2_3_4">Ben Simmons</label> <br> <!--Right answer-->
                    <!--Question 4-->
                    <li id="p76Q4" class="questions">Which team did the 76ers beat to win the NBA Finals in the 1982-83 season?</li>
                    <input id="rad2_4_1" type="radio" name="q4" value="LAL" class="rads">
                    <label id="label2_4_1" class="tqLabels" for="rad2_4_1">Los Angeles Lakers</label> <br> <!--Right answer-->
                    <input id="rad2_4_2" type="radio" name="q4" value="SAS" class="rads">
                    <label id="label2_4_2" class="tqLabels" for="rad2_4_2">San Antonio Spurs</label> <br>
                    <input id="rad2_4_3" type="radio" name="q4" value="HR" class="rads">
                    <label id="label2_4_3" class="tqLabels" for="rad2_4_3">Houston Rockets</label> <br>
                    <input id="rad2_4_4" type="radio" name="q4" value="PS" class="rads">
                    <label id="label2_4_4" class="tqLabels" for="rad2_4_4">Phoenix Suns</label> <br>
                    <!--Question 5-->
                    <li id="p76Q5" class="questions">True or false: the 76ers were formerly known as the Maryland Nationals.</li>
                    <input id="rad2_5_1" type="radio" name="q5" value="TRUE" class="rads">
                    <label id="label2_5_1" class="tqLabels" for="rad2_5_1">True</label> <br>
                    <input id="rad2_5_2" type="radio" name="q5" value="FALSE" class="rads">
                    <label id="label2_5_2" class="tqLabels" for="rad2_5_2">False</label> <br> <!--Right answer-->
                    <!--Question 6-->
                    <li id="p76Q6" class="questions">Which 76ers head coach holds the franchise record for the most wins?</li>
                    <input id="rad2_6_1" type="radio" name="q6" value="LB" class="rads">
                    <label id="label2_6_1" class="tqLabels" for="rad2_6_1">Larry Brown</label> <br>
                    <input id="rad2_6_2" type="radio" name="q6" value="BC" class="rads">
                    <label id="label2_6_2" class="tqLabels" for="rad2_6_2">Billy Cunningham</label> <br> <!--Right answer-->
                    <input id="rad2_6_3" type="radio" name="q6" value="AH" class="rads">
                    <label id="label2_6_3" class="tqLabels" for="rad2_6_3">Alex Hannum</label> <br>
                    <input id="rad2_6_4" type="radio" name="q6" value="AC" class="rads">
                    <label id="label2_6_4" class="tqLabels" for="rad2_6_4">Al Cervi</label> <br>
                    <!--Question 7-->
                    <li id="p76Q7" class="questions">Which 76ers player holds the NBA record for most points in a game?</li>
                    <input id="rad2_7_1" type="radio" name="q7" value="JE" class="rads">
                    <label id="label2_7_1" class="tqLabels" for="rad2_7_1">Joel Embiid</label> <br>
                    <input id="rad2_7_2" type="radio" name="q7" value="WC" class="rads">
                    <label id="label2_7_2" class="tqLabels" for="rad2_7_2">Wilt Chamberlain</label> <br> <!--Right answer-->
                    <input id="rad2_7_3" type="radio" name="q7" value="AI" class="rads">
                    <label id="label2_7_3" class="tqLabels" for="rad2_7_3">Allen Iverson</label> <br>
                    <input id="rad2_7_4" type="radio" name="q7" value="DRJ" class="rads">
                    <label id="label2_7_4" class="tqLabels" for="rad2_7_4">Julius Erving</label> <br>
                    <!--Question 8-->
                    <li id="p76Q8" class="questions">Which 76ers player holds the franchise record for single-season steals?</li>
                    <input id="rad2_8_1" type="radio" name="q8" value="MC" class="rads">
                    <label id="label2_8_1" class="tqLabels" for="rad2_8_1">Maurice Cheeks</label> <br>
                    <input id="rad2_8_2" type="radio" name="q8" value="AI" class="rads">
                    <label id="label2_8_2" class="tqLabels" for="rad2_8_2">Allen Iverson</label> <br> <!--Right answer-->
                    <input id="rad2_8_3" type="radio" name="q8" value="SM" class="rads">
                    <label id="label2_8_3" class="tqLabels" for="rad2_8_3">Steve Mix</label> <br>
                    <input id="rad2_8_4" type="radio" name="q8" value="GMc" class="rads">
                    <label id="label2_8_4" class="tqLabels" for="rad2_8_4">George McGinnis</label> <br>
                    <!--Question 9-->
                    <li id="p76Q9" class="questions">How many former 76ers players made it into the NBA 75th Anniversary Team?</li>
                    <input id="rad2_9_1" type="radio" name="q9" value="9" class="rads">
                    <label id="label2_9_1" class="tqLabels" for="rad2_9_1">9</label> <br>
                    <input id="rad2_9_2" type="radio" name="q9" value="10" class="rads">
                    <label id="label2_9_2" class="tqLabels" for="rad2_9_2">10</label> <br>
                    <input id="rad2_9_3" type="radio" name="q9" value="11" class="rads">
                    <label id="label2_9_3" class="tqLabels" for="rad2_9_3">11</label> <br> <!--Right answer-->
                    <input id="rad2_9_4" type="radio" name="q9" value="12" class="rads">
                    <label id="label2_9_4" class="tqLabels" for="rad2_9_4">12</label> <br>
                    <!--Question 10-->
                    <li id="p76Q10" class="questions">True or false: the previous name of the Xfinity Mobile Arena was the Wells Fargo Center.</li>
                    <input id="rad2_10_1" type="radio" name="q10" value="TRUE" class="rads">
                    <label id="label2_10_1" class="tqLabels" for="rad2_10_1">True</label> <br> <!--Right answer-->
                    <input id="rad2_10_2" type="radio" name="q10" value="FALSE" class="rads">
                    <label id="label2_10_2" class="tqLabels" for="rad2_10_2">False</label> <br>
                </ol><br><br>
                <button id="p76BackButton" class="quizBackButtons" type="button">Go back</button> <br> <br>
                <button id="p76SubmitButton" class="quizSubmitButtons" type="submit">Submit answers</button>
            </form>
        `;
        /* Back button code */
        const p76BackButton = document.getElementById("p76BackButton");
        p76BackButton.addEventListener("click", function p76GoBack(){
            tqPage.innerHTML = `
                <h1 id="h5_1" class="mainHeadings">Sports Team Trivia Quiz</h1>
                <h2 id="h5_2" class="genText">Choose a team:</h2>
                <!--This div element is used to align the team cards in the centre-->
                <div id="tcContainer">
                    <button id="gbp" class="teamCards" type="button">
                    <img class="logos" src="images/gb.png" alt="A picture of the Green Bay Packers logo" width="200" height="200"><br>
                    Green Bay Packers
                    </button>
                    <button id="p76" class="teamCards" type="button">
                    <img class="logos" src="images/76ers.png" alt="A picture of the Philadelphia 76ers logo" width="200" height="200"><br>
                    Philadelphia 76ers
                    </button>
                    <button id="cfc" class="teamCards" type="button">
                    <img class="logos" src="images/chelsea.png" alt="A picture of the Chelsea FC logo" width="200" height="200"><br>
                    Chelsea FC
                    </button>
                    <button id="rmcf" class="teamCards" type="button">
                    <img class="logos" src="images/rm.png" alt="A picture of the Real Madrdid CF logo" width="200" height="200"><br>
                    Real Madrid CF
                    </button>
                </div>
            `;
        })
        /* Submit button code */
        p76SubmitButton.addEventListener("click", function p76Submit(){
            const p76SubmitButton = document.getElementById("p76SubmitButton");
            let p76Score = 0;
            /* Increment p76Score for correct answers */
            if (document.getElementById("rad2_1_2").checked)
            {
                p76Score++;
            }
            if (document.getElementById("rad2_2_4").checked)
            {
                p76Score++;
            }
            if (document.getElementById("rad2_3_4").checked)
            {
                p76Score++;
            }
            if (document.getElementById("rad2_4_1").checked)
            {
                p76Score++;
            }
            if (document.getElementById("rad2_5_2").checked)
            {
                p76Score++;
            }
            if (document.getElementById("rad2_6_2").checked)
            {
                p76Score++;
            }
            if (document.getElementById("rad2_7_2").checked)
            {
                p76Score++;
            }
            if (document.getElementById("rad2_8_2").checked)
            {
                p76Score++;
            }
            if (document.getElementById("rad2_9_3").checked)
            {
                p76Score++;
            }
            if (document.getElementById("rad2_10_1").checked)
            {
                p76Score++;
            }
            tqPage.innerHTML = `
                <h1 id="h5_1" class="mainHeadings">76ers Trivia Quiz</h1>
                <h2 id="h5_2" class="genText">Your results:</h2>
                <div id="tqForm2" class="tqForms">
                    <p id="p76Result" class="results">Congratulations!</p>
                </div>
            `;
            let phillyResult = document.getElementById("p76Result").innerHTML;
            phillyResult = "Congratulations, you got a score of " + p76Score.toString() + "/10.";
            document.getElementById("p76Result").innerHTML = phillyResult;
        })
    })
}
if(chelseaButton)
{
    chelseaButton.addEventListener("click", function cfcTriviaQuiz() {
        tqPage.innerHTML = "";
        tqPage.innerHTML = ` 
            <h1 id="cfcHeading" class="mainHeadings">Chelsea Trivia Quiz</h1>
            <form id="cfcForm" class="tqForms">
                <ol>
                    <!--Question 1-->
                    <li id="cfcQ1" class="questions">Which Chelsea player holds the franchise record for appearances?</li>
                    <input id="rad3_1_1" type="radio" name="q1" value="JT" class="rads">
                    <label id="label3_1_1" class="tqLabels" for="rad3_1_1">John Terry</label> <br>
                    <input id="rad3_1_2" type="radio" name="q1" value="PB" class="rads">
                    <label id="label3_1_2" class="tqLabels" for="rad3_1_2">Peter Bonetti</label> <br>
                    <input id="rad3_1_3" type="radio" name="q1" value="FL" class="rads">
                    <label id="label3_1_3" class="tqLabels" for="rad3_1_3">Frank Lampard</label> <br>
                    <input id="rad3_1_4" type="radio" name="q1" value="RH" class="rads">
                    <label id="label3_1_4" class="tqLabels" for="rad3_1_4">Ron Harris</label> <br> <!--Right answer-->
                    <!--Question 2-->
                    <li id="cfcQ2" class="questions">Which Chelsea player holds the franchise record for single-season goals and assists?</li>
                    <input id="rad3_2_1" type="radio" name="q2" value="CP" class="rads">
                    <label id="label3_2_1" class="tqLabels" for="rad3_2_1">Cole Palmer</label> <br>
                    <input id="rad3_2_2" type="radio" name="q2" value="FL" class="rads">
                    <label id="label3_2_2" class="tqLabels" for="rad3_2_2">Frank Lampard</label> <br> <!--Right answer-->
                    <input id="rad3_2_3" type="radio" name="q2" value="DD" class="rads">
                    <label id="label3_2_3" class="tqLabels" for="rad3_2_3">Didier Drogba</label> <br>
                    <input id="rad3_2_4" type="radio" name="q2" value="EH" class="rads">
                    <label id="label3_2_4" class="tqLabels" for="rad3_2_4">Eden Hazard</label> <br>
                    <!--Question 3-->
                    <li id="cfcQ3" class="questions">Which Chelsea player holds the franchise record for clean sheets?</li>
                    <input id="rad3_3_1" type="radio" name="q3" value="PB" class="rads">
                    <label id="label3_3_1" class="tqLabels" for="rad3_3_1">Peter Bonetti</label> <br>
                    <input id="rad3_3_2" type="radio" name="q3" value="PC" class="rads">
                    <label id="label3_3_2" class="tqLabels" for="rad3_3_2">Petr Cech</label> <br> <!--Right answer-->
                    <input id="rad3_3_3" type="radio" name="q3" value="SM" class="rads">
                    <label id="label3_3_3" class="tqLabels" for="rad3_3_3">Sam Millington</label> <br>
                    <input id="rad3_3_4" type="radio" name="q3" value="CC" class="rads">
                    <label id="label3_3_4" class="tqLabels" for="rad3_3_4">Carlo Cudini</label> <br>
                    <!--Question 4-->
                    <li id="cfcQ4" class="questions">How many rivals does Chelsea currently have in London?</li>
                    <input id="rad3_4_1" type="radio" name="q4" value="3" class="rads">
                    <label id="label3_4_1" class="tqLabels" for="rad3_4_1">3</label> <br>
                    <input id="rad3_4_2" type="radio" name="q4" value="4" class="rads">
                    <label id="label3_4_2" class="tqLabels" for="rad3_4_2">4</label> <br>
                    <input id="rad3_4_3" type="radio" name="q4" value="7" class="rads">
                    <label id="label3_4_3" class="tqLabels" for="rad3_4_3">7</label> <br>
                    <input id="rad3_4_4" type="radio" name="q4" value="5" class="rads">
                    <label id="label3_4_4" class="tqLabels" for="rad3_4_4">5</label> <br> <!--Right answer-->
                    <!--Question 5-->
                    <li id="cfcQ5" class="questions">Did Chelsea lose their most recent UEFA Champions League Final appearance?</li>
                    <input id="rad3_5_1" type="radio" name="q5" value="YES" class="rads">
                    <label id="label3_5_1" class="tqLabels" for="rad3_5_1">Yes</label> <br>
                    <input id="rad3_5_2" type="radio" name="q5" value="NO" class="rads">
                    <label id="label3_5_2" class="tqLabels" for="rad3_5_2">No</label> <br> <!--Right answer-->
                    <!--Question 6-->
                    <li id="cfcQ6" class="questions">Which Chelsea manager holds the franchise record for the most wins?</li>
                    <input id="rad3_6_1" type="radio" name="q6" value="DC" class="rads">
                    <label id="label3_6_1" class="tqLabels" for="rad3_6_1">David Calderhead</label> <br> <!--Right answer-->
                    <input id="rad3_6_2" type="radio" name="q6" value="DS" class="rads">
                    <label id="label3_6_2" class="tqLabels" for="rad3_6_2">Dave Sexton</label> <br>
                    <input id="rad3_6_3" type="radio" name="q6" value="TD" class="rads">
                    <label id="label3_6_3" class="tqLabels" for="rad3_6_3">Ted Drake</label> <br>
                    <input id="rad3_6_4" type="radio" name="q6" value="JM" class="rads">
                    <label id="label3_6_4" class="tqLabels" for="rad3_6_4">Jose Mourinho</label> <br>
                    <!--Question 7-->
                    <li id="cfcQ7" class="questions">Which Chelsea player holds the Premier League record for the fastest player to reach 100 assists?</li>
                    <input id="rad3_7_1" type="radio" name="q7" value="FL" class="rads">
                    <label id="label3_7_1" class="tqLabels" for="rad3_7_1">Frank Lampard</label> <br>
                    <input id="rad3_7_2" type="radio" name="q7" value="DD" class="rads">
                    <label id="label3_7_2" class="tqLabels" for="rad3_7_2">Didier Drogba</label> <br>
                    <input id="rad3_7_3" type="radio" name="q7" value="CF" class="rads">
                    <label id="label3_7_3" class="tqLabels" for="rad3_7_3">Cesc Fabregas</label> <br> <!--Right answer-->
                    <input id="rad3_7_4" type="radio" name="q7" value="EH" class="rads">
                    <label id="label3_7_4" class="tqLabels" for="rad1_7_4">Eden Hazard</label> <br>
                    <!--Question 8-->
                    <li id="cfcQ8" class="questions">Which Chelsea player holds the franchise record for free-kick goals?</li>
                    <input id="rad3_8_1" type="radio" name="q8" value="GZ" class="rads">
                    <label id="label3_8_1" class="tqLabels" for="rad3_8_1">Gianfranco Zola</label> <br> <!--Right answer-->
                    <input id="rad3_8_2" type="radio" name="q8" value="DD" class="rads">
                    <label id="label3_8_2" class="tqLabels" for="rad3_8_2">Didier Drogba</label> <br>
                    <input id="rad3_8_3" type="radio" name="q8" value="W" class="rads">
                    <label id="label3_8_3" class="tqLabels" for="rad3_8_3">Willian</label> <br>
                    <input id="rad3_8_4" type="radio" name="q8" value="FL" class="rads">
                    <label id="label3_8_4" class="tqLabels" for="rad3_8_4">Frank Lampard</label> <br>
                    <!--Question 9-->
                    <li id="cfcQ9" class="questions">In which season did Chelsea most recently win a league title?</li>
                    <input id="rad3_9_1" type="radio" name="q9" value="21-22" class="rads">
                    <label id="label3_9_1" class="tqLabels" for="rad3_9_1">2021-22</label> <br>
                    <input id="rad3_9_2" type="radio" name="q9" value="14-15" class="rads">
                    <label id="label3_9_2" class="tqLabels" for="rad3_9_2">2014-15</label> <br>
                    <input id="rad3_9_3" type="radio" name="q9" value="16-17" class="rads">
                    <label id="label3_9_3" class="tqLabels" for="rad3_9_3">2016-17</label> <br> <!--Right answer-->
                    <input id="rad3_9_4" type="radio" name="q9" value="18-19" class="rads">
                    <label id="label3_9_4" class="tqLabels" for="rad3_9_4">2018-19</label> <br>
                    <!--Question 10-->
                    <li id="cfcQ10" class="questions">True or false: no player has ever won a Ballon d'Or while playing for Chelsea.</li>
                    <input id="rad3_10_1" type="radio" name="q10" value="TRUE" class="rads">
                    <label id="label3_10_1" class="tqLabels" for="rad3_10_1">True</label> <br> <!--Right answer-->
                    <input id="rad3_10_2" type="radio" name="q10" value="FALSE" class="rads">
                    <label id="label3_10_2" class="tqLabels" for="rad3_10_2">False</label> <br>
                </ol><br><br>
                <button id="cfcBackButton" class="quizBackButtons" type="button">Go back</button> <br> <br>
                <button id="cfcSubmitButton" class="quizSubmitButtons" type="submit">Submit answers</button>
            </form>
        `;
        /* Back button code */
        const cfcBackButton = document.getElementById("cfcBackButton");
        cfcBackButton.addEventListener("click", function cfcGoBack(){
            tqPage.innerHTML = `
                <h1 id="h5_1" class="mainHeadings">Sports Team Trivia Quiz</h1>
                <h2 id="h5_2" class="genText">Choose a team:</h2>
                <!--This div element is used to align the team cards in the centre-->
                <div id="tcContainer">
                    <button id="gbp" class="teamCards" type="button">
                    <img class="logos" src="images/gb.png" alt="A picture of the Green Bay Packers logo" width="200" height="200"><br>
                    Green Bay Packers
                    </button>
                    <button id="p76" class="teamCards" type="button">
                    <img class="logos" src="images/76ers.png" alt="A picture of the Philadelphia 76ers logo" width="200" height="200"><br>
                    Philadelphia 76ers
                    </button>
                    <button id="cfc" class="teamCards" type="button">
                    <img class="logos" src="images/chelsea.png" alt="A picture of the Chelsea FC logo" width="200" height="200"><br>
                    Chelsea FC
                    </button>
                    <button id="rmcf" class="teamCards" type="button">
                    <img class="logos" src="images/rm.png" alt="A picture of the Real Madrdid CF logo" width="200" height="200"><br>
                    Real Madrid CF
                    </button>
                </div>
            `;
        })
        /* Submit button code */
        cfcSubmitButton.addEventListener("click", function cfcSubmit(){
            const cfcSubmitButton = document.getElementById("cfcSubmitButton");
            let cfcScore = 0;
            /* Increment cfcScore for correct answers */
            if (document.getElementById("rad3_1_4").checked)
            {
                cfcScore++;
            }
            if (document.getElementById("rad3_2_2").checked)
            {
                cfcScore++;
            }
            if (document.getElementById("rad3_3_2").checked)
            {
                cfcScore++;
            }
            if (document.getElementById("rad3_4_4").checked)
            {
                cfcScore++;
            }
            if (document.getElementById("rad3_5_2").checked)
            {
                cfcScore++;
            }
            if (document.getElementById("rad3_6_1").checked)
            {
                cfcScore++;
            }
            if (document.getElementById("rad3_7_3").checked)
            {
                cfcScore++;
            }
            if (document.getElementById("rad3_8_1").checked)
            {
                cfcScore++;
            }
            if (document.getElementById("rad3_9_3").checked)
            {
                cfcScore++;
            }
            if (document.getElementById("rad3_10_1").checked)
            {
                cfcScore++;
            }
            tqPage.innerHTML = `
                <h1 id="h5_1" class="mainHeadings">Chelsea Trivia Quiz</h1>
                <h2 id="h5_2" class="genText">Your results:</h2>
                <div id="tqForm3" class="tqForms">
                    <p id="cfcResult" class="results">Congratulations!</p>
                </div>
            `;
            let cheResult = document.getElementById("cfcResult").innerHTML;
            cheResult = "Congratulations, you got a score of " + cfcScore.toString() + "/10.";
            document.getElementById("cfcResult").innerHTML = cheResult;
        })
    })
}
if (rmButton)
{
    rmButton.addEventListener("click", function rmcfTriviaQuiz() {
        tqPage.innerHTML = "";
        tqPage.innerHTML = ` 
            <h1 id="rmcfHeading" class="mainHeadings">Real Madrid Trivia Quiz</h1>
            <form id="rmcfForm" class="tqForms">
                <ol>
                    <!--Question 1-->
                    <li class="questions">Which Real Madrid player holds the franchise record for appearances?</li>
                    <input id="rad4_1_1" type="radio" name="q1" value="SR" class="rads">
                    <label id="label4_1_1" class="tqLabels" for="rad4_1_1">Sergio Ramos</label> <br>
                    <input id="rad4_1_2" type="radio" name="q1" value="R" class="rads">
                    <label id="label4_1_2" class="tqLabels" for="rad4_1_2">Raul</label> <br> <!--Right answer-->
                    <input id="rad4_1_3" type="radio" name="q1" value="KB" class="rads">
                    <label id="label4_1_3" class="tqLabels" for="rad4_1_3">Karim Benzema</label> <br>
                    <input id="rad4_1_4" type="radio" name="q1" value="IK" class="rads">
                    <label id="label4_1_4" class="tqLabels" for="rad4_1_4">Iker Casillas</label> <br>
                    <!--Question 2-->
                    <li class="questions">Which Real Madrid player holds the franchise record for goals?</li>
                    <input id="rad4_2_1" type="radio" name="q2" value="R" class="rads">
                    <label id="label4_2_1" class="tqLabels" for="rad4_2_1">Raul</label> <br>
                    <input id="rad4_2_2" type="radio" name="q2" value="KB" class="rads">
                    <label id="label4_2_2" class="tqLabels" for="rad4_2_2">Karim Benzema</label> <br>
                    <input id="rad4_2_3" type="radio" name="q2" value="ADS" class="rads">
                    <label id="label4_2_3" class="tqLabels" for="rad4_2_3">Alfredo Di Stefano</label> <br>
                    <input id="rad4_2_4" type="radio" name="q2" value="CR7" class="rads">
                    <label id="label4_2_4" class="tqLabels" for="rad4_2_4">Cristiano Ronaldo</label> <br> <!--Right answer-->
                    <!--Question 3-->
                    <li class="questions">Which Real Madrid player holds the franchise record for single-season assists?</li>
                    <input id="rad4_3_1" type="radio" name="q3" value="MO" class="rads">
                    <label id="label4_3_1" class="tqLabels" for="rad4_3_1">Mesut Ozil</label> <br> <!--Right answer-->
                    <input id="rad4_3_2" type="radio" name="q3" value="CR7" class="rads">
                    <label id="label4_3_2" class="tqLabels" for="rad4_3_2">Cristiano Ronaldo</label> <br>
                    <input id="rad4_3_3" type="radio" name="q3" value="ADM" class="rads">
                    <label id="label4_3_3" class="tqLabels" for="rad4_3_3">Angel Di Maria</label> <br>
                    <input id="rad4_3_4" type="radio" name="q3" value="LM" class="rads">
                    <label id="label4_3_4" class="tqLabels" for="rad4_3_4">Luka Modric</label> <br>
                    <!--Question 4-->
                    <li class="questions">Which team did Real Madrid beat to win their most recent UEFA Champions League title?</li>
                    <input id="rad4_4_1" type="radio" name="q4" value="BM" class="rads">
                    <label id="label4_4_1" class="tqLabels" for="rad4_4_1">Bayern Munich</label> <br>
                    <input id="rad4_4_2" type="radio" name="q4" value="AM" class="rads">
                    <label id="label4_4_2" class="tqLabels" for="rad4_4_2">Atletico Madrid</label> <br>
                    <input id="rad4_4_3" type="radio" name="q4" value="BD" class="rads">
                    <label id="label1_4_3" class="tqLabels" for="rad4_4_3">Borussia Dortmund</label> <br> <!--Right answer-->
                    <input id="rad4_4_4" type="radio" name="q4" value="MC" class="rads">
                    <label id="label4_4_4" class="tqLabels" for="rad4_4_4">Manchester City</label> <br>
                    <!--Question 5-->
                    <li class="questions">Does Real Madrid hold the record for the most La Liga titles?</li>
                    <input id="rad4_5_1" type="radio" name="q5" value="YES" class="rads">
                    <label id="label4_5_1" class="tqLabels" for="rad4_5_1">Yes</label> <br> <!--Right answer-->
                    <input id="rad4_5_2" type="radio" name="q5" value="NO" class="rads">
                    <label id="label4_5_2" class="tqLabels" for="rad4_4_2">No</label> <br> 
                    <!--Question 6-->
                    <li class="questions">Which Real Madrid manager is NOT tied for the franchise record for the most UEFA Champions League titles?</li>
                    <input id="rad4_6_1" type="radio" name="q6" value="ZZ" class="rads">
                    <label id="label4_6_1" class="tqLabels" for="rad4_6_1">Zinedine Zidane</label> <br>
                    <input id="rad4_6_2" type="radio" name="q6" value="JM" class="rads">
                    <label id="label4_6_2" class="tqLabels" for="rad4_6_2">Jose Mourinho</label> <br> <!--Right answer-->
                    <input id="rad4_6_3" type="radio" name="q6" value="CA" class="rads">
                    <label id="label4_6_3" class="tqLabels" for="rad4_6_3">Carlo Ancelotti</label> <br>
                    <!--Question 7-->
                    <li class="questions">Which Real Madrid player holds the franchise record for single-season clean sheets?</li>
                    <input id="rad4_7_1" type="radio" name="q7" value="IK" class="rads">
                    <label id="label4_7_1" class="tqLabels" for="rad4_7_1">Iker Casillas</label> <br> <!--Right answer-->
                    <input id="rad4_7_2" type="radio" name="q7" value="TC" class="rads">
                    <label id="label4_7_2" class="tqLabels" for="rad4_7_2">Thibaut Courtois</label> <br>
                    <input id="rad4_7_3" type="radio" name="q7" value="KN" class="rads">
                    <label id="label4_7_3" class="tqLabels" for="rad4_7_3">Keylor Navas</label> <br>
                    <input id="rad4_7_4" type="radio" name="q7" value="FB" class="rads">
                    <label id="label4_7_4" class="tqLabels" for="rad4_7_4">Francisco Buyo</label> <br>
                    <!--Question 8-->
                    <li class="questions">Which Real Madrid player holds the La Liga record for league titles?</li>
                    <input id="rad4_8_1" type="radio" name="q8" value="P(JM)" class="rads">
                    <label id="label4_8_1" class="tqLabels" for="rad4_8_1">Pirri (Jose Martinez)</label> <br>
                    <input id="rad4_8_2" type="radio" name="q8" value="LM" class="rads">
                    <label id="label4_8_2" class="tqLabels" for="rad4_8_2">Luka Modric</label> <br>
                    <input id="rad4_8_3" type="radio" name="q8" value="IK" class="rads">
                    <label id="label4_8_3" class="tqLabels" for="rad4_8_3">Iker Casillas</label> <br>
                    <input id="rad4_8_4" type="radio" name="q8" value="FG" class="rads">
                    <label id="label4_8_4" class="tqLabels" for="rad4_8_4">Francisco Gento</label> <br> <!--Right answer-->
                    <!--Question 9-->
                    <li class="questions">How many players have won a Ballon d'Or while playing for Real Madrid?</li>
                    <input id="rad4_9_1" type="radio" name="q9" value="11" class="rads">
                    <label id="label4_9_1" class="tqLabels" for="rad4_9_1">11</label> <br>
                    <input id="rad4_9_2" type="radio" name="q9" value="10" class="rads">
                    <label id="label4_9_2" class="tqLabels" for="rad4_9_2">10</label> <br>
                    <input id="rad4_9_3" type="radio" name="q9" value="9" class="rads">
                    <label id="label4_9_3" class="tqLabels" for="rad4_9_3">9</label> <br>
                    <input id="rad4_9_4" type="radio" name="q9" value="8" class="rads">
                    <label id="label4_9_4" class="tqLabels" for="rad4_9_4">8</label> <br> <!--Right answer-->
                    <!--Question 10-->
                    <li class="questions">True or false: Real Madrid is the oldest club in Madrid.</li>
                    <input id="rad4_10_1" type="radio" name="q10" value="TRUE" class="rads">
                    <label id="label4_10_1" class="tqLabels" for="rad4_10_1">True</label> <br>
                    <input id="rad4_10_2" type="radio" name="q10" value="FALSE" class="rads">
                    <label id="label4_10_2" class="tqLabels" for="rad4_10_2">False</label> <br> <!--Right answer-->
                </ol><br><br>
                <button id="rmcfBackButton" class="quizBackButtons" type="button">Go back</button> <br> <br>
                <button id="rmcfSubmitButton" class="quizSubmitButtons" type="submit">Submit answers</button>
            </form>
        `;
        /* Back button code */
        const rmcfBackButton = document.getElementById("rmcfBackButton");
        rmcfBackButton.addEventListener("click", function rmcfGoBack(){
            tqPage.innerHTML = `
                <h1 id="h5_1" class="mainHeadings">Sports Team Trivia Quiz</h1>
                <h2 id="h5_2" class="genText">Choose a team:</h2>
                <!--This div element is used to align the team cards in the centre-->
                <div id="tcContainer">
                    <button id="gbp" class="teamCards" type="button">
                    <img class="logos" src="images/gb.png" alt="A picture of the Green Bay Packers logo" width="200" height="200"><br>
                    Green Bay Packers
                    </button>
                    <button id="p76" class="teamCards" type="button">
                    <img class="logos" src="images/76ers.png" alt="A picture of the Philadelphia 76ers logo" width="200" height="200"><br>
                    Philadelphia 76ers
                    </button>
                    <button id="cfc" class="teamCards" type="button">
                    <img class="logos" src="images/chelsea.png" alt="A picture of the Chelsea FC logo" width="200" height="200"><br>
                    Chelsea FC
                    </button>
                    <button id="rmcf" class="teamCards" type="button">
                    <img class="logos" src="images/rm.png" alt="A picture of the Real Madrdid CF logo" width="200" height="200"><br>
                    Real Madrid CF
                    </button>
                </div>
            `;
        })
        /* Submit button code */
        rmcfSubmitButton.addEventListener("click", function rmcfSubmit(){
            const rmcfSubmitButton = document.getElementById("rmcfSubmitButton");
            let rmcfScore = 0;
            /* Increment rmcfScore for correct answers */
            if (document.getElementById("rad4_1_2").checked)
            {
                rmcfScore++;
            }
            if (document.getElementById("rad4_2_4").checked)
            {
                rmcfScore++;
            }
            if (document.getElementById("rad4_3_1").checked)
            {
                rmcfScore++;
            }
            if (document.getElementById("rad4_4_3").checked)
            {
                rmcfScore++;
            }
            if (document.getElementById("rad4_5_1").checked)
            {
                rmcfScore++;
            }
            if (document.getElementById("rad4_6_2").checked)
            {
                rmcfScore++;
            }
            if (document.getElementById("rad4_7_1").checked)
            {
                rmcfScore++;
            }
            if (document.getElementById("rad4_8_4").checked)
            {
                rmcfScore++;
            }
            if (document.getElementById("rad4_9_4").checked)
            {
                rmcfScore++;
            }
            if (document.getElementById("rad4_10_2").checked)
            {
                rmcfScore++;
            }
            tqPage.innerHTML = `
                <h1 id="h5_1" class="mainHeadings">Real Madrid Trivia Quiz</h1>
                <h2 id="h5_2" class="genText">Your results:</h2>
                <div id="tqForm4" class="tqForms">
                    <p id="rmcfResult" class="results">Congratulations!</p>
                </div>
            `;
            let rmResult = document.getElementById("rmcfResult").innerHTML;
            rmResult = "Congratulations, you got a score of " + rmcfScore.toString() + "/10.";
            document.getElementById("rmcfResult").innerHTML = rmResult;
        })
    })
}
/* Feature 3: Build Your Dream Team */
const dtPage = document.getElementById("dtPage");
/* American football */
const nflButton = document.getElementById("nflDT");
if (nflButton)
{
    nflButton.addEventListener("click", function nflSetup(){
        dtPage.innerHTML = "";
        dtPage.innerHTML = `
            <h1 id="h6_1" class="mainHeadings">Build Your Dream Team</h1>
            <p id="rosterHeading1" class="genText">NFL all-time roster</p>
            <form id="dtForm1" class="dtForms">
                <p class="instructions">Select a position</p>
                <select id="position">
                    <option id="selected" value="" selected></option>
                    <option value="Quarterback" class="options">Quarterback</option>
                    <option value="Running back" class="options">Running back</option>
                    <option value="Tight end" class="options">Tight end</option>
                    <option value="Wide receiver" class="options">Wide receiver</option>
                    <option value="Edge" class="options">Edge</option>
                    <option value="Linebacker" class="options">Linebacker</option>
                    <option value="Cornerback" class="options">Cornerback</option>
                    <option value="Safety" class="options">Safety</option>
                    <option value="Head coach" class="options">Head coach</option>
                </select>
                <p class="instructions">Enter a player or coach</p>
                <input id="txtPoC" type="text" name="text3" class="textboxes"><br><br>
                <button id="confirm1" type="button" class="dtButtons">Confirm your pick</button><br>
                <p class="phases">OFFENCE</p>
                <ul id="ul2">
                    <li id="nflQB" class="afPositions">Quarterback: </li><!--*User input*-->
                    <li id="nflRB" class="afPositions">Running back: </li><!--*User input*-->
                    <li id="nflTE" class="afPositions">Tight end: </li><!--*User input*-->
                    <li id="nflWR" class="afPositions">Wide receiver: </li><!--*User input*-->
                </ul>
                <p class="phases">DEFENCE</p>
                <ul id="ul3">
                    <li id="nflE" class="afPositions">Edge: </li><!--*User input*-->
                    <li id="nflLB" class="afPositions">Linebacker: </li><!--*User input*-->
                    <li id="nflCB" class="afPositions">Cornerback: </li><!--*User input*-->
                    <li id="nflS" class="afPositions">Safety: </li><!--*User input*-->
                </ul>
                <p class="phases">COACHING</p>
                <ul id="ul4">
                    <li id="nflHC" class="afPositions">Head coach: </li><!--*User input*-->
                </ul><br>
                <button id="resetLineup1" class="dtButtons" type="button">Reset lineup</button> <br> <br>
                <button id="goBack1" class="dtButtons" type="button">Go back</button> 
            </form>
        `;
        /* Reset button code */
        const nflResetLineupButton = document.getElementById("resetLineup1");
        nflResetLineupButton.addEventListener("click", function nflResetLineup(){
            let nflDropdown = document.getElementById("position").value;
            nflDropdown = "";
            document.getElementById("position").value = nflDropdown;
            let nflTextbox = document.getElementById("txtPoC").value;
            nflTextbox = "";
            document.getElementById("txtPoC").value = nflTextbox;
            let QB = document.getElementById("nflQB");
            QB = "Quarterback: ";
            document.getElementById("nflQB").innerHTML = QB;
            let RB = document.getElementById("nflRB");
            RB = "Running back: ";
            document.getElementById("nflRB").innerHTML = RB;
            let TE = document.getElementById("nflTE");
            TE = "Tight end: ";
            document.getElementById("nflTE").innerHTML = TE;
            let WR = document.getElementById("nflWR");
            WR = "Wide receiver: ";
            document.getElementById("nflWR").innerHTML = WR;
            let EDGE = document.getElementById("nflE");
            EDGE = "Edge: ";
            document.getElementById("nflE").innerHTML = EDGE;
            let LB = document.getElementById("nflLB");
            LB = "Linebacker: ";
            document.getElementById("nflLB").innerHTML = LB;
            let CB = document.getElementById("nflCB");
            CB = "Cornerback: ";
            document.getElementById("nflCB").innerHTML = CB;
            let SAF = document.getElementById("nflS");
            SAF = "Safety: ";
            document.getElementById("nflS").innerHTML = SAF;
            let NFLHC = document.getElementById("nflHC");
            NFLHC = "Head coach: ";
            document.getElementById("nflHC").innerHTML = NFLHC;
        })
        /* Confirm button code */
        const nflConfirmButton = document.getElementById("confirm1");
        nflConfirmButton.addEventListener("click", function nflConfirm(){
            let chosenNFLPosition = document.getElementById("position").value;
            let qB = document.getElementById("nflQB");
            let rB = document.getElementById("nflRB");
            let tE = document.getElementById("nflTE");
            let wR = document.getElementById("nflWR");
            let edge = document.getElementById("nflE");
            let lB = document.getElementById("nflLB");
            let cB = document.getElementById("nflCB");
            let safety = document.getElementById("nflS");
            let nflHC = document.getElementById("nflHC");
            let chosenNFLPoC = document.getElementById("txtPoC").value;
            if (chosenNFLPosition === "Quarterback")
            {
                qB = "Quarterback: " + chosenNFLPoC + "☑️";
                document.getElementById("nflQB").innerHTML = qB;
            }
            else if (chosenNFLPosition === "Running back")
            {
                rB = "Running back: " + chosenNFLPoC + "☑️";
                document.getElementById("nflRB").innerHTML = rB;
            }
            else if (chosenNFLPosition === "Tight end")
            {
                tE = "Tight end: " + chosenNFLPoC + "☑️";
                document.getElementById("nflTE").innerHTML = tE;
            }
            else if (chosenNFLPosition === "Wide receiver")
            {
                wR = "Wide receiver: " + chosenNFLPoC + "☑️";
                document.getElementById("nflWR").innerHTML = wR;
            }
            else if (chosenNFLPosition === "Edge")
            {
                edge = "Edge: " + chosenNFLPoC + "☑️";
                document.getElementById("nflE").innerHTML = edge;
            }
            else if (chosenNFLPosition === "Linebacker")
            {
                lB = "Linebacker: " + chosenNFLPoC + "☑️";
                document.getElementById("nflLB").innerHTML = lB;
            }
            else if (chosenNFLPosition === "Cornerback")
            {
                cB = "Cornerback: " + chosenNFLPoC + "☑️";
                document.getElementById("nflCB").innerHTML = cB;
            }
            else if (chosenNFLPosition === "Safety")
            {
                safety = "Safety: " + chosenNFLPoC + "☑️";
                document.getElementById("nflS").innerHTML = safety;
            }
            else if (chosenNFLPosition === "Head coach")
            {
                nflHC = "Head coach: " + chosenNFLPoC + "☑️";
                document.getElementById("nflHC").innerHTML = nflHC;
            }
        })
        /* Back button code */
        const nflBackButton = document.getElementById("goBack1");
        nflBackButton.addEventListener("click", function nflGoBack(){
            dtPage.innerHTML = "";
            dtPage.innerHTML = `
                <h1 id="h6_1" class="mainHeadings">Build Your Dream Team</h1>
                <!--This div element is for the 3 buttons that serve as the the headings for the 3 sports-->
                <div id="headingContainer">
                    <button id="nflDT" class="buttonHeadings" type="button">🏈NFL</button>
                    <button id="nbaDT" class="buttonHeadings" type="button">🏀NBA</button>
                    <button id="soccerDT" class="buttonHeadings" type="button">⚽Soccer</button><br>
                </div>
            `;
        })
    })
}
/* Basketball */
const nbaButton = document.getElementById("nbaDT");
if (nbaButton)
{
    nbaButton.addEventListener("click", function nbaSetup(){
    dtPage.innerHTML = "";
    dtPage.innerHTML = `
        <h1 id="h6_1" class="mainHeadings">Build Your Dream Team</h1>
            <!--This div element is for the 3 buttons that serve as the the headings for the 3 sports-->
            <p id="rosterHeading2" class="genText">NBA all-time roster</p>
            <form id="dtForm2" class="dtForms">
                <p class="instructions">Select a position</p>
                <select id="position">
                    <option id="selected" value="default" selected></option>
                    <option value="Point guard" class="options">Point guard</option>
                    <option value="Shooting guard" class="options">Shooting guard</option>
                    <option value="Small forward" class="options">Small forward</option>
                    <option value="Power forward" class="options">Power forward</option>
                    <option value="Center" class="options">Center</option>
                    <option value="Head coach" class="options">Head coach</option>
                </select>
                <p class="instructions">Enter a player or coach</p>
                <input id="txtPoC" type="text" name="text3" class="textboxes"><br><br>
                <button id="confirm2" type="button" class="dtButtons">Confirm your pick</button><br>
                <p class="phases">PLAYERS</p>
                <ul id="ul2">
                    <li id="nbaPG" class="afPositions">Point guard: </li><!--*User input*-->
                    <li id="nbaSG" class="afPositions">Shooting guard: </li><!--*User input*-->
                    <li id="nbaSF" class="afPositions">Small forward: </li><!--*User input*-->
                    <li id="nbaPF" class="afPositions">Power forward: </li><!--*User input*-->
                    <li id="nbaC" class="afPositions">Center: </li><!--*User input*-->
                </ul>
                <p class="phases">COACHING</p>
                <ul id="ul4">
                    <li id="nbaHC" class="afPositions">Head coach: </li><!--*User input*-->
                </ul><br>
                <button id="resetLineup2" class="dtButtons" type="button">Reset lineup</button> <br> <br>
                <button id="goBack2" class="dtButtons" type="button">Go back</button> 
            </form>
        `;
         /* Reset button code */
        const nbaResetLineupButton = document.getElementById("resetLineup2");
        nbaResetLineupButton.addEventListener("click", function nbaResetLineup(){
            let nbaDropdown = document.getElementById("position").value;
            nbaDropdown = "";
            document.getElementById("position").value = nbaDropdown;
            let nbaTextbox = document.getElementById("txtPoC").value;
            nbaTextbox = "";
            document.getElementById("txtPoC").value = nbaTextbox;
            let PG = document.getElementById("nbaPG");
            PG = "Point guard: ";
            document.getElementById("nbaPG").innerHTML = PG;
            let SG = document.getElementById("nbaSG");
            SG = "Shooting guard: ";
            document.getElementById("nbaSG").innerHTML = SG;
            let SF = document.getElementById("nbaSF");
            SF = "Small forward: ";
            document.getElementById("nbaSF").innerHTML = SF;
            let PF = document.getElementById("nbaPF");
            PF = "Power forward: ";
            document.getElementById("nbaPF").innerHTML = PF;
            let CTR = document.getElementById("nbaC");
            CTR = "Center: ";
            document.getElementById("nbaC").innerHTML = CTR;
            let NBAHC = document.getElementById("nbaHC");
            NBAHC = "Head coach: ";
            document.getElementById("nbaHC").innerHTML = NBAHC;
        })
        /* Confirm button code */
        const nbaConfirmButton = document.getElementById("confirm2");
        nbaConfirmButton.addEventListener("click", function nbaConfirm(){
            let chosenNBAPosition = document.getElementById("position").value;
            let pg = document.getElementById("nbaPG");
            let sg = document.getElementById("nbaSG");
            let sf = document.getElementById("nbaSF");
            let pf = document.getElementById("nflPF");
            let ctr = document.getElementById("nflC");
            let nbaHC = document.getElementById("nbaHC");
            let chosenNBAPoC = document.getElementById("txtPoC").value;
            if (chosenNBAPosition === "Point guard")
            {
                pg = "Point guard: " + chosenNBAPoC + "☑️";
                document.getElementById("nbaPG").innerHTML = pg;
            }
            else if (chosenNBAPosition === "Shooting guard")
            {
                sg = "Shooting guard: " + chosenNBAPoC + "☑️";
                document.getElementById("nbaSG").innerHTML = sg;
            }
            else if (chosenNBAPosition === "Small forward")
            {
                sf = "Small forward: " + chosenNBAPoC + "☑️";
                document.getElementById("nbaSF").innerHTML = sf;
            }
            else if (chosenNBAPosition === "Power forward")
            {
                pf = "Power forward: " + chosenNBAPoC + "☑️";
                document.getElementById("nbaPF").innerHTML = pf;
            }
            else if (chosenNBAPosition === "Center")
            {
                ctr = "Center: " + chosenNBAPoC + "☑️";
                document.getElementById("nbaC").innerHTML = ctr;
            }
            else if (chosenNBAPosition === "Head coach")
            {
                nbaHC = "Head coach: " + chosenNBAPoC + "☑️";
                document.getElementById("nbaHC").innerHTML = nbaHC;
            }
        })
        /* Back button code */
        const nbaBackButton = document.getElementById("goBack2");
        nbaBackButton.addEventListener("click", function nbaGoBack(){
            dtPage.innerHTML = "";
            dtPage.innerHTML = `
                <h1 id="h6_1" class="mainHeadings">Build Your Dream Team</h1>
                <!--This div element is for the 3 buttons that serve as the the headings for the 3 sports-->
                <div id="headingContainer">
                    <button id="nflDT" class="buttonHeadings" type="button">🏈NFL</button>
                    <button id="nbaDT" class="buttonHeadings" type="button">🏀NBA</button>
                    <button id="soccerDT" class="buttonHeadings" type="button">⚽Soccer</button><br>
                </div>
            `;
        })
    })
}
/* Soccer */
const soccerButton = document.getElementById("soccerDT");
if (soccerButton)
{
    soccerButton.addEventListener("click", function soccerSetup(){
    dtPage.innerHTML = "";
    dtPage.innerHTML = `
        <h1 id="h6_1" class="mainHeadings">Build Your Dream Team</h1>
            <p id="rosterHeading3" class="genText">Soccer all-time XI</p>
            <form id="dtForm3" class="dtForms">
                <p class="instructions">Select a position</p>
                <select id="position">
                    <option id="selected" value="default" selected></option>
                    <option value="Goalkeeper" class="options">Goalkeeper</option>
                    <option value="Left back" class="options">Left back</option>
                    <option value="Left centre back" class="options">Left centre back</option>
                    <option value="Right centre back" class="options">Right centre back</option>
                    <option value="Right back" class="options">Right back</option>
                    <option value="Left centre mid" class="options">Left centre mid</option>
                    <option value="Defensive mid" class="options">Defensive mid</option>
                    <option value="Right centre mid" class="options">Right centre mid</option>
                    <option value="Left wing" class="options">Left wing</option>
                    <option value="Striker" class="options">Striker</option>
                    <option value="Right wing" class="options">Right wing</option>
                    <option value="Head coach" class="options">Head coach</option>
                </select>
                <p class="instructions">Enter a player or coach</p>
                <input id="txtPoC" type="text" name="text3" class="textboxes"><br><br>
                <button id="confirm3" type="button" class="dtButtons">Confirm your pick</button><br>
                <p class="phases">PLAYERS</p>
                <ul id="ul2">
                    <li id="sGK" class="afPositions">Goalkeeper: </li><!--*User input*-->
                    <li id="sLB" class="afPositions">Left back: </li><!--*User input*-->
                    <li id="sLCB" class="afPositions">Left centre back: </li><!--*User input*-->
                    <li id="sRCB" class="afPositions">Right centre back: </li><!--*User input*-->
                    <li id="sRB" class="afPositions">Right back: </li><!--*User input*-->
                    <li id="sLCM" class="afPositions">Left centre mid: </li><!--*User input*-->
                    <li id="sDM" class="afPositions">Defensive mid: </li><!--*User input*-->
                    <li id="sRCM" class="afPositions">Right centre mid: </li><!--*User input*-->
                    <li id="sLW" class="afPositions">Left wing: </li><!--*User input*-->
                    <li id="sST" class="afPositions">Striker: </li><!--*User input*-->
                    <li id="sRW" class="afPositions">Right wing: </li><!--*User input*-->
                </ul>
                <p class="phases">COACHING</p>
                <ul id="ul4">
                    <li id="sHC" class="afPositions">Head coach: </li><!--*User input*-->
                </ul><br>
                <button id="resetLineup3" class="dtButtons" type="button">Reset lineup</button> <br> <br>
                <button id="goBack3" class="dtButtons" type="button">Go back</button>
            </form>
        `;
        /* Reset button code */
        const sResetLineupButton = document.getElementById("resetLineup3");
        sResetLineupButton.addEventListener("click", function sResetLineup(){
            let sDropdown = document.getElementById("position").value;
            sDropdown = "";
            document.getElementById("position").value = sDropdown;
            let sTextbox = document.getElementById("txtPoC").value;
            sTextbox = "";
            document.getElementById("txtPoC").value = sTextbox;
            let GK = document.getElementById("sGK");
            GK = "Goalkeeper: ";
            document.getElementById("sGK").innerHTML = GK;
            let LeftB = document.getElementById("sLB");
            LeftB = "Left back: ";
            document.getElementById("sLB").innerHTML = LeftB;
            let LCB = document.getElementById("sLCB");
            LCB = "Left centre back: ";
            document.getElementById("sLCB").innerHTML = LCB;
            let RCB = document.getElementById("sRCB");
            RCB = "Right centre back: ";
            document.getElementById("sRCB").innerHTML = RCB;
            let RightB = document.getElementById("sRB");
            RightB = "Right back: ";
            document.getElementById("sRB").innerHTML = RightB;
            let LCM = document.getElementById("sLCM");
            LCM = "Left centre mid: ";
            document.getElementById("sLCM").innerHTML = LCM;
            let DM = document.getElementById("sDM");
            DM = "Defensive mid: ";
            document.getElementById("sDM").innerHTML = DM;
            let RCM = document.getElementById("sRCM");
            RCM = "Right centre mid: ";
            document.getElementById("sRCM").innerHTML = RCM;
            let LW = document.getElementById("sLW");
            LW = "Left wing: ";
            document.getElementById("sLW").innerHTML = LW;
            let ST = document.getElementById("sST");
            ST = "Striker: ";
            document.getElementById("sST").innerHTML = ST;
            let RW = document.getElementById("sRW");
            RW = "Right wing: ";
            document.getElementById("sRW").innerHTML = RW;
            let SHC = document.getElementById("sHC");
            SHC = "Head coach: ";
            document.getElementById("sHC").innerHTML = SHC;
        }) 
        /* Confirm button code */
        const soccerConfirmButton = document.getElementById("confirm3");
        soccerConfirmButton.addEventListener("click", function soccerConfirm(){
            let chosenSoccerPosition = document.getElementById("position").value;
            let gk = document.getElementById("sGK");
            let lb = document.getElementById("sLB");
            let lcb = document.getElementById("sLCB");
            let rcb = document.getElementById("sRCB");
            let rb = document.getElementById("sRB");
            let lcm = document.getElementById("sLCM");
            let dm = document.getElementById("sDM");
            let rcm = document.getElementById("sRCM");
            let lw = document.getElementById("sLW");
            let st = document.getElementById("sST");
            let rw = document.getElementById("sRW");
            let sHC = document.getElementById("sHC");
            let chosenSoccerPoC = document.getElementById("txtPoC").value;
            if (chosenSoccerPosition === "Goalkeeper")
            {
                gk = "Goalkeeper: " + chosenSoccerPoC + "☑️";
                document.getElementById("sGK").innerHTML = gk;
            }
            else if (chosenSoccerPosition === "Left back")
            {
                lb = "Left back: " + chosenSoccerPoC + "☑️";
                document.getElementById("sLB").innerHTML = lb;
            }
            else if (chosenSoccerPosition === "Left centre back")
            {
                lcb = "Left centre back: " + chosenSoccerPoC + "☑️";
                document.getElementById("sLCB").innerHTML = lcb;
            }
            else if (chosenSoccerPosition === "Right centre back")
            {
                rcb = "Right centre back: " + chosenSoccerPoC + "☑️";
                document.getElementById("sRCB").innerHTML = rcb;
            }
            else if (chosenSoccerPosition === "Right back")
            {
                rb = "Right back: " + chosenSoccerPoC + "☑️";
                document.getElementById("sRB").innerHTML = rb;
            }
            else if (chosenSoccerPosition === "Left centre mid")
            {
                lcm = "Left centre mid: " + chosenSoccerPoC + "☑️";
                document.getElementById("sLCM").innerHTML = lcm;
            }
            else if (chosenSoccerPosition === "Defensive mid")
            {
                dm = "Defensive mid: " + chosenSoccerPoC + "☑️";
                document.getElementById("sDM").innerHTML = dm;
            }
            else if (chosenSoccerPosition === "Right centre mid")
            {
                rcm = "Right centre mid: " + chosenSoccerPoC + "☑️";
                document.getElementById("sRCM").innerHTML = rcm;
            }
            else if (chosenSoccerPosition === "Left wing")
            {
                lw = "Left wing: " + chosenSoccerPoC + "☑️";
                document.getElementById("sLW").innerHTML = lw;
            }
            else if (chosenSoccerPosition === "Striker")
            {
                st = "Striker: " + chosenSoccerPoC + "☑️";
                document.getElementById("sST").innerHTML = st;
            }
            else if (chosenSoccerPosition === "Right wing")
            {
                rw = "Right wing: " + chosenSoccerPoC + "☑️";
                document.getElementById("sRW").innerHTML = rw;
            }
            else if (chosenSoccerPosition === "Head coach")
            {
                sHC = "Head coach: " + chosenSoccerPoC + "☑️";
                document.getElementById("sHC").innerHTML = sHC;
            }
        })
        /* Back button code */
        const soccerBackButton = document.getElementById("goBack3");
        soccerBackButton.addEventListener("click", function soccerGoBack(){
            dtPage.innerHTML = "";
            dtPage.innerHTML = `
                <h1 id="h6_1" class="mainHeadings">Build Your Dream Team</h1>
                <!--This div element is for the 3 buttons that serve as the the headings for the 3 sports-->
                <div id="headingContainer">
                    <button id="nflDT" class="buttonHeadings" type="button">🏈NFL</button>
                    <button id="nbaDT" class="buttonHeadings" type="button">🏀NBA</button>
                    <button id="soccerDT" class="buttonHeadings" type="button">⚽Soccer</button><br>
                </div>
            `;
        })
    })
}

