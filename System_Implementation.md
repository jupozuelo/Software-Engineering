# System Implementation 
## Sprint Development Process

### Sprint 1

#### Web App
##### Analysis 
By assessing the users needs, it was decided to start the development of the Web Application in p5.js, which implied assessing the elements of the JavaScript library, how they could be applied to the project and understanding the basics of the tool. 
##### Design
In the beginning, a simple outline of the pages was decided upon. This also included a colour scheme which would also be applied to the other platforms. A logo for the product was designed by the team and used predominantly in the Web App. It is well known that logos need to ensure an effective communication and engage the target customer. In the last years, research of shape symbolism in the field of marketing helped with better understanding of the customer behaviour influenced by design elements. Results showed that a logo involving rounder shapes can contribute to a rise in customers' emotional engagement, showing a higher frequency of positive emotions. Therefore, the Bubble bath logo consists of soft, curvy lines to induce the feeling of calmness to the user. The bubbles of the bath are drawn with speed and spontaneity, inducing the idea of joy and giving a burst of positive energy to the user. (Refer to: <https://link.springer.com/article/10.1057/bm.2014.29>)
##### Code 
In order to explore the functionality of p5.js, a simple skeleton was produced for each page of the application. The code was simple and it aided understanding of the basic principles. 
##### Test
Once the simple prototype was tested, it allowed focusing on more experimental parts with p5.js. 

BUBBLES BANNNER PIIIIIIIIC

#### Desktop App 
The main focus of the initial sprint was familiarising with the tools used to build the desktop application. The workshops provided the platform to implement examples on Processing and learn the language’s syntax and usage. This sprint also served as an introduction to MQTT for communication between devices and platforms. In particular, the fast food workshop and the processing and MQTT workshops built the foundation to set the communication and API architecture of the application.

#### M5Stack 
The first sprint of  the IoT platform was focused on manipulating prior work and examples that achieved very basic internet based communication via a MQTT websocket broker. M5Stack implementation required the M5Stack.h, pubSubClient and U8g2 libraries within the Arduino IDE to upload scripts to the M5Stack and make use of its display, sensors and buttons. The starting M5Stack example posted scheduled messages to a topic, and subscribed to the same messages. Both published and subscribed messages were displayed on screen. Without any consideration for UI design, the task was simply to build MQTT websocket integration into the M5Stack, and purpose its buttons to display individual messages on the HiveMQ broker. This required configuring the M5Stack to connect to a variety of wifi networks, and ensuring that the platform was able to publish messages and subscribe to messages on a MQTT topic. Initially three topics were set up for publishing and subscribing, and the messages to post were simple strings. Challenges were faced in understanding the characteristics of MAC addresses - by connecting the M5Stack with a copied MAC address of the laptop operating the MQTT websocket, connection was lost, misleading the team to believe communication was not working. A unique MAC address was then used, and the first iteration of the code passed the basic communication tests set. Again these tests were predefined and used regularly to encourage consistently working software in line with the team’ s Agile development philosophy.

M5STACK PIIIIIIIC TOOOOOO ADDDDDDDDDDDDDD

### Sprint 2

#### Web App
##### Analysis
This stage was specifically focused on creating a page where the user could implement the desired settings for running the bath. 
##### Design
The design element here was not dominant. The focus was more on observing how the user would interact with the platform and if the functionality was satisfactory. Hence, basic buttons and a temperature slider in HTML were implemented. 
##### Code
At this phase, only HTML elements combined with JavaScript were developed for the buttons concerning the depth, temperature and bubbles options. 
##### Test 
Once the basic design of the bath running settings proved to be satisfactory, a more visual approach was decided to be taken. 

#### Desktop App 
The second sprint truly demonstrated the power of the numerous libraries of Processing. The versatility of Processing as a development environment was depicted with the numerous libraries that can be included in the sketches. Furthermore, the different APIs needed from the desktop were designed. This covered receiving, storing and updating the bath data coming from the M5 and Web app. Structuring the APIs enabled the setting of clear goals and objectives to complete. Lastly, initial communication testing was performed between the desktop and M5. This included sending simple text files to read and receive on both platforms.

#### M5Stack App
A second sprint focused on the UI designs of the interface, aiming to ensure that the user experience was simple to understand while working within the limits of the M5Stack display. In line with the design of the web application, colour schemes were chosen and fonts were experimented with. The use of custom fonts caused problems to arise since font files have to be provided to the M5Stack via an external microSD card. For this prototyping phase of development, custom fonts were mothballed in favour of a more simple design. Simple “bubble” branding was created using M5Stack display tools, with labels for each of the three buttons to aid user understanding. The new code was tested against the original communication tests, and upon passing, the new interface was tested on three participants with no prior knowledge of M5Stacks. Ideally more participants could have been subject to the test, but the implications of the COVID-19 crisis meant that only isolating household members could be tested. With a very brief description of the service bubble would deliver, and where the M5Stack would sit in the bathroom, all participants understood the UI clearly due to the highly simple interface and labels.

