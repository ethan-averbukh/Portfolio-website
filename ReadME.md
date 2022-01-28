# **Project Worksheet**


## **Project Description**
A portfolio website developed to showcase me and some of the projects I have worked on recently. I am using *HTML, CSS, JavaScript, jQuery, AJAX,* and other libraries for styling purposes. The site is intended to focus on user engagement, and dynamic design.

Inspired by:

[Zach Miller](http://zzzach.com/)

[Colorlib](https://preview.colorlib.com/#orbit)

## **Project Schedule**

| Day      | Deliverable       | Status     |
| -------- | ----------------- | ---------- |
| Day 1 | Complete Worksheet | Complete
| Day 1 | Get reviewed and approved | Complete
| Day 1 | Start HTML, CSS | Complete
| Day 2 | Continue HTML, CSS | Complete
| Day 2 | Begin JS components, clickables,etc... | Complete
| Day 3 | JS Components to animate Projects | Complete
| Day 4 | Finish up JS Components | Complete
| Day 4 | Attempt to finish CSS | Complete
| Day 5 | Finish any css still remaining | Incomplete
| Day 5 | Last bug fixes & Touchups | Incomplete
| Day 6 | Present | Incomplete



## **Wireframes**

[Mobile](https://imgur.com/J4L9ILg)

[Desktop](https://imgur.com/xsESdQU)



## **Time/Priority Matrix**

[Image of Matrix](https://imgur.com/HaZ2MZZ)

## **MVP/Post MVP**


#### **MVP**

- HTML Structure: Nav Bar, Header, Sections (About, Projects, Skills, Contact, Footer)
- Basic CSS: Presentable, but not crisp
- JS Basics: Clickable items (buttons, hamburger menu, contact form)



#### **PostMVP**

- Most of the animations
- Any Icons and images added



## **Functional Components**

#### **MVP**

| Component | Priority | Estimated Time | Actual Time |
| --------- | -------- | -------------- | ----------- |
| General Layout | High | 1hr | hr |
| Nav Logo | High | 1hr | hr  |
| Nav Links | High | 1.5hr | hr |
| Hamburger Menu | High | 2hr | hr |
| Intro Image | High | 1.5hr | hr |
| Intro Bio | High | 1hr | hr |
| Projects: HTML and CSS | High | 3hrs | hr |
| Projects: JS Basics | Lower | 2hrs | hr |
| Skills: HTML and CSS | High | 2hrs | hr |
| Contact: HTML and CSS | High | 2hrs | hr |
| Footer: HTML and CSS | High | 1hr | hr |
| Total | High | 18hrs | hrs |


#### **PostMVP**

| Component | Priority | Estimated Time | Actual Time |
| --------- | -------- | -------------- | ----------- |
| Site wide: Hovering CSS | High | 1.5hr | hr |
| Nav Logo: Animation | Low | 2hr | hr |
| Hamburger Menu: Animation | High | 2hr | hr |
| Intro Image: Animation | Low | 2.5hr | hr |
| Intro Bio: Fade in | Low | 2hr | hr |
| Projects: Popout Animation | High | 4hrs | hr |
| Skills: Icons | Low | 2hrs | hr |
| Contact: Icons | Low | 2hrs | hr |
| Footer: Icons | Low | 2hr | hr |
| Total | High | 19.5hrs | hrs |


## **Additional Libraries**

Materialize CSS: for icons and some components



## **Code Snippets**



```
@mixin text-gradient {
    background: linear-gradient(-90deg, #161F6D, #161F6D, #ffffff, #ffffff);
    background-size: 300%;
    font-weight: 900;
    text-transform: uppercase;
    background-clip:text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animated_text 20s ease-in infinite;
    -moz-animation: animated_text 20s ease-in infinite;
    -webkit-animation: animated_text 20s ease-in infinite;
}
```


## Sources Used for Inspiration

gradient idea help:
[Gradient CSS](https://www.sliderrevolution.com/resources/css-animated-background/)
[Animated Gradient](https://orangeable.com/css/animated-gradient-text)

Keyframes help:
[Keyframes syntax](https://www.simplilearn.com/tutorials/css-tutorial/css-keyframes)

Projects:
[Carousel](https://codepen.io/dobladov/pen/kXAXJx)


[Anchor Links](https://www.w3docs.com/snippets/html/how-to-create-an-anchor-link-to-jump-to-a-specific-part-of-a-page.html)

## **Issues and Resolutions**

The piece of code below is the main selector and movement section of the carousel. So far, can not figure out why the carousel is behaving in correctly in the next direction. When more than 3 elements are added to the carousel strange behavior occurs to all the elements.
```
   let moveToSelected =  function(element) {
       //Conditional checks to see which element in carousel is selected.
       
        let selected;
        if (element == "next") {
        selected = $(".slide-current").next();
        } else if (element == "prev") {
        selected = $(".slide-current").prev();
        } else {
        selected = element;
        }
        // jQuery function that selects the next and prev sibling of the selected element
        let next = $(selected).next();
        let prev = $(selected).prev();
        // let secondNext = $(next).next();
        // let secondPrev = $(prev).prev();
    
        // Changing the class of the selected element which forces a position change in the carousel
        $(selected).removeClass().addClass("project-card slide-current");
        // Changing the class of the other elements to re-slot into the next and prev position
        $(prev).removeClass().addClass("project-card slide-prev");
        $(next).removeClass().addClass("project-card slide-next");

    }
```

 Maintaining appropriate size for the carousel cards is currently having some issues. When the cards are clicked one too many times they resize from the container size, to the default image size. (Resolution in progress)
