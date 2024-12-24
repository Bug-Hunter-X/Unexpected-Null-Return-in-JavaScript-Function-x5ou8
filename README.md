# Unexpected Null Return in JavaScript Function

This repository demonstrates a common yet subtle bug in JavaScript function involving null checks and return values. The function `foo` is designed to add two numbers, but it unexpectedly returns `null` if either input is `null`. This behavior might not be intuitive or desired in all cases.

## Bug Description

The provided JavaScript code shows a function `foo` that takes two arguments (a and b). If either a or b is null, the function returns null.  This behavior could lead to unexpected results in applications that don't account for this particular null handling.

## Solution

A better solution would be to handle null values more gracefully, possibly by substituting a default value or throwing an error to explicitly signal the unexpected null input.  See `bugSolution.js` for a revised function handling null input more effectively.