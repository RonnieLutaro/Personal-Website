---
title: 'How To Debug Code Like A Pro'
date: '2021-06-16'
---

One of the most overlooked skills by developers commonly happens to be the ability to find and fix problems. Very often, new developers avoid learning to diagnose problems because non of that stuff is really as exciting as writing new code. Well, the reality is you’ll probably spend more time debugging problems in your code than you will building new applications. In this article, I walk you through 5 simple steps that I go through every time I fix an error. I find this to be one of the most efficient ways I’ve found to make the debugging process much easier and less complicated. Next time you hit a bug or an error, keep these in mind.

## Step 1: Don't Panic

Un fortunately, simple as it may sound, this is the step that most developers usually get wrong. The first thing they’ll probably do usually is go like “Oh No!” and immediately start changing code or immediately start ‘Googling’. Honestly, non of those is really appropriate as yet. How about we start by “take a breath, relax and look at what’s really going on”?. Don’t just jump in and start making changes, understand the code first.

## Step 2: Read The Error Messeges If Any

Sadly, this is another thing that people often skip over. The reality is, these error messages are really here for a reason. Their purpose is to give you valuable information so don’t simply just say, “I got an error!”. Try to understand what the error message is trying to covey to you because that’ll actually tell you a lot about what you need to know. However, if you’re not yet quite sure what that means, don’t just skip over it, continue to think it through and dig in.

## Step 3: Identify The Purpose Of Your Code

Here’s the time to start asking some of those questions;

“What was the original intention of this code?”

“What is the code over here doing?”

“How did I intend this part of the code to behave in the first place?”

“Does this part of the code function the way it was intended to?”

If you know what doesn’t break the code, you’ll very easily know what really breaks the code.

## Step 4: Figure Out What Breaks The Code

You probably know what part of your code is likely to be generating the error or unwanted behavior if you observed Steps 2 and 3 very well. It’s now time to dig in little bit deeper. At this point, you might want to use your IDE’s debugger mode/tools to step through your code using break-points. Here, you can easily observe and keep track of the behavior of your code in action, step by step as a compiler would. That way, you’ll easily identify where the unwanted behavior is stemming from.

Now that you’ve identified the part of the code where that error is, you definitely know what breaks the code.

## Step 5: Try A New Solution

Now that you understand what breaks the code, let’s try out a new solution! For this final step, you may do it multiple times if you don’t get it the first time round. Using knowledge from Steps 3 and 4, you now know both what breaks the code and what doesn’t. Be sure to use that knowledge to test both scenarios and keep them in mind while trying out a new solution. Keep asking those questions along the way;

“What was the original intention of this code?”

“What is it doing now?”

“Does this fix the behavior?”

If the fix didn’t work, you might want to go back to Steps one through five again until you get the fix.