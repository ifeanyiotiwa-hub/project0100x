# PROJECT0100X
[Link To Project](http://htmlpreview.github.io/?https://github.com/ifeanyiotiwa-hub/project0100x/index.html)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
## AUTHOR INFORMATION
- NAME: Ifeanyichukwu Otiwa
- [Github](https://github.com/ifeanyiotiwa-hub)
- [FreeCodeCamp](https://www.freecodecamp.org/istar007)
## PROJECT Description
For this week's I will be  building a web application that takes a user's birthday and calculates the day of the week they were born and then depending on their gender outputs their **Akan Name**. 

**Akan names** are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a _'day name'_ which corresponds to the day in the week they were born. 

### Here are Ghanian day names.

#### Male
```
{ 
    Sunday: Kwasi

    Monday: Kwadwo

    Tuesday: Kwabena

    Wednesday: Kwaku

    Thursday:  Yaw

    Friday: Kofi

    Saturday: Kwame

    Female
    Sunday: Akosua

    Monday: Adwoa

    Tuesday: Abenaa

    Wednesday: Akua

    Thursday:  Yaa

    Friday: Afua

    Saturday: Ama
}
```

Most people do know when their birthdays are, but some might not know what day of the week they were born. Luckily for us, there are ways to calculate the day of the week from a specific date. The following is one of the many methods that exist for that;

### Day of the week  (d)

``` 

(d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

```

 where;

 **CC** - *is the century digits. For example 1989 has CC = 19*

 **YY** - *is the Year digits (1989 has YY = 89)*

 **MM** -  *is the Month*

 **DD** - *is the Day of the month* 

 **mod** - *is the modulus function ( % )*

## USER STORY
 
 -> **As a user, I would like to**;

- See a  small description of what the application does on the landing page.
- Enter my birthday through a form 
- Choose what gender I am.
- Click the submit button to see what my Akan name would be

## Requirements 

The application should check whether the date and month entered is valid. if either of them is invalid,  the user should be alerted and asked to enter a valid one. For example:
        An invalid day should be (d<=0) or (d>31)

        An invalid month should be (m<= 0) or (m > 12)  

The application should output to the user their Akan name depending on their gender. 
-> For example, if a user is male and the result of the calculation is 0, then the application should match that with Kwasi since Kwasi corresponds to Sunday which has an index 0. Hence the output the user will see should be something like **“Your Akan name is Kwasi”**
