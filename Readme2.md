Note: JSX is pass to the Babel which converts it into equivalent javascript.
writing jsx doesnt make anything show up in browser automatically
This creates instruction for react telling it to make an element
we have to return it from a component for react to use it.

#converting html to jsx rules:

1) all props names follows camelCase
```html
<input maxlength="5"/> => <input maxLength={5}/> 
<form autocapitalize novalidate/> => <form autoCapitalize noValidate>
```
 
2) number attribute uses curly braces
```html 
<input maxlength="5"/> => <input maxLength={5}/>
```

3) Boolean true can be written with just the prop name. flase should be written with curly braces.
```html 
<input spellcheck="true" /> => <input spellCheck/>
<input spellcheck="false" /> => <input spellCheck={false}/> 
```

exception: placeholder will remain same

4) the class attribute is written as className
```html 
<div class="divider"/> => <div className="divider"/>
```

5) In line styles are provided as objects
```html
<a
 style="text-decoration:'none'; padding-top:'5px;'"
 />
=>
 <a
 style={{textDecoration:'none',paddingTop:'5px}}
 /> 
```

### Tenets of react Application
### 1) Component nesting:
===> A component can be shown inside another component. Placing them in eachother
### 2) Component Reusability:
===> Several pieces of code that can be resued
### 3) Component configuration:
===> Would be able to customize component when they are created.
