# Natsumi Website

>Hello there! I am yxiao66666 and I am the smartest programmer that has ever lived.

 So you might be wondering, who benefits from this repository? What is the repository for? The answer is simple: this repository is for my girlfriend XDXDXD. Now, my question to you is: 
 - What are you doing wasting your time reading this worthless description? 
 - Why don't you go and find an actual partner and stop thinking of these romances with the VTuber on your screen? 

## Code Snippet

Due to the large code size, I will make one reference to the divine intellect I had during the development, and the rest is for you to discover.

```javascript
function bookingValidateTime() {
    var error = document.getElementById("time-error");

    var startingTime = document.getElementById("start-time-id").value;

    var endingTime = document.getElementById("end-time-id").value;

    if (endingTime == startingTime) {
        error.textContent = "End Time Can't be Equal to Start Time"// Changing content and color of content
        error.style.color = "red"
        bookingValidateTimeKey = 0;
    } else if (endingTime - startingTime < 0.5) {
        error.textContent = "End Time Can't be Earlier Than Start Time"// Changing content and color of content
        error.style.color = "red"
        bookingValidateTimeKey = 0;
    } else if (endingTime - startingTime > 3) {
        error.textContent = "Maximum Booking Period is 3 Hours"// Changing content and color of content
        error.style.color = "red"
        validateTimeKey = 0;
    } else {
        error.textContent = ""
        bookingValidateTimeKey = 1;
    }
}
```

In the code snippet above, you can see how I utilised the divine intellect. Obviously, the function checks if the bokking time is valid, and writing such a function was a piece of cake for me as I am a gifted programmer. \
In fact, the god questioned my judgement and he asked me **"yxiao66666, are you worthy to be the man who creates the website for your girlfriend? If you are, you must answer: is this a junk, or is this divine intellect?"** I will leave you with that! Happy coding guys!

## Contacts

[yxiao66666](https://www.linkedin.com/in/yang~xiao/) \
[Selinuntius02](https://www.linkedin.com/in/ryutohisamoto/)
