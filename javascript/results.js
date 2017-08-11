// Quiz result options in a separate object for flexibility
var resultOptions = [
    {   title: 'You Are a New Natalia',
        desc: '<p>You might be new new to open advocacy, but your new ideas and enthusiasm to celebrate Open Access Week is inspiring! If you are organizing outreach and events primarily alone, you will needs materials and ideas to raise awareness at your institution. Suggested activities for New Natalias: social media campaign, film screening and discussion or sending factsheets. Resources for New Natalia: 100 Stories of Impact, The Internets Own Boy, factsheets and other resources. 
     </p><img src="https://github.com/camillet/Action-Kit-Match-Quiz/blob/master/images/1280px-Red_flag.svg.png"/>'},
    {   title: 'You Are an Amped Amal',
        desc: '<p>You may be thrilled at the success of last year, and want to grow your institution’s Open Access Week events this year! You might primarily be organizing the week alone, but would like to involve colleagues in planning. An Amal might their zeal and ability to experiment to get more faculty engagement with the institutional repository. With solid experience under your belt, all you need is more resources and collaborators to break your previous record. Suggested activities for Amped Amal: an Upload-a-thon with department liaisons, a workshop with trivia night, or a meeting with with administration to advance open. Resources: workshop slidedeck, trivia ideas, quiz questions, upload-a-thon email template and talking points for administration.
</p><img src="https://github.com/camillet/Action-Kit-Match-Quiz/blob/master/images/2000px-Purple.svg.png"/>'},
    {   title: 'You Are a Growing Gene',
        desc: '<p>With the experience, knowledge, and resources of a seasoned advocate it may be your goal to grow Open Access Week and produce more tangible advocacy results throughout the year. You may be an advocate in a well-developed department at a research-intensive institution that offers you a small budget. You are most likely collaborating with a handful of very supportive colleagues to plan Open Access week events this year. Consider targeting a new audience, such as students, for wider impact. Suggested activities for Growing Genes: panel of faculty and students, invited speakers, discuss a resolution with administration, request student organizations to sign the Right to Research resolution or make a statement in support of open. Resources for Growing Genes: Right to Research brochures, resolution language, talking points for administration, and the Open Speakers database.
</p><img src="https://github.com/camillet/Action-Kit-Match-Quiz/blob/master/images/green-textured-pattern-background-1488751826Nlz.jpg"/>'},
    {   title: 'You Are a Connected Kate',
        desc: '<p>Building relationships and coalitions is your strength! It is possible you live in a city with multiple institutions and organizations interested in Open Access. You’d like to take these connections and work together on larger events for this Open Access Week. If you are hoping to leverage recent conversations about open to create taskforces with deliverables during Open Access Week, here is a place to start. Suggested activities for Connected Cates: user support and training on tools for open, meeting with political officials to discuss policy or conducting multiple workshops across institutions. Resources for Connected Cates: talking points for administrations, workshop, edit-a-thons, data day training materials, doodle and sched for coordinating events.
</p><img src="images/Solid_yellow.svg.png"/>'},
];
    
// global variables
var quizSteps = $('#quizzie .quiz-step'),
    totalScore = 0;

// for each step in the quiz, add the selected answer value to the total score
// if an answer has already been selected, subtract the previous value and update total score with the new selected answer value
// toggle a visual active state to show which option has been selected
quizSteps.each(function () {
    var currentStep = $(this),
        ansOpts = currentStep.children('.quiz-answer');
    // for each option per step, add a click listener
    // apply active class and calculate the total score
    ansOpts.each(function () {
        var eachOpt = $(this);
        eachOpt[0].addEventListener('click', check, false);
        function check() {
            var $this = $(this),
                value = $this.attr('data-quizIndex'),
                answerScore = parseInt(value);
            // check to see if an answer was previously selected
            if (currentStep.children('.active').length > 0) {
                var wasActive = currentStep.children('.active'),
                    oldScoreValue = wasActive.attr('data-quizIndex'),
                    oldScore = parseInt(oldScoreValue);
                // handle visual active state
                currentStep.children('.active').removeClass('active');
                $this.addClass('active');
                // handle the score calculation
                totalScore -= oldScoreValue;
                totalScore += answerScore;
                calcResults(totalScore);
            } else {
                // handle visual active state
                $this.addClass('active');
                // handle score calculation
                totalScore += answerScore;
                calcResults(totalScore);
                // handle current step
                updateStep(currentStep);
            }
        }
    });
});

// show current step/hide other steps
function updateStep(currentStep) {
    if(currentStep.hasClass('current')){
       currentStep.removeClass('current');
       currentStep.next().addClass('current');
    }
}

// display scoring results
function calcResults(totalScore) {
    // only update the results div if all questions have been answered
    if (quizSteps.find('.active').length == quizSteps.length){
        var resultsTitle = $('#results h1'),
            resultsDesc = $('#results .desc');
        
        // calc lowest possible score
        var lowestScoreArray = $('#quizzie .low-value').map(function() {
            return $(this).attr('data-quizIndex');
        });
        var minScore = 0;
        for (var i = 0; i < lowestScoreArray.length; i++) {
            minScore += lowestScoreArray[i] << 0;
        }
        // calculate highest possible score
        var highestScoreArray = $('#quizzie .high-value').map(function() {
            return $(this).attr('data-quizIndex');
        });
        var maxScore = 0;
        for (var i = 0; i < highestScoreArray.length; i++) {
            maxScore += highestScoreArray[i] << 0;
        }
        // calc range, number of possible results, and intervals between results
        var range = maxScore - minScore,
            numResults = resultOptions.length,
            interval = range / (numResults - 1),
            increment = '',
            n = 0; //increment index
        // incrementally increase the possible score, starting at the minScore, until totalScore falls into range. then match that increment index (number of times it took to get totalScore into range) and return the corresponding index results from resultOptions object
        while (n < numResults) {
            increment = minScore + (interval * n);
            if (totalScore <= increment) {
                // populate results
                resultsTitle.replaceWith("<h1>" + resultOptions[n].title + "</h1>");
                resultsDesc.replaceWith("<p class='desc'>" + resultOptions[n].desc + "</p>");
                return;
            } else {
                n++;
            }
        }
    }
}
