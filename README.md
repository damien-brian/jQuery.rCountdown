# JQuery RCountdown plugin

  This is a very simple plugin which display a countdown everywhere on you're webpage.

## Usage

  In the body of your HTML page, where you want to add the countdown, just add:

  ```html
<span data-time='TIME'></span>
  ```
  
  where time is the timestamp you want to reach. For example, "1349180158".

Next, in your JS file, add

  ```js
  $(YOURTAG).countdown(
                       {
                         callback:function()
                         {
                           // JS Code to execute when countdown is over
                         }
                      );
  ```
