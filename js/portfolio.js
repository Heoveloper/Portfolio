//profile menu selector
const $menuHome = document.querySelector(".menu__home");
const $menuAbout = document.querySelector(".menu__about");
const $menuSkills = document.querySelector(".menu__skills");
const $menuProject = document.querySelector(".menu__project");
const $menuEducation = document.querySelector(".menu__education");
const $menuContact = document.querySelector(".menu__contact");

//gnb menu selector
const $gnbHome = document.querySelector(".gnb__home");
const $gnbAbout = document.querySelector(".gnb__about");
const $gnbSkills = document.querySelector(".gnb__skills");
const $gnbProject = document.querySelector(".gnb__project");
const $gnbContact = document.querySelector(".gnb__contact");

//contents location selector
//home contents
const $home = document.querySelector(".wrapper");
//about contents
const $about = document.querySelector(".about");
//skills contents
const $skills = document.querySelector(".skills");
//project contents
const $project = document.querySelector(".project");
//education contents
const $education = document.querySelector(".education");
//contact contents
const $contact = document.querySelector(".contact");

//profile menu 클릭 시 해당 콘텐츠로 스크롤 이동
$menuHome.addEventListener('click', e => {
    e.preventDefault();
    $home.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})
$menuAbout.addEventListener('click', e => {
    e.preventDefault();
    $about.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})
$menuSkills.addEventListener('click', e => {
    e.preventDefault();
    $skills.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})
$menuProject.addEventListener('click', e => {
    e.preventDefault();
    $project.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})
$menuEducation.addEventListener('click', e => {
    e.preventDefault();
    $education.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})
$menuContact.addEventListener('click', e => {
    e.preventDefault();
    $contact.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})

//gnb menu 클릭 시 해당 콘텐츠로 스크롤 이동
$gnbHome.addEventListener('click', e => {
    e.preventDefault();
    $home.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})
$gnbAbout.addEventListener('click', e => {
    e.preventDefault();
    $about.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})
$gnbSkills.addEventListener('click', e => {
    e.preventDefault();
    $skills.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})
$gnbProject.addEventListener('click', e => {
    e.preventDefault();
    $project.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})
$gnbContact.addEventListener('click', e => {
    e.preventDefault();
    $contact.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})