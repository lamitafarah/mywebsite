This is my personal website showcasing the projects I did throughout my degree.

I prioritized user experience by employing a clean and intuitive design, ensuring that visitors can easily navigate through the website and access information about my degree projects effortlessly.

The website is designed to work seamlessly across various browsers and devices, ensuring a consistent and accessible experience for all users.

It is designed to be viewed in landscape mode.

When in portrait mode on a mobile device, a message kindly prompts users to switch to landscape.

I incorporated a screen preloader into the website to enhance the user experience, providing a visual cue that content is loading, ensuring a smoother transition and reducing the perception of waiting times.

I used a interactive p5js sketch for the background.


I imported a Google Font to enhance the text style, and for the buttons' design, I used Font Awesome icons. 
As I encountered issues with hex codes not working consistently on mobile devices, Font Awesome provided a reliable solution for incorporating icons into my design.

I incorporated email.js into my website to facilitate the seamless sending of enquiry. 


I referenced the W3C Web Accessibility Initiative's (WAI) accessibility principles and standards at https://www.w3.org/WAI/fundamentals/accessibility-principles/ to guide and implement accessibility features in my project. 

Resources I used :

p5js sketch: https://mcclymont.co/learn/perlin-noise
glitch effect: https://codepen.io/kkhenriquez/pen/PGvmjm
rotation text, Developer: Rachel Smith : https://www.sliderrevolution.com/resources/css-text-animation/ 
carousel: https://youtu.be/hfGz5AgHT-E?si=SmbTQbTqYqLI9GAO 
gradient text: https://youtu.be/ANKNNKPJAMI?si=b4YOuAbHvb-3_SxJ
preloader: https://youtu.be/Yf5d_Zx3AaI?si=tudIt1lQgtc0VT-l 

Chat gpt for device rotation:
I started with asking if I could make the website work when the phone is horizontal.
Then I requested to check for the nature of the devise before flipping the website horizontaly.
After few of its answers, I created a div element "turn to landscape" to be shown when the device is in portrait. I had to remove the overflow-y because the user could see "turn to landscape" but could still scroll to the rest of the website. 
 I came up with this prompt  :"first check if the device is a phone. then check if it is in lanscape. if it is not in landscape:1. display #turntolandscape 2.remove the overflow-y from the body. 3. check if the user changed his device orientation to landscape 4. if he did , display the website, add the overflow y again, remove #turntolanscape. if the phone is in landscape from the beginning just display the website. "

After receiving his code I had to make some modifications, such as hiding the div elements instead of hiding the body as it worked better. 



Problem I faced:
transform: scaleX(-1); Even though this command works across all browsers, on some samsung devices it was not functioning however on an Iphone device it is.#   m y w e b s i t e  
 