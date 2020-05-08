
# System Design

Bubble aims to automate the bath preparation process, converting your bath into a ‘smart bath’. The product is composed of three different but integrated platforms; a Web App, a Desktop App and an Internet of Things (IoT) device - an M5Stack.

In this section, we will cover the chosen architecture of the entire system, the design methods used for the key subsystems and the evaluation methods we applied to the product. This section will also provide a full explanation of the stages of the design process, from paper prototyping to software application. Providing two user stories will also highlight the opportunity that the Bubble team is set to seize in the current bath market.

  > ## Contents

 > * [User Stories](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/System_Design.md#user-stories)
 > * [Requirements of key subsystems](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/System_Design.md#requirements-of-key-subsystems)
 > * [Architecture of the System](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/System_Design.md#architecture-of-entire-system)
 > * [Object Oriented Design](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/System_Design.md#object-orientated-design-of-key-subsystems)
 > * [Evolution of UI Wireframes](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/System_Design.md#evolution-of-ui-wireframes-for-key-subsystems)
 > * [Communication Protocols](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/System_Design.md#communication-protocols-in-use)
 > * [Data Persistence Mechanisms](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/System_Design.md#details-of-data-persistence-mechanisms-in-use)
 > * [Web Technologies](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/System_Design.md#details-of-web-technologies-in-use)

## User Stories

User stories were used to help discover and list the key requirements of the system.

Web App & M5Stack:

*   Sara is an active user of her Coffee Maker run with Alexa Routines early in the morning. Her job at a multinational company means she is always on the go, especially with her long commute to the office.

*   Sara has always been looking for a way to upgrade her household to her busy schedule. Smart fridge, smart coffee maker, smart grocery ordering, but a way of relaxing in the evenings after a long work day was missing. Sara has invested to make almost everything in her kitchen ‘smart’, but has until now been disappointed with a lack of innovation for the bathroom.

*   Sara decided to buy a remote bath runner called Bubble. When she leaves the office, she will set up the bath from her phone application and it will be ready by the time she arrives.

*   Sara wanted an intuitive and responsive system. When Sara accesses the app, she will login to her account. There she can choose one of the baths from home or she can add a new one. This allows her to connect all the baths in the household to only one system.

*  Sara will wait for the identification and connection of the app to the bath’s M5Stack. Sara can choose to keep the settings of a previously set up bath or she can model a set of choices. Sara will be able to set her desired temperature for that evening, the depth of the water in the bathtub and if she desires bubbles or not.

*   Sara will press GO and the instructions will be set to the M5Stack and the preparation of the bath will proceed.

*  Sara can be confident that her bath will be run to match her perfect parameters every time, no more worrying, testing and adjusting. She’s also pleased to be saving water and energy wastage because of this automation too.

*  Sara can always go back and change the settings of the bath if there is a change in plans or it has been a mistake when she was setting the current bath.

*   Sara can cancel the bath at any time before she arrives home or before the bath is ready. A timer shows how much time is left until the bath preparation is complete.

*  When the process is finished, communication for the M5Stack will push a notification to the web app screen followed by a notification sound as well.

*  Sara can arrive home and enjoy her Bubble experience, created especially for people who are extremely busy and dedicated to their work.

Desktop App:

*  Tom has been working as a software developer at Bubble for three months now. His day-to-day at the company involves responding to user’s requests, managing user data and developing new tools to include in the application.

* When he arrives at work, he first manages the report and supply requests that have newly been added to the system. This involves extracting the bathId to find the user and finding out what maintenance person has to be sent depending on the user’s description of the problem. For the supply requests, he schedules deliveries of bubbles to the address of the user with the request.

* Tom has to present a weekly presentation on the performance of the application. The indicators for these are collected by the client’s usage of the application, new users, lost users, number of interrupted baths and so on. Being able to collect this information in a simple and clear way eases Tom’s job when communicating results weekly.

* Tom is working with other software developers to integrate voice recognition to turn off the lights in the bathroom. The team collects survey answers in the desktop application that are posted on social media and on the web application and analyzes new tools to personalize the user’s experience.

## Requirements of key subsystems

**Web application:**

Remote Bath Running Process - the web app must allow users to remotely send bath run requests; by choosing predetermining bath settings, a bath can be run with the press of one button. Alternatively bath settings must be available for change on the web based platform. The web app must give the user progress updates on the running status of the bath, as well as the option to cancel the bath at any time or change the settings.

Interface/ Interaction & Navigational Requirements - the design must be simple in order to limit the time the user spends understanding the interface operation, while still keeping the functionality of the Web App at a high standard. A predictable/ traditional design should be used to make it easy for the user to navigate through the Web App. The theme and structure of the Web pages should be kept consistent in order to avoid the user dissatisfaction or confusion while engaging with the app.

Communication & Data Accessibility - The web app must send data about users’ bath setting preferences via JSON files. It must ensure that any pressed buttons are disabled after use on the client-side such that there are no duplicates of the same JSON file communicated to the M5Stack. Additionally, server-side checks need to be implemented to avoid duplicate data getting through.

Portability and Compatibility - the Bubble Web App should be a cross-platform, cross-browsing and mobile responsive; this can be checked against a list of likely browsers, historic software versions, devices and hardware specifics.

**Desktop application:**

Data Processing - to build a database that stores the status of each bath and logs repair and supply requests. The bath data should be received as JSON Objects and stored in JSON Object arrays.

Data Visualisation - to track baths completed, requests and baths interrupted, the platform must clearly visualize this incoming data. To understand performance in different time frames, the data must be split into weekly, monthly and quarterly frames.

Data Persistence - the application must act as a safe and secure location to save sensitive information from users. The admin must be able to add, edit and delete any users from the database.

Bug Requests - this application also records the user’s input on any additional features they would like to see or review on the current tools. The control task panel stores these requests.

**M5Stack/ IoT device:**

System visibility - allow the user to see the current status of the smart bath, including: bath running progress and chosen bath settings, fault statuses and restock request status.

Operable interface - buttons are needed to instruct the following: traditional ‘in location’ bath run, system diagnosis and reporting of any found fault, bubble bath restock request.

Communication: MQTT broker subscription - ‘listen’ for JSON formatted bath running instructions. MQTT broker publishing - post bath complete messages, post JSON formatted fault/repair required messages or post bubble bath restock requests.

## Architecture of entire system

The architecture is composed of:

**Desktop application to be used by developers.**

The Desktop app is mainly focused on user management, repairs and supply requests and data analytics. Developers can inspect the user database, fix any bugs that have been reported from users, respond to supply requests and implement changes to the system. Additionally, data analytics of app usage and common features of the app are shown here for marketing/business profitability uses.

**M5Stack program to create a “smart bath”.**

The M5Stack platform represents the IoT connected bath - its purpose is to listen for bath running instructions from the web application and simulate the bath running process. Additionally, a button on the M5Stack is assigned to allow for traditional bath running ‘in location’ - it commences a bath run with the user’s bath presets. When the bath running process finishes a “bath complete” message is produced and delivered to the user via the web application. Relevant data is sent to the desktop application for subsequent anonymous business analysis.

The M5Stack also has a role in reporting faults or failures in the system too. This action sends details of a fault to the desktop platform to highlight the issue to the management team, who will organise a repair. Similarly, another button is used as a request for a bubble bath resupply. This has been modeled on Amazon’s Dash Buttons - the user just has to press the button to order a delivery of bubble bath. Payment and delivery details are already stored to maximise the ease of this method.

**Web application for the client to use the system.**

The Web App was designed primarily for the user. Drawing from inspiration from the Apple Remote App, the client can open the app to find a list of their previously connected baths, or the option to set up a new one. The customers can first add the location of their baths at home, to then be used in the future. The Bath Selection page allows the user to set up a new bath corresponding to its location in the household or use a formerly connected bath to the account. After the user adds their baths, they can control and order the running of a specific bath remotely. Before the Loading page, the users should also be able to browse through their bath history, which would retrieve data from the Desktop App. This was not added in the first prototype, but mainly thought of as an area of improvement for the final product to be released on the market. The Bath Settings page offers a range of options to the user for running the bath. The temperature can be chosen by using a slider, different depths can be selected by clicking the specified button. Finally, an option of running the bath with bubbles or not is available before the GO button is pressed. The user info and bath settings are saved in a JSON file and sent at this point to the broker. The Bath Running page then displays a timer which allows the user to check for the remaining time until the bath is ready. In addition, the user can go back and change the settings or cancel the running of the bath. The final page of the Web Application announces the completion of the bath and grants the user the possibility to connect to other systems such as Smart Ambient Lightning or a Wifi Speaker System which will redirect the user to their Spotify Account.

## Object Orientated design of key subsystems

*Figure 1: Initial architecture of Object Oriented design*

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/UML1.png" alt="UML1" width="50%">
</p>

The initial design was very basic; it was easy to decide which elements were important for the Web application to include, but the way in which each platform would interact with these essential features had not been considered at this early stage. Whilst decisions had been made on user interaction, and how the Smart Bath would deal with requests placed, the interaction between these objects and the desktop platform was not yet concrete. Once a decision had been made for the desktop app to be controlled by a Bubble management employee, ideas began to blossom.

It was through building the web and desktop applications that the object orientated aspects of the design were truly understood; each sprint brought a more sophisticated approach to cross-communication.

*Figure 2: UML diagram of the entire system*

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/UML2.png" alt="UML2" width="75%">
</p>

As can be seen in the UML diagram of the entire system, objects are passed between the platforms which in turn enact different, individual operations.

The flow of the objects works as follows:

1.  A bath is selected by the user in the Web application.

2.  The corresponding bath ID and bath settings are sent to the M5Stack, which will then set the characteristics in the bath’s mechanics and start running the water.

3.  Meanwhile, this bath data is also received on the management side (Desktop application). Here, one can review statistics, update features, report anything faulty, or send in an external request to order more bubble bath supplies.

After some external research we came to find five key concepts of language, alongside three concepts of programming, which are essential in Object Oriented Design [(refer here for more information.)](http://www.selectbs.com/process-maturity/what-is-object-oriented-design)  

• Encapsulation • Data Protection • Inheritance • Interface • Polymorphism •

• Re-usability • Privacy • Documentation •

**Encapsulation:**

By virtue of the p5 JavaScript library, the majority of the code in the Web app is divided into three main methods: preload, setup and draw. The setup method is static, and loads everything on to the page once, to be sustained while the user is on that page. The draw method is a loop, constantly redrawing the objects onto the page and enabling changes to be made. In the preload method, images to be used are loaded and stored before the rest of the code is processed to enable quick access as soon as they are called. There is also a windowResized method within each class which enables responsiveness in the browser. Furthermore, there are extra methods in the code for the pages which interact with the MQTT; the onSubmit method passes the JSON file when the GO button is pressed for the settings to be sent, whilst the subscribe, connect, and sent methods are imported straight from the MQTT library.

These methods can be seen within each class. Every page of the web app is run through a JavaScript class, which encapsulates all the code necessary for running the page. Each of the actions called by the Bath User (selectBath, sendTemp, sendSize, sendBubbles), belong to a class which deals with the request, as has been elaborated in the Web App architecture explanation.

From a design perspective, there is also a bubble class which is called in the code when bubbles are to be displayed in the background of the screen. This includes three methods which build three differently sized, differently coloured bubble shapes which move around the screen. In retrospect, more, smaller methods, such as bubble.js could have been created in order to organise the code in a neater, more concise manner. An example of an instance when a separate class could have been created is for the MQTT side, despite the fact that it works just as adequately within the whole page’s code.

The code for the Desktop App was created using Processing and divided into four sketches: the management dashboard, data, events and view. In a similar format to the Web App, due to the nature of Processing, the management dashboard requires the use of the setup and draw methods. These work in the same way as in p5; the statements within the setup method “execute once when the program begins”, whilst the code in the draw method runs continuously, “each statement executed in sequence and after the last line is read, the first line is executed again”. In the setup, the MQTT connection is set and the instance of controlP5 is created. Due to the implementation of the controlp5 library, the draw method is not as relevant in the design of the page.

The events sketch deals with handling input from the user. It reads messages coming from the MQTT and, using an event handling method, executes the necessary actions. Here, it can be seen how methods, in communicating with the MQTT broker, were shared between the platforms. For example, the desktop method clientConnected communicates with the web method onConnect.

The data sketch is focused on reading, writing and preparing data. A simple class to create metrics to show the companies performance was used given that many metrics were going to be created for the application. The private class Database creates the database and adds the bath data; this must be private to ensure only members of the same class can access it. The public class BathData consists of the different API calls that the application needed.

It consists of an API method to ensure separation of concerns (User -> API -> DB), an API to obtain a bath by its status, an API to save the bath into the database and an API to update a bath’s status.

The view sketch deals with the appearance of the page of the dashboard. It is in this sketch that the colour scheme is defined, the dashboard view is designed, and static elements are built, much like the style.css file used for the Web App. The public class Dashboard_View contains all the methods creating these elements (charts, listorders, titles) while the method concerned with updating the dashboard data is updateDashboardData.

A fifth sketch was created, called Test which dealt with sending “dummy” data to ensure the application is working correctly. By running tests and assertions throughout the writing stage of the code, the team ensured to only measure progress based on working code.

Due to the nature of arduino coding, limited encapsulation was possible in the M5Stack platform’s programming. However, in an attempt to make the code more readable and hide complex tasks from main methods, smaller methods were split with comments into three different sections: Setup & Loop, helper methods (which hide the bulk of graphical display and string management complexities) and complex MQTT/ communication related methods. The final section remains relatively difficult to follow due to the complex task and MQTT specific commands, however a best attempt at encapsulation has been made by separating this from the significantly more readable and simple Setup, Loop and helper methods.

**Data Protection / Privacy:**

All the code from the web app side is public, therefore there are no private methods or classes; all need to be accessed by the html file in order for them to be run in the browser.

Access to the desktop app is restricted to developers only. Initially, the database was going to be stored using the MySQL library, however this was suggested against when using a remote database since it can be highly insecure. Hence, the bath data was saved in a JSON array.

The M5Stack code was written in only one script, therefore there is not very much scope for it to be specifically defined as public or private, as it can only be accessed once at a time.

More on the [Data Protection and Privacy](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Implementation/System_Implementation.md#data-security-privacy--user-anonymity) within this system can be seen in Section 2, where System Implementation is discussed.

**Inheritance, Interface and Polymorphism**

Please refer to our [Discussion of Future Work](https://github.com/jupozuelo/Software-Engineering/blob/master/Project_Evaluation/Project_Evaluation.md#development-phase---notes-for-future-work) to read about how these Object Oriented principles could be incoporation into Bubble. 

**Re-usability**

Alongside the p5 library itself, the Web App code includes a number of p5 specific libraries: p5.clickable, p5.play, and p5.sound. Similarly, the Desktop App imports the controlp5 and MQTT libraries. These are imported to enable the calling of specific methods which speed up the code, making it more effective as well as improving the design of the pages.

**Documentation**

The code for the web app was written in such a way that it should be easy to follow, and laid out in a very spaced out and clear format. A thought for future development would be to add comments throughout the code to enable better readability for any new collaborators.

There are comments throughout the Processing code explaining what is going on within each method. This makes them very easy to follow, allowing for smooth and effective re-usability.

As explained in the encapsulation section, the M5Stack code not only uses comments, but relies on them in order to section the code to allow for readability. These comments not only pinpoint when a new section begins, but explain what is going on within, allowing for a comprehensive understanding.

## Evolution of UI wireframes for key subsystems

The web application was the focus of the majority of the UI design and wireframing process because it is the product that the final user must be most familiar with. Since the desktop app is designed for internal management and metrics, its UI design was considered a secondary priority for this prototype. Similarly the IoT/ M5Stack platform has significantly fewer design requirements and sophistication, so its design was also considered a secondary priority.

**Paper prototyping method**

For the first iteration of the web platform, a  paper prototyping method was used. Paper prototyping has the advantage of being very quick, tactile and collaborative, while still pushing the team to make design and functionality decisions. It focused the team away from small details, and forced the group to produce a rough interface very quickly without the distraction or barrier of slower programming or graphic design. Desired methods and key system requirements were very useful products of the process. The measurements were taken around a smart phone and used as the canvas size in order to simulate as close to the user experience as possible, assuming most users will use the web application via their smartphone.

*Figure 3: Initial Paper Prototype* 

<p align="center"><img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/prototype1.png" alt="prototype1" width = 75% /></p>


The paper prototype was created in such a way that with manual manipulation, the paper ‘screens’ could be animated to simulate user interaction. See video here:

[VIDEO: Bubble Prototype in Workshop](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/prototype-video.mp4)

At this very early and relatively uninvested stage of the design process, user evaluation insights were gathered by simulating the paper prototype and recording how participants interacted with the web application. This was in line with the agile development philosophy as it required the team to be unattached to features or design ideas ready for rethinking in the next sprint.

**Processing Prototype**

Following the paper prototype, a digital version was created in processing. To again reduce invested time and allow the team to work through design iterations more quickly, the paper prototype ‘screens’ were updated by hand, photographed and then linked together using processing to simulate the UI. This stage was useful to formalise the design aspects chosen to bring forward from the paper prototype and simulate them in a more realistic immediate way compared to the paper prototype.

While the digital format of the processing prototype should lend itself to widespread sharing of the prototype to gather further user evaluation, downloading and running the processing development environment was a significant restriction on the number of participants tested who are not technical. Moreover, as the team members were not yet as familiar with Processing, images of the sketches were simply uploaded and navigated between them, as opposed to remaking the designs by programming the shapes and text. Ideally we should have used methods that could be shared with a more realistic non-technical audience, Marvel App for example.

**Paper Prototyping 2.0**

With a clearer idea of how was desired for the application to work, a decision was made to return to the prototyping stage, this time solely based on design. Each screen was re-designed in Pages (Apple) to make the application seem less like a sketch, using a colour scheme and softer shapes in order to improve the UI. Pages was used as it was a format the team member was comfortable designing in, despite it not being a web-specific formatting program. Additionally, it allows collaboration on the same document.

*Figure 4: Final Paper Prototype*
<p align="center"><img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/prototype2.png" alt="prototype2" width = 80% /></p>

**Further graphic UI iteration**

With a better idea of the appearance of the application, the translation into Processing began. This time, rather than simply uploading the images, the design was created from scratch; drawing shapes for the would-be buttons, importing the image of our logo, and inputting relevant text. This Processing stage was in order for the team to familiarise themselves with the key design features - the title, logo, key buttons, and colour scheme. Once feeling confident with the static Processing product, progression began into p5.js. Fortunately, the transition from Processing to p5.js was simple enough to sustain the majority of the code, without having to modify too much. Once the static design was up and running in p5.js, the work on the final product began.


The first main UI change made in p5.js was formatting. At the prototype and Processing design stages only mobile use was considered. However, when it came to programming the Web app in p5.js, it was acknowledged that the web page should be responsive, therefore adaptable per device. In order to achieve this responsive feature, the canvas was drawn according to the size of the screen, and a resize method was created for usage across all the pages:

    function setup() { 
    createCanvas(windowWidth, windowHeight);

    function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    }

This significantly improved the UI experience; rather than having a restrictive, static design, something more accessible on a greater variety of devices was provided.

Further improvements to the design using p5.js included making images more dynamic and animated, and enabling the pages to interact with one another through the use of buttons.

**Final product:**

*Figure 5: Mobile-view stills*
<p align="center">
<img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/mobile1.png" width = 30% >        <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/mobile2.png" width = 30% >        <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/mobile3.png" width = 30% >
  </p>

[VIDEO: Bubble in action, Mobile-View](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/mobile-video.mp4)


*Figure 6: Desktop-view stills*

<p align="center">
<img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/desktop1.png" width = 40% >       <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/desktop2.png" width = 40% >
</p>

[VIDEO: Bubble in action, Desktop-View](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/desktop-video.mp4)

Following the completion of the web app, matching the design elements in both the desktop app and on the M5 Stack became possible. For consistency of UI experience, it was ensured that the same colour scheme and ease of navigation were kept consistent across all platforms. A more detailed discussion of design changes can be found in the [Sprint Development Process](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Implementation/System_Implementation.md#sprint-development-process), in Section 2 of the report.

Desktop app:

*Figure 7: First Model - No controlP5*

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/DesktopBasic.png" alt="firstm5model" width=50%/>
</p>

*Figure 8: Developing Model - Imported controlP5*

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/DesktopImproved.png" alt="firstm5model" width=50%/>
</p>


*Figure 9: Final Model*

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/DesktopFinal.png" alt="firstm5model" width=50%/>
</p>



M5Stack:

*Figure 10: First Model*

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/M5First.png" alt="firstm5model" width=40%/>
</p>


*Figure 11: Final Model*

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/M5Final.png" alt="firstm5model" width=50%/>
</p>

## Communication protocols in use

Communication on all platforms is achieved via MQTT websockets. All required communication between the three different platforms contains very little data - many communications or commands are simply calls for another platform to execute a task. Therefore MQTT was chosen as an adequate mechanism to transmit “calls” between the prototype platforms.  

Where a small amount of data is required within the command, for example the “run bath” command from the web application that needs to contain the bath settings, JSON files were chosen to carry the data fields. Before transmission, the web application converts the user’s chosen bath settings into a JSON file with 4 simple fields - bathID (int), temperature (int), depth (String) and bubbles (boolean). The IoT platform (M5Stack) then reads the JSON file and applies the settings to the new bath. Meanwhile, the desktop application also receives the run command from the web application and stores the data anonymously and persistently for analysis to later inform business strategy.

*Figure 12: Communication Protocol Example*

<p align="center">
<img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/commProtocol.png" width = 50%>
</p>

HiveMQ was the chosen MQTT broker to manage and monitor communications due to its simple interface and familiarity having used it in previous work. In the future, as communication likely becomes more complex and each transmission is likely to contain more data, a more sophisticated communication mechanism may be more efficient. Additionally, this method is not currently a private communication mechanism. Therefore once the project is developed, further and real user data begins to be communicated, security and data privacy will have to be significantly considered.

#### Communication examples - sequence diagrams

*Figure 13: Communication Sequence 1 - normal uninterrupted bath run*

  <p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/sequenceDiagram1.png" alt="comm1" width=70%/>
</p>
  

*Figure 14: Communication Sequence 2 - The user interrupted bath run*
  
  <p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/sequenceDiagram2.png" alt="comm2" width=70%/>
</p>

*Figure 15: Communication sequence 3 - Bath run with IoT fault (e.g. mechanical fault, no available bubble bath etc.)*

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/Images/sequenceDiagram3.png" alt="comm3" width=70%/>
</p>

## Details of data persistence mechanisms in use

Data implementation on the desktop application was achieved by storing bath data in JSON object arrays. The arrays contain information of the bath status (Completed, Repair Request, Supplies Request, Bath Interrupted), as well as details of user, time of bath and bath id. Initially, the communication mechanism involved sending simple text files through the MQTT server, and storing them in plain arrays in the desktop app. However, while this was a simple and fast method, it provided no security to prevent external clients accessing our communication channels and either publishing fake bath data or recording real user data. Therefore, a JSON format was chosen, given its compatibility with many web browsers, its fast execution of data and because parsing libraries exist for all devices.



A process of data persistence had to be applied to the architecture to collate bath data, even after the system is turned off. The data will allow for useful business analytics to be extracted. Initially, the database storing user sensitive information and bath information was going to be stored using the MySQL library. This builds a communication path between processing and MySQL. However, this library is not recommended to be used when working with a remote database in a publicly accessible applet since it can be highly insecure. Hence, the bath data was saved in a JSON array, including the bath id, the status and the application tools they used (ie. switching app to Spotify). Every time a new bath is recorded within the system, a new entry to the array containing the information above is added and the database is updated. The bath id is used as a primary key to identify each element of the array.

The M5Stack was used as a tool to report repair and supply requests to the desktop application. For that reason, and due to its very limited memory size, the M5Stack does not store data locally, apart from the bath id. Instead it serves more as a broker for bath running, supplies and technical fault data.

## Details of web technologies in use


**Web App**

As with all websites, the foundational programming languages required for creating the Web application are HTML, CSS and JavaScript. HTML is necessary for running the pages in a browser, CSS for style and JavaScript to make the website responsive. Upon recommendation that it is open-source and artistic, the p5.js library was selected as the primary JavaScript tool.

P5.js was extremely useful due to the plethora of libraries that can be used. In particular, the p5.play, p5.sound, and p5.clickable libraries opened up a significant amount of opportunities to make the web application more exciting, user-friendly, and attractive.

On the p5.js website, each library extension has a link to its own github repository with tutorials and example code. This was very helpful, as they could be easily followed in order to build up the web app. Every library brought some new functionality and the ability to keep the code DRY, clean and fast. For every new and complex feature of the web app, a new library was discovered that could match its demand.

Early on in the web app process, buttons were a key requirement to link the pages together. Originally, the shapes, which would become buttons, were drawn in p5.js. After some Research, the p5.clickable library was imported as a simple way to implement the buttons. Through this, it was discovered that the colour and text of a button could be changed when hovering over or pressing on a button.

Moreover, whilst static images looked pleasant, they weren’t sophisticated enough, therefore in sprint four, the notion of animation became a key requisite. In order to implement this, the p5.play library was used. This enables animations to be created through the concept of sprites. These consist of many images being loaded in short succession to create the sense of one moving image; this was particularly useful for the bath selection, bath loading and timer pages.

**Desktop App**

The desktop application used the Processing library, controlP5, written by Andreas Schlegel. This library is extremely powerful when building graphical user interfaces, on top of the Processing sketches. The ability to create listboxes, sliders and buttons added a strong aesthetic aspect to the plain interface provided by normal sketches. Additionally, this library is useful to handle events from the desktop application user. The task of dealing with the users inputs was greatly simplified when pressing buttons and selecting options (see figure). The desktop app also used the MQTT library to simplify the process of connecting with HiveMQ (the chosen broker to communicate between the three platforms).


---

#### [Next Section - Project Implementation](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Implementation/System_Implementation.md)
[Return to README](https://github.com/jupozuelo/Software-Engineering/blob/master/README.md)
