# Section 2: System Implementation 

This section will outline the steps we took to implement the chosen design from the prior [section](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Design/System_Design.md). The initial section discusses the iterative “sprint” development process used to build a minimum viable product that satisfies the user stories . The final sections deal with the methods used to evaluate the implementation, and the social and ethical implications of the project. 

 > ### Contents

 > * [Sprint Development Process](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Implementation/System_Implementation.md#sprint-development-process)
 > * [Evaluation of platform designs](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Implementation/System_Implementation.md#evaluation-of-platform-designs)
 > * [Social and Ethical Implications](https://github.com/jupozuelo/Software-Engineering/blob/master/System_Implementation/System_Implementation.md#social-and-ethical-implications-of-the-project)
 
 
## Sprint Development Process

### Sprint 1

#### Web App
##### Analysis 
By assessing the users needs, it was decided to start the development of the Web Application in p5.js, which implied assessing the elements of the JavaScript library, how they could be applied to the project and understanding the basics of the tool. 
##### Design
In the beginning, a simple outline of the pages was decided upon. This also included a colour scheme which would also be applied to the other platforms. A logo for the product was designed by the team and used predominantly in the Web App. It is well known that logos need to ensure an effective communication and engage the target customer. In the last years, research of shape symbolism in the field of marketing helped with better understanding of the customer behaviour influenced by design elements. Results showed that a logo involving rounder shapes can contribute to a rise in customers' emotional engagement, showing a higher frequency of positive emotions. Therefore, the Bubble bath logo consists of soft, curvy lines to induce the feeling of calmness to the user, as seen in Figure 1. The bubbles of the bath are drawn with speed and spontaneity, inducing the idea of joy and giving a burst of positive energy to the user. (Refer to: <https://link.springer.com/article/10.1057/bm.2014.29>)

<img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Implementation/Images/sprint1.png" alt="banner"/>

*Figure 1: A banner demonstrating the themes of the Bubble logo and branding.*

##### Code 
In order to explore the functionality of p5.js, a simple skeleton was produced for each page of the application. The code was simple and it aided understanding of the basic principles. 
##### Test
Once this simple prototype was simple tested with the team, it allowed focus on more experimental and elaborate parts with p5.js. 



#### Desktop App 
The main focus of the initial sprint was familiarising with the tools used to build the desktop application. The workshops provided the platform to implement examples on Processing and learn the language’s syntax and usage. This sprint also served as an introduction to MQTT for communication between devices and platforms. In particular, the fast food workshop and the processing and MQTT workshops built the foundation to set the communication and API architecture of the application.

#### M5Stack 
The first sprint of  the IoT platform was focused on manipulating prior work and examples that achieved very basic internet based communication via a MQTT websocket broker. M5Stack implementation required the M5Stack.h, pubSubClient and U8g2 libraries within the Arduino IDE to upload scripts to the M5Stack and make use of its display, sensors and buttons. The starting M5Stack example posted scheduled messages to a topic, and subscribed to the same messages. Both published and subscribed messages were displayed on screen. Without any consideration for UI design, the task was simply to build MQTT websocket integration into the M5Stack, and purpose its buttons to display individual messages on the HiveMQ broker - see Figure 2. This required configuring the M5Stack to connect to a variety of wifi networks, and ensuring that the platform was able to publish messages and subscribe to messages on a MQTT topic. Initially three topics were set up for publishing and subscribing, and the messages to post were simple strings. Each topic was managed by a button on the M5Stack, as seen in Figure 2. Challenges were faced in understanding the characteristics of MAC addresses - by connecting the M5Stack with a copied MAC address of the laptop operating the MQTT websocket, connection was lost, misleading the team to believe communication was not working. A unique MAC address was then used, and the first iteration of the code passed the basic communication tests set. Again these tests were predefined and used regularly to encourage consistently working software in line with the team’ s Agile development philosophy.

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Implementation/Images/M5sprint1.jpg" alt="M5Sprint1" width="500"/>
</p>

*Figure 2: The first sprint of the IoT platform, demonstrating successful MQTT communication instigated by button presses.*

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
A second sprint focused on the UI designs of the interface, aiming to ensure that the user experience was simple to understand while working within the limits of the M5Stack display. In line with the design of the web application, colour schemes were chosen and fonts were experimented with. The use of custom fonts caused problems to arise since font files have to be provided to the M5Stack via an external microSD card. For this prototyping phase of development, custom fonts were mothballed in favour of a more simple design. Simple “bubble” branding was created using M5Stack display tools, with labels for each of the three buttons to aid user understanding. The result can be seen in Figure 3 (Sprint 3). The new code was tested against the original communication tests, and upon passing, the new interface was tested on three participants with no prior knowledge of M5Stacks. Ideally more participants could have been subject to the test, but the implications of the COVID-19 crisis meant that only isolating household members could be tested. With a very brief description of the service bubble would deliver, and where the M5Stack would sit in the bathroom, all participants understood the UI clearly due to the highly simple interface and labels.

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
A third and final sprint was performed for the IoT platform - to alter the communication protocol to enable JSON messages to be received, interpreted and translated into variables. This was a relatively late and major change to our communication strategy, however true to the benefits of  agile development, it resulted in significant functionality improvements. These JSON variables would be used to determine the characteristics of the bath, which the user entered into the web application. Since the JSON files were simply posted into an MQTT topic, it was simply a case of adding JSON parsing functionality so that the message could be decoded and assigned to variables. The deconstructed JSON variables were then displayed on the M5Stack to simulate the bath running process, as seen in Figure 3 (right). The communication tests were slightly altered at this stage to add in JSON functionality. The final code satisfied this new standard.

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Implementation/Images/M5sprint3.jpg" alt="M5Sprint3"/>
</p>

*Figure 3: The final sprint of the IoT platform showing idle (left) and running (right) states. Buttons can be used to call individual platform features, and to interupt the running process if an emergency stop is required.*

### Sprint 4

#### Web App
##### Analysis 
During this sprint, it was decided to improve the dynamics of the Web App. Even though the images on the Homepage, Loading Page for example proved a satisfactory design level, the team desired to replace these static images with animations/GIFs. 
##### Code 
In order to achieve this level of functionality, the p5.play library was selected since it provides a Sprite class to control the comportment of visual objects in 2D Space and features such as animation support helpers for mouse and keyboard events (for Documentation, see the following link: <https://molleindustria.github.io/p5.play/>).Examples of the GIFs used can be found on the Web App page where it is searching for the requested bath or on the page where the timer is shown. They were thought in the previous mentioned cases as a way of displaying the loading of the page and they prevent the user from thinking that the application has frozen, as it might have happened if the static images were kept. Figure 4 shows an example of these interactions.

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Implementation/Images/sprint4.gif" alt="M5Sprint3" width="300"/>
</p>

*Figure 4: The sprint 4 version of the web app, complete with added aninmation to give greater reactivity for enhanced user experience.*

##### Design 
The design process was straightforward considering that the logo concept and production were achieved previously. 
##### Test 
First off, a simple test was conducted only for the Timer page in order to assess the working, performance and how it would be perceived by the user. It was demonstrated the idea is achievable and does not exhibit any lagging to the other elements of the page. Hence, this encouraged the team to implement it for the whole pages in different forms. 
##### Deploy
After all the pages were enhanced with animations, the Web App was tested during the focus group meetings.

#### Desktop App 
The final sprint considered integrating the communication system between the three platforms. Even towards the end of the development, the team ensured to follow the agile principle of embracing change and finding the best solution to satisfy the clients needs. While the process had been designed and the communication protocol steps had been created, the team needed to ensure there were no runtime errors. For that reason, testing was performed. The testing involved recreating the whole desktop’s process of receiving, analyzing and storing data from a message. Using assertions also validated the performance of the desktop. No user testing was conducted for the desktop application as the platform will only be used by the organization, and not the clients.

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

*Figure 5: The Agile Philosophy*

<p align="center">
  <img src="https://github.com/jupozuelo/Software-Engineering/blob/master/System_Implementation/Images/agile.png" alt="Agile" width=50%/>
</p>
 
### M5Stack

The design of the IoT platform was kept very minimal for this prototyping phase of development. Despite this, the design was still managed using a series of sprints and agile development methods that helped to easily quantity the work achieved and the progress desired. User testing was the desired primary method of design evaluation, to check if people unfamiliar with the service could operate the UI and achieve all the necessary methods without instruction. Unfortunately the COVID-19 crisis significantly restricted our ability to gain user evaluation in large numbers. Only family members that were isolating with the team were available as participants. The simplicity of the interface resulted in unanimous understanding of platform features and functions. Additionally, the key requirements of the IoT platform were compared to the features of the final iteration for evaluation. The platform was able to generate an ‘output’ of bath settings received from the web application (the display of chosen settings on the M5Stack screen), able to generate fault indicators (random fault messages in this prototyping phase) to send to the desktop application, and allow the user to instantaneously send a command to the desktop application to request a restock of bubble bath. The key requirements of the platform were therefore met.

### Desktop

The design of the desktop app was focused, from the start, on producing a valuable prototype to show the investors when pitching. The team decided to restrict the access to the desktop app to the development team of Bubble, hence no client of the company will have access to the management dashboard, at least for the initial months. The progress of the design was measured by the amount of working code. However, even these working bits were not exempt from change to find the best possible solution for the prototype. Setting initial design meetings to focus the development of the platform ensured the team explicitly articulated APIs between objects and clearly defined sets of methods and parameters for these. These facilitated work split but and on top of everything, it ensured constant testing of individual components. 

On a more technical side, a disadvantage of using MQTT server as the communication tool between the M5Stack and the Desktop app is that topic subscriptions in the server are public to anyone. Hence, someone could be reporting “fake” repairs and usage or skimming real communications. For that reason, the team had to investigate other file formats rather than text files, and chose the JSON format. Overall, the provided code for the desktop produces a simple prototype that appropriately exhibits all the methods that the fully developed product aims to have in the future. 

### Web app

The detailed effort put into the Web app from the early stages of design and production crucially helped the development of this platform. As this is the platform which the user interacts with, it was ensured from the beginning that there would be a lot of attention to detail. This is highlighted by the back-and-forth prototyping discussed in the ‘Evolution of UI wireframes’ segment. Such effort meant that the COVID-19 crisis did not interfere with the development of this platform from an aesthetic perspective. The two group members tasked with this were able to work on their allocated pages in their own time, checking in at the end of each day to mark progression. Indeed during the fifth sprint, the merging of the pages took place. As such, the team is very satisfied with the completion of this platform and how it satisfies the platform requirements set out during the design phase.

Unfortunately, however, as with the Desktop app, COVID-19 prohibited the ability for user evaluation. This meant that some key issues weren’t brought to light which otherwise would have been considered, such as confirmation pop ups to ensure the correct bath was selected.

### Heauristic evaluation tables

A heuristic evaluation of each platform was chosen as a standardised and relatively quantifiable evaluation method:

|             | Visibility of system status                                                                                                                                                | Match between the system and the real world                                                                                | User control and freedom                                                                                                                                                                                  | Consistency and standards                                                                                                  | Error prevention                                                                                                                                      |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Web App     | There are a number of features on the web app which keep the user notified about the system status, as can be seen on the ‘bath loading’, ‘bath found’, and ‘timer’ pages. | The web app uses the language of the user - simple, readable phrases which are easy to understand                          | On the timer page there are buttons which allow the user to go back and change the settings or cancel the bath.                                                                                           | N/A - user doesn’t need to type anything in at any point - simple use of clicking buttons so no room for misinterpretation | Would need to add some verification, such as a confirmation pop up, to ensure the user selected the correct bath                                      |
| Desktop App | The desktop app includes slide listorders to visualize the status of each bath, and the analytics data by different time frames (weekly, monthly, annually)                | Very simple dashboard settings; all of the information can be easily read.                                                 | The user can simply change from bath status to expand a specific bath’s information                                                                                                                       | The incoming bathroom information is stored in JSON Arrays and saved locally on the computer in use.                       | The test sketch runs several tests and assertions to ensure the correct event handling and data processing of the app.                                |
| M5Stack     | Bath running status is displayed clearly on the display, however fault or connectivity statuses are not always visible. This information is always useful for the user     | All communications are conveyed in a familiar manner to non-technical users. Tests showed no misinterpretation of methods. | There is relatively little freedom in user control due to the limited functionality of the IoT platform. Emergency stops have been included to allow users to cancel baths as soon as they are commenced. | User actions are clear and definitive. There is no inconsistency in the interface that would confuse users.                | Functionality should be added to rescind/ undo repair and supply requests. This could be achieved using the web app to keep the IoT interface simple. |

|             | Recognition rather than recall                                                                                                                                                                                                                                        | Flexibility and efficiency of use                                                                                                             | Aesthetic and minimalist design                                                                                                    | Help users recognise, diagnose and recover from errors                                                                                                                                                                                                                                           | Help and documentation                                                                                                                                                                                                                    |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Web App     | This requirement was not satisfied completely since the user does not get a confirmation of the selected options for the bath after pressing the GO button, but instead it just starts running the bath without double-checking if the user is happy with the choice. | Responsive aspect of web pages (using method windowResized) has meant that the website can be viewed on whatever device the user chooses      | Very clear layout displaying only the specific features required by the user.                                                      | As highlighted in User Control, there are buttons on the timer page whereby the user can go back and change the settings or even cancel the bath.                                                                                                                                                | Documentation should not be necessary for the web app as it is focused on the user’ s tasks and the consumer is walked through a list of explicit steps when navigating the app.                                                          |
| Desktop App | The desktop does not implement any options to change user data. Hence, this criteria does not apply. However, it will be considered in future stages of the design.                                                                                                   | The app opens at a size of (900,700) therefore the criteria of flexibility is not satisfied since opening it on a phone would cause problems. | The controlp5 added an important aesthetic aspect to the app. Yet, the graphics are low quality. The layout is clear and simple.   | This needs to be added to the current design as it is not present. In fact, there is some trouble with the “cancel” button.                                                                                                                                                                      | It was decided that a help and documentation section was not going to be included for the app (most developers will have built the platforms themselves). Yet, it will definitely need to be included later as new employers join Bubble. |
| M5Stack     | There is no data or parameter required for user recall in the platform - all parameters are displayed clearly on screen.                                                                                                                                              | Given the M5Stack device, flexibility in the platform created is limited strictly to M5Stack  features and functionality.                     | The prototype interface is highly minimalistic and functional. All M5Stack buttons are used, maximising the simplicity of control. | The platform design could be improved to give the user more information regarding any faults that the system has. Small status indicators would give satisfactory information. Ideally the platform would also have an indication of the progress that Bubble is making to fix technical issues. | The simplicity of the interface causes no documentation to be necessary. As the interface is developed and features are added, documentation will be required to explain symbols and any complicated functionality.                       |

## Social and Ethical implications of the project

Product architecture and business development were guided by the Association for Computing Machinery (ACM) Code of Ethics and Professional Conduct. They provide a general framework to ensure operations and products are aimed towards a benefit to society and also outline professional and leadership responsibilities.

### User evaluation and system trials during further product development and trials

In the future, as the system is developed and more significant user evaluation is required, including the possibility of system trials in participant’s homes, ethical and social responsibility will become more crucial. For these phases of development, consent forms and comprehensive participant information sheets must be made in order to achieve complete transparency and understanding with the trial users.

### Adoption, installation and long-term system function

In order to install the system, a technician/ plumber will need to access peoples homes and permission to change plumbing installations, namely the tap valves, which will need to be connected to the IoT device. Furthermore, if the customer has any difficulties or faults with their product, continued access must be granted for technicians to attend and repair systems. This process comes with many ethical implications and complications. Primarily, the team would need to ensure the credibility and trustworthiness of the technicians to prevent incidents occurring during home visits. The team would also need to ensure that they are adequately qualified to advise and make safe choices about the product’s installation. All final products will be IP68 rated to ensure “water resistance against long periods of immersion” (www.plumbworld.co.uk/bathroom-zones-ip-rating-infopage), however the positioning of Bubble products in the bathroom also require significant knowledge and understanding. For example, the voltage of the final products will determine the minimum distance away from the bath itself where they can be placed. Any components that must be placed within the bath structure itself, such as the tap valves, must have a maximum voltage of 12V. Bubble technicians will have to be trained and experienced with these regulations to ensure ethical and legal standards are met.

For long term operation, the bathroom products should be equipped with features that safeguard against electrical faults before any damage to their environment can be caused. Significant safety factors need to be included in the electrical design of the product because of damage to customer’s homes and potential threat to human life that electrical faults can cause. 

### Disruption of bath specific plumbing/ installation industry

While the automation and incorporation of ‘smart’ technologies is generally considered a modern positive trend, it often reduces reliance on traditional industry practices which likely employ more people than the new more automated solution. This is likely to be the case in bubble’s adoption too - while it is true that bubble would employ and train existing industry professionals to service our products, increased reliability and improved self-diagnostic features of our products may also cause a reduction of industry professional call outs in the longer term. If bubble were to be adopted on a large scale, it may have detrimental effects on employment in the industry, which is certainly a negative ethical factor of the project we are trying to achieve.

### Data Security, Privacy & User Anonymity

Using publicly viewable and downloadable software from Github leaves our systems vulnerable to external interference and data theft. By giving access to the details of the system architecture to anyone on the internet makes the task of interrupting or monitoring the processes much easier. After the prototyping stage, significant and private changes to Bubble’s data persistence systems will have to be made to ensure the security of Bubble user data.

In the long term, user data would be split; one database contains user habits/ bath running analytics, and another contains personal user data such as their name and address. Bathing or bathroom activity is an innately private activity, so users may be naturally against the introduction of a ‘middleman’ or data recording service in the bathroom. The business development benefit that the team could gain from user behavior analytics is not reduced by user anonymity, and therefore will be implemented for the user’s privacy. This anonymity is increasingly important for customers in an increasingly data privacy aware society. Personal details, payments methods and other sensitive details will be protected with modern and adequate measures.

### Environmental impact

While environmental impact once installed should be relatively minimal, there would be environmental costs in the production and transport of our products. As a team committed to sustainability and green practice, measures to offset environmental impact despite detriment to profits would be explored.

### Mechanical safety features

Due to the nature of Bubble services, there is an ethical responsibility to allow users to manually stop bath runs with a mechanical ‘emergency stop’ feature. In case of electrical malfunction, this is an important safety feature to give the customer backup in case of unexpected or dangerous system behaviour. While the team does not foresee this feature being used in normal operation, it will encourage customers to feel safe and assured using the products and provide a mechanism to prevent or limit damage should unsafe system operation occur.

---

#### [Next Section - Project Evaluation](https://github.com/jupozuelo/Software-Engineering/blob/master/Project_Evaluation/Project_Evaluation.md)
[Return to README](https://github.com/jupozuelo/Software-Engineering/blob/master/README.md)
