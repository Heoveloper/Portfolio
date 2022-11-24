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
//home
const $home = document.querySelector(".wrapper");
//about
const $about = document.querySelector(".about");
//skills
const $skills = document.querySelector(".skills");
//project
const $project = document.querySelector(".project");
//education
const $education = document.querySelector(".education");
//contact
const $contact = document.querySelector(".contact");

//profile menu 클릭 시 해당 콘텐츠로 스크롤 이동
$menuHome.addEventListener('click', e => {
    e.preventDefault();
    $home.scrollIntoView({behavior:"smooth", block:"start", inline:"end"});
})
$menuAbout.addEventListener('click', e => {
    e.preventDefault();
    $about.scrollIntoView({behavior:"smooth", block:"start", inline:"end"});
})
$menuSkills.addEventListener('click', e => {
    e.preventDefault();
    $skills.scrollIntoView({behavior:"smooth", block:"start", inline:"end"});
})
$menuProject.addEventListener('click', e => {
    e.preventDefault();
    $project.scrollIntoView({behavior:"smooth", block:"start", inline:"end"});
})
$menuEducation.addEventListener('click', e => {
    e.preventDefault();
    $education.scrollIntoView({behavior:"smooth", block:"start", inline:"end"});
})
$menuContact.addEventListener('click', e => {
    e.preventDefault();
    $contact.scrollIntoView({behavior:"smooth", block:"start", inline:"end"});
})

//gnb menu 클릭 시 해당 콘텐츠로 스크롤 이동
$gnbHome.addEventListener('click', e => {
    e.preventDefault();
    $home.scrollIntoView({behavior:"smooth", block:"start", inline:"end"});
})
$gnbAbout.addEventListener('click', e => {
    e.preventDefault();
    $about.scrollIntoView({behavior:"smooth", block:"start", inline:"end"});
})
$gnbSkills.addEventListener('click', e => {
    e.preventDefault();
    $skills.scrollIntoView({behavior:"smooth", block:"start", inline:"end"});
})
$gnbProject.addEventListener('click', e => {
    e.preventDefault();
    $project.scrollIntoView({behavior:"smooth", block:"start", inline:"end"});
})
$gnbContact.addEventListener('click', e => {
    e.preventDefault();
    $contact.scrollIntoView({behavior:"smooth", block:"start", inline:"end"});
})

//about 좌우버튼 클릭 시 콘텐츠 페이징
//button selector
const $prev = document.querySelector(".about__content--prev");
const $next = document.querySelector(".about__content--next");
//contents selector
const $1st = document.querySelector(".first");
const $2nd = document.querySelector(".second");
const $3rd = document.querySelector(".third");

//prev 버튼 클릭 시
$prev.addEventListener('click', e => {
    e.preventDefault();

    if ($1st.classList.contains("show")) {
        return;
    }

    if ($2nd.classList.contains("hide")) {
        $3rd.classList.remove("show");
        $3rd.classList.add("hide");
        $2nd.classList.remove("hide");
        $2nd.classList.add("show");
        return;
    };

    if ($1st.classList.contains("hide")) {
        $2nd.classList.remove("show");
        $2nd.classList.add("hide");
        $1st.classList.remove("hide");
        $1st.classList.add("show");
        return;
    };
})

//next 버튼 클릭 시
$next.addEventListener('click', e => {
    e.preventDefault();

    if ($3rd.classList.contains("show")) {
        return;
    }

    if ($2nd.classList.contains("hide")) {
        $1st.classList.remove("show");
        $1st.classList.add("hide");
        $2nd.classList.remove("hide");
        $2nd.classList.add("show");
        return;
    };

    if ($3rd.classList.contains("hide")) {
        $2nd.classList.remove("show");
        $2nd.classList.add("hide");
        $3rd.classList.remove("hide");
        $3rd.classList.add("show");
        return;
    };
})