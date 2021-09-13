// WELCOME ANIMATION
const position = document.documentElement;

position.addEventListener('mousemove', e => {
    position.style.setProperty('--x', e.clientX + 'px');
});

// PORTFOLIO ANIMATION

function changeProjectFilter(selectedProjects) {
    for (let i = 0; i < selectedProjects.length; i++) {
        console.log(selectedProjects[i]);
        $(`#${selectedProjects[i]}`).css({'filter': 'grayscale(0%) blur(0px)'});
    }
}

function removeAllFilters(allProjects) {
    for (let i = 0; i < allProjects.length; i++) {
        $(`#${allProjects[i]}`).css({'filter': 'grayscale(100%) blur(2px)'});
    }
}

$('.nav-button').click(e => {
    removeAllFilters(['rafi-project', 'shortly', 'devjobs', 'triptastic', 'scoutware', 'samantha']);
    let targetId = $(e.target).attr('id');

    if (targetId == 'javascript') {
        console.log('JS');
        changeProjectFilter(['rafi-project', 'shortly', 'devjobs']);
    }

    else if (targetId == 'react') {
        console.log('R');
        changeProjectFilter(['triptastic', 'scoutware']);
    }

    else {
        console.log('F');
        changeProjectFilter(['samantha']);
    }
});

// Clear Effects

$('.clear-effects').click(() => {
    let allProjects = ['rafi-project', 'shortly', 'devjobs', 'triptastic', 'scoutware', 'samantha'];

    for (let i = 0; i < allProjects.length; i++) {
        console.log(allProjects[i]);
        $(`#${allProjects[i]}`).css({'filter': 'grayscale(0%) blur(0px)'});
    }
});

// Project Links

function setProjectLinks() {
    let allProjects = ['rafi-project', 'shortly', 'devjobs', 'triptastic', 'scoutware', 'samantha'];
    let allProjectLinks = ['https://tankop1.github.io/rafi-website/index.html', 'https://shortlyproject.netlify.app/', 'https://devjobs-search.netlify.app/', 'https://github.com/tankop1/triptastic', 'https://github.com/tankop1/scoutware', 'https://github.com/tankop1/ai_website'];

    for (let i = 0; i < allProjects.length; i++) {
        $(`#${allProjects[i]}`).click(() => {
            console.log(allProjectLinks[i])
            window.location.href = allProjectLinks[i];
        });
    }
}

setProjectLinks();