### Sprint 3 

#### Web App 
##### Analysis
After tests during the group meetings on the functionality of the minimum viable product (MVP), it was decided upon the improvement of the Web App visuals.
##### Code
The p5.js Clickable library has been integrated (for Documentation, see the following link: <https://github.com/Lartu/p5.clickable>). This specific library favors generating buttons which can present event-based behaviour. This was a crucial request for the application, since it was desired for the bath settings to be saved as json objects when clicking the buttons, which will further be saved as a JSON file. The aforementioned assured the smooth communication with the M5Stack and the Desktop App through the MQTT broker. Last but not least, the Clickable library offered an effortless transition between the Web App pages, a new page being invoked when a button, for example the GO! Button, would be clicked. 
##### Design 
Similar principles for when designing the logo have been applied when creating the buttons. Hence, simple rounder line segments have been used when constructing the buttons since they are preferred by customers over the angular shapes, which have been proved to generate a feeling of fear. The temperature slider was styled using a .css file and it was aimed to increase the aesthetic and feeling of composure by creating it with round lines instead of corners. Instead of simple buttons for the depth of the bath, they were changed to interactive images which would record the selected option.
##### Test 
In the beginning of this stage, issues were recorded related to the ability of linking the pages between each other in the Web App when the buttons were clicked, since the library used would not accommodate this specific feature . After extensive research, a method has been discovered and the problem was fixed. 
##### Deploy 
The system was verified and validated during the focus group meetings on Zoom.

#### Desktop App 
Following the sprint that constructed the communication protocols to connect the M5 and the desktop, a course of action to establish a data persistence process had to be devised. The third sprint involved agile design philosophy to try different options. For example, using simple text files recorded in arrays in the desktop was explored, however, it was quickly discovered that this provided no security and no reliability since external HiveQM users could join the topic and send messages. It was then realized that using a JSON format solved these issues and, in addition, provided easy parsing and integration with the other platforms (Web and M5).

#### M5Stack 
A third and final sprint was performed for the IoT platform - to alter the communication protocol to enable JSON messages to be received, interpreted and translated into variables. This was a relatively late and major change to our communication strategy, however true to the benefits of  agile development, it resulted in significant functionality improvements. These JSON variables would be used to determine the characteristics of the bath, which the user entered into the web application. Since the JSON files were simply posted into an MQTT topic, it was simply a case of adding JSON parsing functionality so that the message could be decoded and assigned to variables. The communication tests were slightly altered at this stage to add in JSON functionality. The final code satisfied this new standard.

AAAAADDDDDDDDDDDDDDDDDDDDDDDDD PICTURESSSSSS ---- Bubbles ---- Running 

### Sprint 4

#### Web App
##### Analysis 
During this sprint, it was decided to improve the dynamics of the Web App. Even though the images on the Homepage, Loading Page for example proved a satisfactory design level, the team desired to replace these static images with animations/GIFs. 
##### Code 
In order to achieve this level of functionality, the p5.play library was selected since it provides a Sprite class to control the comportment of visual objects in 2D Space and features such as animation support helpers for mouse and keyboard events (for Documentation, see the following link: <https://molleindustria.github.io/p5.play/>).Examples of the GIFs used can be found on the Web App page where it is searching for the requested bath or on the page where the timer is shown. They were thought in the previous mentioned cases as a way of displaying the loading of the page and they prevent the user from thinking that the application has frozen, as it might have happened if the static images were kept.
##### Design 
The design process was straightforward considering that the logo concept and production were achieved previously. 
##### Test 
First off, a simple test was conducted only for the Timer page in order to assess the working, performance and how it would be perceived by the user. It was demonstrated the idea is achievable and does not exhibit any lagging to the other elements of the page. Hence, this encouraged the team to implement it for the whole pages in different forms. 
##### Deploy
After all the pages were enhanced with animations, the Web App was tested during the focus group meetings.

#### Desktop App 
The final sprint considered integrating the communication system between the three platforms. Even towards the end of the development, the team ensured to follow the agile principle of embracing change and finding the best solution to satisfy the clients needs. While the process had been designed and the communication protocol steps had been created, the team needed to ensure there were no runtime errors. For that reason, testing was performed. The testing involved recreating the whole desktop’s process of receiving, analyzing and storing data from a message. Using assertions also validated the performance of the desktop. No user testing was conducted for the desktop application as the platform will only be used by the organization, and not the clients.

AAAAAAAAAAAAAADDDDDDDDDDDDDDDDDDDD GIIIIIIIIIIIIIIIIIIIIIIF

### Sprint 5 

#### Web App
##### Analysis 
This last sprint involved merging the Web App Pages, since they were developed by two members of the team. In addition to the prior observation, it was acknowledged the need of a notification for the user when the bath would be ready to use. Therefore, a sound notification was seeked to be sent when the timer was up. Additional functionalities like Spotify and Ambient Lightning were established to be consolidated in the application.
##### Code 
First, the p5.sound library was used to include audio output. (for Documentation, see the following link: <https://p5js.org/reference/#/libraries/p5.sound>). When the timer would reach the end, the user would be notified through a manner similar to an alarm clock. Code was integrated for the platform to be able to link the Spotify account of the user. The merging of the Web Pages implied the creation of a single .css file which would operate for all the Web App pages instead of having two different ones contradicting in style as previously. 
##### Design 
Design decisions were made within the team when the colour scheme and writing styles were discussed again. The same principles as before mentioned were used when constructing the buttons on the final pages and suitable sound in length was chosen. 
##### Test 
After all the final fixes were clarified and resolved, the team performed different tests on the Web App, in order to discover any possible bugs.
##### Deploy 
Favorably, at this particular sprint especially and at previous ones too, it would have been expected to deploy the Web App and allow testing of multiple users which would not take into account the team members. This would have granted the team members better and objective feedback on the progress made and would have brought up particular issues, which are difficult to recognize when assessing the team’ s own work. Due to the unusual circumstances, the testing of the application had to be done within the team.

## Evaluation of Platform Designs 

Following the agile philosophy for the development of this software application, the team decided to use the 12 principle of agile as one of the evaluation tools. The COVID-19 pandemic introduced certain difficulties to follow certain principles, such as ensuring face-to-face communication. However, the team decided to set up five minute meetings daily to list the objectives of the day. In fact, this change of working environment might suggest that, in a post COVID-19 world, the agile principles might need to be adjusted for telecommuting. 
The design of the IoT platform was kept very minimal for this prototyping phase of development. Despite this, the design was still managed using a series of sprints and agile development methods that helped to easily quantity the work achieved and the progress desired. User testing was the desired primary method of design evaluation, to check if people unfamiliar with the service could operate the UI and achieve all the necessary methods without instruction. Unfortunately the COVID-19 crisis significantly restricted our ability to gain user evaluation in large numbers. Only family members that were isolating with the team were available as participants. The simplicity of the interface resulted in unanimous understanding of platform features and functions. Additionally, the key requirements of the IoT platform were compared to the features of the final iteration for evaluation. The platform was able to generate an ‘output’ of bath settings received from the web application (the display of chosen settings on the M5Stack screen), able to generate fault indicators (random fault messages in this prototyping phase) to send to the desktop application, and allow the user to instantaneously send a command to the desktop application to request a restock of bubble bath. The key requirements of the platform were therefore met.

The design of the desktop app was focused, from the start, on producing a valuable prototype to show the investors when pitching. The team decided to restrict the access to the desktop app to the development team of Bubble, hence no client of the company will have access to the management dashboard, at least for the initial months. The progress of the design was measured by the amount of working code. However, even these working bits were not exempt from change to find the best possible solution for the prototype. Setting initial design meetings to focus the development of the platform ensured the team explicitly articulated APIs between objects and clearly defined sets of methods and parameters for these. These facilitated work split but and on top of everything, it ensured constant testing of individual components. 

On a more technical side, a disadvantage of using MQTT server as the communication tool between the M5Stack and the Desktop app is that topic subscriptions in the server are public to anyone. Hence, someone could be reporting “fake” repairs and usage or skimming real communications. For that reason, the team had to investigate other file formats rather than text files, and chose the JSON format. Overall, the provided code for the desktop produces a simple prototype that appropriately exhibits all the methods that the fully developed product aims to have in the future. 

The detailed effort put into the Web app from the early stages of design and production crucially helped the development of this platform. As this is the platform which the user interacts with, it was ensured from the beginning that there would be a lot of attention to detail. This is highlighted by the back-and-forth prototyping discussed in the ‘Evolution of UI wireframes’ segment. Such effort meant that the COVID-19 crisis did not interfere with the development of this platform from an aesthetic perspective. The two group members tasked with this were able to work on their allocated pages in their own time, checking in at the end of each day to mark progression. Indeed during the fifth sprint, the merging of the pages took place. As such, the team is very satisfied with the completion of this platform and how it satisfies the platform requirements set out during the design phase.

Unfortunately, however, as with the Desktop app, COVID-19 prohibited the ability for user evaluation. This meant that some key issues weren’t brought to light which otherwise would have been considered, such as confirmation pop ups to ensure the correct bath was selected.

A heuristic evaluation of each platform was chosen as a standardised and relatively quantifiable evaluation method:












