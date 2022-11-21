# THE CRATER

https://nathanaelblackbourn.github.io/the-crater/

JavaScript grundkurs.
Laboration 1.
Individuellt arbete.

JavaScript basics course.
Exercise 1.
Individual task.

*Brief*
'I den här laborationen skall du skapa en textbaserad interaktiv upplevelse där användaren kan göra förändringar i en värld.'

'In this exercise you will created a text-based interactive experience where the user can make changes in a world.'


# Solution
*Plot*
2045, Gertrud Rask Land, Greenland.

A huge explosion occurs at a mining operation within the arctic circle. The cause of the explosion is unknown. The player and their team of three scientists are sent to investigate.

-----

En stor explosion händer på gruvingsoperation inom polcirkeln. Anledningen för explosionen är oklar. Spelaren och sitt team får uppdrag att investigera.


*Gameplay*
The Crater is a text-based adventure game. It is played by entering predetermined commands into a text field. Each scene is described in a text box on the screen and available commands are communicated to the player in the text. The game is both winnable and losable. 

With each new scene time progresses one game day.

The number of moves the player can make is limited as the temperture ticks down with each new day and as soon as it hits the floor at minus fifty-five the player loses.

Food is also a limited resource for the player which ticks down each game day. Food, however, can be restored at one scene in the game.

The game is won by collected two items and taking them to the game's central scene.

-----

'The Crater' är ett textbaserat äventyr spel. Det spelas genom att skriva kommandon i inmatningsfält. Varje scene beskrivs i text på skärmen och möjliga kommandon kommuniceras till spelaren i texten. Man kan både vinna och förlora spelet.

Vid varje ny scene avancerar tid framåt en speldag.

Numret drag spelaren kan göra är begränsad som temperaturen stiger ner med varje ny dag, så snart den når minus femtio-fem grader förlorar spelaren.

Mat är också en begränsad resurs för spelaren vilken stiger ner varje speldag. Mat, dock, kan fyllas på vid en scene i spelet.

Spelet vinnas genom at hämta två objekt och ta med dem till spelets centrala scene.


*Avgränsningar/limitations*
Should I be able to continue with this project indefinitely there are a lot of ideas and fixes that I would like to implement but have been needed to consciously rule out. Realising them is well within my ability but the time it would take would carry me past the hand-in deadline. They include:

- Conditional compilation of text for each scene. I would put together each scene's text according to which parts of the game have already been explored by the player. Options players have of directions explore should also be conditional according to where they have been.
- More in depth writing. The joy of a text based game lies in the richness of the descriptions and the creativity expressed in the world building. I wanted to create time to focus on code so I have kept writing short and in most cases just used the first draft.
- An element of chance to the game at injury scenes. Probably a 50% chanc of injury, the following scene would then be decided according to whether an injury had occured.
- A more developed inventory element in gameplay. I would like the team to enter the crater with a number of piece of equipment that can help or be lost at various scenes. For example, an icepick that give bonuses when fighting a bear or breaking the pilot out of the ice block and can be lost during a bear fight.
- The text could be structured in order to make the player investigate each scene more to find the scene's keywords and possible actions. Certain options could be displayed only in team members thoughts, forcing the player to talk to each tea member before proceeding and adding depth.
- Incentive to keep team members alive. As it stands, the is no reason why a player shouldn't leave their team members behind to die apart from empathy. Hiding keywords in team member dialogue would incentivise the player to keep them alive. The player should also be more vunerable to injury with fewer or no team members to help them during injury scenes. As it stands the player cannot get injured at all.