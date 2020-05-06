# Project Evaluation

## Reflective discussion of success of project

As an entire project, the team is highly satisfied that our main ambitions for the project have been achieved and even bettered in some cases. Despite the disappointing consequences that COVID-19 has had on our ability to discuss, improve and share our product, we are satisfied that we have engaged with contingency arrangements to replace these experiences as much as possible. The evaluation of each platform can be found in section 2b (LINK THIS ON GITHUB).

Evaluating the project as a whole is a process that also includes a comparison of our software engineering skills before and after the process. As a method for exploring and familiarising ourselves with software engineering tools, philosophies and practices, the project was highly successful. The team has been exposed to new technologies and methodologies which will certainly be applicable in future projects and development processes. Even outside software development, transferable skills such as rapid product prototyping and collaboration methods have been gained. This will give the team greater confidence going forward into industry, where development concepts may now be familiar, or suggested by team members to development practice in their industry too.

The balance between task allocation/ division of labour and productive collaboration practices (such as pair programming) was explored and adhered to as much as COVID-19 working conditions allowed. Our original desired balance was not possible due to working separately across three time zones. In industry, the team may benefit from non-distanced collaborative practices which were unfortunately not possible in this project. The development sprints of our agile working philosophy encouraged us to work with constant unit-testing and self-evaluation on our working practices. The team embraced change in the service’s design and architecture more than in previous work and aimed to continuously integrate changes to keep the service ‘working’ at all times. These experiences have all been considered vital to our development as engineers and are highly likely to prove useful in future.

The project provided further group working and collaboration experience for the team. This practice was exaggerated and stressed by the impact of COVID-19 has had on communication - if industry work has to continue enforcing social distancing and/or working from home, the team now has first hand experience on how to deal with that disruption in a structured and efficient manner. Many software engineering jobs are freelance too, hence working physically in isolation but working collaboratively over the internet is a useful experience that will likely be replicated in future work, COVID-19 or not.

The process of this project has given the team the confidence to believe they can tackle complex and initially abstract problems with good and incremental software design, and has encouraged the members to do so in future.

## Evaluation of group working practice

### Github and collaborative working tools

Github was adopted early in this process to familiarise all team members with its features and collaborative benefits. Even before any technical content was written, it was used to share images of the paper prototype and to record notes from group work. During the early phases of development parallel changes to the repository was rare, so any limitations to git were not encountered. However as the project progressed there were elements of the git repository that more team members needed to make changes to simultaneously such as notes and report write-ups. Due to the relatively isolation nature of the three platform’s programming (see paragraphs below), parallel editing limitations with git were only a significant problem for text documents. Therefore the group decided to take these collaborative documents away from git and edit them simultaneously using Google Docs until their final version was ready for translation into markdown based .txt files and storage on the Github Repository.

### Test-driven development

The system requirements of each platform were translated into feature tests to allow working with a test-driven development philosophy. The aim by using this philosophy was to keep the focus on the platform requirements, to simplify the debugging process and maintain high code quality standards throughout development. Unfortunately, as the project progressed these system requirements and tests were continuously shifted. This was partially due to the growth in knowledge and experience of the team as the project went on, and also partially due to a change in the scope of the project that we wanted to achieve due to COVID-19 disruption. Detrimentally, new restrictive working conditions slowed progress causing a reduction in target feature quantity and prototype feature quality.

As much as possible during the early stages of the project, continuous integration was executed. It was ensured that any new additions to programming scripts passed all tests related to that particular feature, before committing it to the shared codebase in Github. This way the team was able to protect the correct functioning of other subsystems and the system as a whole throughout development.


### Pair Programming

Under normal working conditions, the group had agreed that working in pairs on the different platforms was ideal. Pair work would encourage momentum in tasks and allow for a more evaluative working process - two opinions are better than one. A study on the impact of pair programming on productive output showed a 127% increase in code quantity, and a significant decrease in the number of coding errors (Jensen, 2003).  

