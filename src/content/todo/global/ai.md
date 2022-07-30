---
title: Artificial Intelligence
last-updated: 2018-11-12
---

I think that it is fair to say that Artificial intelligence is currently just a marketing term, fashionable with the media at present.  
Some neural networks are more advanced than others, deep learning is progressing quickly, but as for truly independent, intelligent machines, not yet.

# Neural Networks

Neural networks on the other hand are very practical and making a huge difference to a great many areas.  
Ultimately neural networks are just data-driven algorithms as opposed to the logic-driven algorithms we typical design in software development.  
Computers can process data far faster than any human and spot patterns even better than we can, this is all about using that capability.  
However, such processing requires extremely large datasets and powerful computing capabilities, the availability of which is the primary reason for such an an upsurge in recent years.

## Examples

There are some real innovations out there, including:

- NLP (natural language processing)  
  audio <-> text  
  This facilites live translation (as seen in star trek) and eventually threatening call centres [Google Duplex](https://ai.googleblog.com/2018/05/duplex-ai-system-for-natural-conversation.html)
- OCR (optical character recognition)  
  image <-> text  
  This is relevant to so many areas, for example turning physical exam papers into machine-readable text for comparison against mark schemes.
- Image recognition  
  A more general form of OCR, e.g [Google Deepmind](https://deepmind.com/)  
  This has now made its way into medicine, noting patterns in x-rays, CAT scans etc that humans simply can't, the future here is very bright.
- Sentiment analysis  
  text -> %  
  Most businesses and governments are interested in how they are perceived, this sort of facility is key to this activity, Azure offers this among others [here](https://azure.microsoft.com/en-gb/services/cognitive-services/text-analytics/)

These all have something in common; they are made possible due to the huge amount of data available for the general case. They are also just functions, given an input, produce an output, typically a value from a defined list (e.g. an alphabet or dictionary or boolean value) plus a confidence interval.  
These are some of the basic building blocks, built on top of some of these are more specific implementations, such as image recognition being used to diagnose cancers from pictures of skin conditions.

## Application of neural networks

To reap the benefits of using such tools, we simply need to combine them in an intelligent way.  
The example I've been pondering is around automated exam marking.  
Starting with:

- a well defined target - a mark scheme made up of a series of questions and an indication of what a "correct" answer looks like.  
  For basic questions this is a pass/fail answer, it is either right or it is wrong.  
  For more complex questions there may be an ideal answer, but there are other valid answers too.
  For some questions, images are valid answers, this complicates things much further, where is the image? What orientation? what size?
- a bucket of input values - attempted answers, various sample sizes, either in physical script form or marked using some on screen testing solution.

## Scenario: Exam mark processing

Let's focus on the simple question case - how would we go about marking a single question?  
0. Scan any physical scripts to get an image of a fixed size (not necessary for on-screen tests)

1. Convert all answers (inputs) into text form.  
   It seems right to use OCR libraries here, there's nothing special about exam answers, they are just written text.  
   This library is likely to return the text and some sort of confidence rating. e.g. if it found 47 characters but was only certain about 38 of them, the meaning of the text could be very [different](http://www.anopticalillusion.com/2012/12/truefalse-ambigram-by-john-langdon/)  
   At this point we should have a consistent incoming dataset, all inputs are effectively a text string.
2. ensure that the confidence level of the answer contents is sufficient, we have to define a benchmark here under which a human must intervene.  
   Exam marking is an area where a very high level of accuracy is expected.
3. We probably want to check at this point that the answer is in the expected language, for which we'd use something like [Azure language detection API](https://azure.microsoft.com/en-gb/services/cognitive-services/text-analytics/)  
   Again, we need to agree what confidence level is sufficient for the business process we're modelling and again we defer to humans where confidence is too low.
4. Now we have a consistent set of equivalent input values.  
   We're ready to compare against the target value (mark scheme answer).

- Simplest case - 1 word/number answer
  1.  Remove whitespace from input ("answer " may have scanned as "an swer" or "ans wer" etc depending on handwriting)
  2.  Compare input against target, ignoring case
  3.  Choose to award the marks for the answer or not
- Slightly more complex case - multiple words in the answer, e.g. target value = "Eiffel Tower"
  1.  whitespace becomes important so we can't just remove it, yet " Ei Ff el Tow er " is obviously still a correct answer but wouldn't match the target.  
      Fair to say we could trim and reduce down to single spaces though - "Ei ff el Tow er" - a bit closer to the target  
      Alternatively perhaps we should remove all whitespace, in which case we're back to case 1, but of course "Pine, Apple" != "Pineapple", so won't always work
  2.  Perhaps we want to extract [key phrases](https://azure.microsoft.com/en-gb/services/cognitive-services/text-analytics/) from the answer?  
      But what if our actual answer couldn't really be considered a phrase?
  3.  What if the first word in the answer is "not", or "anything but" or perhaps the target answer is written like this? Now we need to consider sentiment analysis...  
      Regardless of how we do the comparison, there's likely to be yet another confidence interval to consider before awarding the mark.

5. So now we've established a confidence value whether to award the answer or not, what do we consider to be a suitable confidence level?
   - too low and we automatically award the wrong marks
   - too high and we don't gain the efficiency improvements from automarking because humans had to do too much work

Let's briefly look at some more complex cases:

- essay questions  
  Primarily an extension of the above, but here sentiment analysis becomes far more important.  
  Also what if the candidate just answered both sides of every argument?  
  They still tick all the boxes, but haven't demonstrated knowledge or insight.  
  This is a common use case and the big boys in AI are always working on this.
- angle diagrams/ labels in a mathematics exam  
  A little more niche, but certainly likely that there's an API out there for this purpose.
- hydrocarbons drawn by hand in a chemistry A-level  
  Again, a niche area, but biology and chemistry are getting a lot of attention in the field of AI because nature has fixed rules which we don't totally understand.

### Summary

The important thing here is that in none of these areas would we initially consider creating our own neural network from scratch.  
This is because you need a vast amount of data to properly train a neural network so the more general the problem the easier it is to model.  
Training a neural network effectively means tweaking weightings at nodes across the network using known inputs until you get a high level of confidence that it produces the correct output.  
Once a network has been effectively trained, you should be able to provide an unknown input and obtain an output value and a confidence interval.  
Typically the training requires human involvement to provide or verify the input values.

Exam questions vary over time to avoid candidates just learning to answer a few select questions.  
What this means is that the number of inputs on the majority of exam questions is not that high. If we were to try to train a neural network for that single target value then we'd need examiners to do the training. By the time we'd reached an accuracy level sufficient for marking (high) we'd likely have little work left to do, we've gained nothing for our efforts.

What we would want to gain from using AI is a reduction in the amount of work which humans need to complete, improving both the quality and efficiency of mark processing.  
In order to do this effectively the exam questions would need to be written carefully with the eventual marking process in mind, this is not current working practice.  
This may mean that a multipart answer needs splitting into 2 questions, one with an image and one with a paragraph.  
It could equally mean breaking down an essay into specific questions, mini essays pehaps about a smaller topic.  
On a bigger business scale it probably also means working with external organisations who specialise in more specific neural networks which we can leverage.