However due to the distanced working enforced by the COVID-19 crisis, working in pairs became more challenging for practical and communicative reasons. Practically, only the team member with the M5Stack was able to build, test and demonstrate the IoT platform functionality. Additionally with the desktop and web applications, reduced communication and eliminated physical co-working reduced the speed of the development progress. Significant extra time was spent communicating ideas and updates on progress, which could have been avoided if working in closer proximity was possible. The team would hope that future work could be carried out under more usual circumstances, that would allow gaining the benefit of pair programming.

### Limited team members

With just 4 team members working on this project, the division of project aims and therefore tasks was challenging. All members had to serve multiple purposes and be familiar with the entire system. With large individual workloads and significant crossover in tasks, easy and concise communication was essential to ensure two things: that all team members were aware of the development progress for each feature and platform, and that all project goals were being maintained continuously. The difficulty of this challenge was exaggerated by COVID-19’s impact on studies and working conditions. In future work, recruiting more team members would help to alleviate large workloads, and perhaps allow for greater efficiency via improved division of labour.

## Discussion of future work

In future, the project would benefit from the following adjustments and development focuses.

### Design phase - notes for future work

In future iterations of UI designs, similar fast prototyping methods would be employed to maintain our agile development philosophy. However, the specific prototyping tools should be reconsidered to maximise the shareability of our prototype with non-technical participants. Given Bubble’s service is focused on consumers in the general public, insights from participants without software engineering experience is very valuable. 

### Development phase - notes for future work

In future development, the team should increase its commitment to object-orientated programming. This will allow the entire project to further benefit from: code simplicity gains from widespread inheritance, code readability and tidiness gains from abstraction and reduction in redundant code from polymorphism. The current code in all three platforms is relatively straightforward and easy to follow, therefore the concepts of inheritance, interfaces and polymorphism did not appear to be of significant relevance weighed up against our dedication to making the system work. As code becomes more complicated, those measures may be necessary to sustain the readability that has been achieved so far. 

### Evaluation phase - notes for future work


### Web Application - next steps
When considering steps to take in development for the future, extended features could be added to the Web app to provide it with more functionality. Whilst currently it is very straightforward to select a bath and choose one’s desired settings, there is room for improvement when it comes to added options. One potential idea would be to add a page in which one can order more bath supplies on the go, widening the usage of the application. Of course, this is currently an option on the Smart Bath device itself (M5Stack), however as yet this is limited. Similarly to the extensive ways one can select their bath (toggle for temperature, depth and bubbles), there could be a page with a range of bath supplies such as soap, shampoo, conditioner etc. which one can browse from and place an order. Another area of improvement could be represented by the implementation of a user specific bath history which would retrieve data from the Desktop App. Moreover, a ‘favourites’ system could be developed, whereby the settings a user most commonly selects is suggested when they open the app, thus speeding up the process. 

More significantly, the Web application can be extended to a mobile app form. As Bubble is branded as a software for people on-the-go, this would be a very desirable feature. Users would be able to download the app straight onto their mobile phones and avoid having to access Bubble through a browser. The mobile-view stills provided in section a - link to UI interface bit demonstrate how the Web application would appear on a phone, therefore it is simple to visualise how this app would be designed. This is something that the team would be very excited to create, however due to a lack of tools it was not possible in the current climate. In the future, the team is looking at experimenting with a cross-platform tool like Angular or a customizable feature offering tool like Bootstrap or a lightweight, Python tool as Flask, in order to replace the p5.js library used. 

### Desktop Platform - next steps

******* CONTENT NEEDED *******

### IoT Device - next steps

Future work will be focused in part on the practicalities of connecting the IoT device to the mechanics of a bathtub to enable Bubble to deliver the service this prototype simulates. In practice it is likely to require replacement of many tap valves to allow for automated rather than manual bath running. Proportional–integral–derivative (PID) control will be used to achieve the desired water temperature as quickly and efficiently as possible, while bath depth will have to be measured using sensors to determine when to cut off the water supply. Additionally, work to incorporate automated plug mechanics is essential to ensure the water is run into a plugged bath, and to enable the release of cancelled baths. Any new parts or products should be designed with self-diagnostic fault catching features where possible. This will allow the team to give greater visibility to the user or plumber in case of malfunction. The team intended to achieve some of this research and design to have a partially actuated system connected to the M5Stack to demonstrate at this point. However, due to a lack of lab access and tools this was not possible during the COVID-19 crisis.
