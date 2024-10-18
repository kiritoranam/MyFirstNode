`React JS Interview Question
Q.1) What are the components ?
Components are independent and reusable bits of code. They serve the same purpose
as JavaScript functions, and return HTML. Components come in
two types, Class components and Function components
Q.2) Difference between functional and class-based component?
Class component Functional component
1. It must have a render() method 1. It doesn’t have a render() method.
2. .React lifecycle methods
(like componentDidMount, etc.) are
used
2. React hooks are there to be as a better
alternative to the traditional React lifecycle
methods.
3. It has more code and hence, is less
readable.
3. It has less code and hence, is more readable.
4. To access props and state we have to
use this keyword in
4. we can access props directly without this.
5. Constructor are used as it needs to
initialize state.
5. Constructors are not used
6. It requires different syntax inside a
class component to implement hooks.
example: constructor(props) {
super(props);
this.state = {name: ‘ ‘}
}
6. Hooks can be easily used in functional
components to make them Stateful.
example: const [name,SetName]=
React.useState(‘ ‘)
Q.3) Class Based component Example?
class Car extends React.Component { //When creating a React component,
the component's name must start with an uppercase letter.
constructor(props) { //If there is a constructor() function in your
component, this function will be called when the component gets initiated.
super(props); //By using super your component has access to all
the functions of the parent component.
this.state = {brand: "Ford"}; //component properties should be kept in
an object called state.
}
render() { //The component also requires a render() method, this
method returns HTML.
return ( //If you don't initialize state and you don't bind
methods, you don't need to implement a constructor for your React
component.
<div>
<h1>My Car</h1>
</div>
);
}
}
export default Car;
Q.4) Function Based Component Example?
function WelcomeMessage(props) {
return <h1>Welcome to the , {props.name}</h1>;
}
or
export const test= () => {
return (
<div>test</div>
)
}
Q.5) Pure component vs Normal component/component?
problem was :- React normal Components render method re-renders component even if we pass
same props and state.So App performance slightly decreases. for Ex.
class Test extends React.Component {
constructor(props){
super(props)
this.state = {count:0,};
}
increment = () => {
this.setState({count:0})
}
render(){
console.log("normal component")
return (
<>
<h1>Normal Component</h1>
{this.state.count}
<button onClick={this.increment}>increment</button>
</>
)
}
}
export default Test
on other hand PureComponent is same like as Normal Component but it only renders component
when there is a difference between current and previous state or props. for Ex.
class Test extends React.PureComponent {
constructor(props){
super(props)
this.state = {count:0,};
}
increment = () => {
this.setState({count:0})
}
render(){
console.log("Pure component")
return (
<>
<h1>Pure Component</h1>
{this.state.count}
<button onClick={this.increment}>increment</button>
</>
)
}
}
export default Test
since if state or props contains complex or nested data it may produce false-negatives.so ,
when to use Pure component :- only use Pure component when you expect to have simple props
and state.
Q.6) State?
State is variables, directly initialized and managed by the component.
State is mutable. Basically it is used to contain data or information about the component.
Q.7) Props?
Props stand for "Properties".
It gives a way to pass data from one component to other components.
Props are immutable so we cannot modify the props from inside the component.
When you need immutable data in the component, you have to add props.
Q.8) Lifecycles?
"In react, each component has a lifecycle which you can monitor and
manipulate during its three main phases.
Mounting, Updating, and Unmounting.
Mounting (constructor, getDerivedStateFromProps, render,
componentDidMount)
Updating (getDerivedStateFromProps, shouldComponentUpdate,
render, getSnapshotBeforeUpdate, componentDidUpdate)
Unmounting (componentWillUnmount)"
Q.9) let, var, const?
var - The scope of the var keyword is the global. It means variables defined inside one block can
be accessed inside another block
Example 1
function test() {
if (true) {
var a = 10;
console.log(a);
}
if (true) {
console.log(a);
}
}
test(); // 10 10
// Example 2 User can re-declare variable using var keyword.
var a = 10
function test (){
var a = 900
console.log(a) // 900
}
test()
console.log(a) // 10
// user can update var variable.
var a = 10
function test (){
a = 9
console.log(a) // 9
}
test()
con
sole.log(a) // 9
let - The scope of a let variable is only block level. It means variables defined inside one block can
not be accessed inside another block.
// Example 1
function test() {
if (true) {
let a = 10;
console.log(a); // 10
}
if (true) {
console.log(a); // reference error a is not defined
}
}
test();
// Example 2: Users cannot re-declare the variable defined with the let
keyword but can update it.
let a = 10;
// It is not allowed
let a = 10;
// It is allowed
a = 10;
const - The scope of a const variable is block scope. It can not be updated and
re-declared.
// Example 1
const a = 10;
function f() {
a = 9
console.log(a) // TypeError:Assignment to constant variable.
}
f();
// Example 2: Users cannot change the properties of the const object, but
they can change the value of properties of the const object.
const a = { prop1: 10, prop2: 9}
// It is allowed
a.prop1 = 3
// It is not allowed
a = {b: 10, prop2: 9}
// Output: Uncaught SyntaxError:Unexpected identifier
"let t = null
typeof t" will be Object.
Q.10) controlled vs uncontrolled components?
Uncontrolled Components: Uncontrolled Components are the components that are not controlled
by the React state and are handled by the DOM (Document Object Model).
So in order to access any value that has been entered we take the help of refs.
Controlled Components: In React, Controlled Components are those in which
form’s data is handled by the component’s state.
when to use - When we don't need to do any validations we can use uncontrolled components.
for ex. if we have two input name and password and we dont need any type of validation for those
feilds we can use uncontrolled component.
refrence - https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/
Q.11) undefined vs null?
In JavaScript, undefined is a type, whereas null an object.
undefinde - "It means a variable declared, but no value has been assigned to variable.
var demo;
alert(demo); //shows undefined
alert(typeof demo); //shows undefined
null - null in JavaScript is an assignment value. we can assign it to a variable.
var demo = null;
alert(demo); //shows null
alert(typeof demo); //shows object
console.log(null==undefined) // true
console.log(null===undefined) //false
Q.12) JSX?
JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to
write and add HTML in React. Browsers can only read JavaScript objects but JSX in not a regular
JavaScript object. So to enable a browser to read JSX, first, we need to transform JSX file into a
JavaScript object using JSX transformers like Babel and then pass it to the browser."
jsx syntax example -
const element = <h1>Hello, world!</h1>;
Q.13) What is React?
React is a front-end JavaScript library developed by Facebook in 2011.that had its official release
in 2013.It follows the component based approach which helps in building reusable UI
components.
Advantage of ReactJS -
1.) Creating Dynamic Web Applications Becomes Easier -
To create a dynamic web application specifically with HTML strings was tricky because it requires
a complex coding,but React JS solved that issue and makes it easier.
2.) Reusable Components -
A ReactJS web application is made up of multiple components, and each component has its own
logic and controls.These components are responsible for outputting a small, reusable piece of
HTML code which can be reused wherever you need them.
3.) Performance Enhancement -
ReactJS improves performance due to virtual DOM.
Most of the developers faced the problem when the DOM was updated, which slowed down the
performance of the application.
ReactJS solved this problem by introducing virtual DOM.
Disadvantage of ReactJS -
1.)The high pace of development:-
The high pace of development results in the continuous and fast environment changes so fast,
which makes it hard to adopt all the.
2)Poor Documentation:-
With a fast update and fast acceleration, proper documentation is not easy to make.
3) React uses JSX. JSX allows you to use a mixture of HTML and JavaScript to write code in
components. This is an entirely new concept that many developers are not familiar with.
4) Does Not Support SEO.
Q.14) Virtual Dom?
D - Html Document
O - elements/tag like h1,head,body etc.
M - Complete Model
Virtual DOM is nothing but a strategy that React uses to optimize the performance of an
application.It provides a mechanism that compares two render trees to know what exactly has
changed and only updates what is necessary on the actual DOM.By comparing the new virtual
DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed.
This process is called “diffing.”
Q.15) Virtual Dom vs Real Dom?
Real Dom - 1.) There is too much memory wastage.
2.) It updates Slow.
3.) It updates Whole DOM
Virtual Dom - 1.) No memory wastage.
2.) It updates fast.
3.) it updates specific element.
Q.16) Use of promises?
"Promises are used to handle asynchronous operations in JavaScript. They are easy to manage
when dealing with multiple asynchronous operations where callbacks can create callback hell
leading to unmanageable code
(fulfilled, rejected, pending, settled)
A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
Benefits of Promises
1. Improves Code Readability.
2. Better handling of asynchronous operations.
4. Better Error Handling.
// Example
const pobj1 = new Promise((resolve,reject) =>{
setTimeout(()=>{
let roll_no = [1,2,3,4,5] // suppose Api call hue
resolve(roll_no) //resolve me kuch bhi pass kr skte he
reject('while calling Api')
},2000)
})
jb bhi promise ka object bnate he to uske pas 2 methods hoti he that is than and catch.
than tb use krte he jb hum resolve ko pass krte he.
pobj1.then((rollno)=>{
console.log(rollno)
}).catch((error) =>{
console.log('error aayi')
})
Q.17)Reverse to String
const test = 'Amit Agrawal'
test.split('').reverse().join('')
Result => "lawargaA timA"
without using built-in methodfunction
reverseString(str) {
var newString = "";
for (var i = str.length - 1; i >= 0; i--) {
newString += str[i];
}
return newString;
}
reverseString('hello');
"(function() {
var a = b = 5;
})();
console.log(b);"
"The code above will output 5 even though it seems as if the variable
was declared within a function and can't be accessed outside of it.
This is because
var a = b = 5;
is interpreted the following way:
var a = b;
b = 5;"
Q.18) DocType?
It informs the web browser about the type and version of HTML used in building the web
document. This helps the browser to handle and load it properly.
Q.19) How we can update any object value without change any other value (You have to update
street value)
const [user, setUser] = useState({
name: 'Gulshan',
lastName: 'singh',
address: {
street: 'plot 515' ,
pin: 43435
},
phone: 'xyz'
})
useEffect(()=>{
setUser({
...user,
address: {
...user.address,
street: 'new value'
}
})
},[])
console.log(name); // undefined
var name = 'Mukul Latiyan';
In the above code we tried to console the variable name which was declared and assigned later
than using it, the compiler gives us undefined which we didn’t expect as we should have got
ReferenceError as we were trying to use name variable even before declaring it.
Q.20)JavaScript Hoisting?
Hoisting in JavaScript is a behavior in which a function or a variable can be used before
declaration. For example,
Variable Hoisting
In terms of variables, keyword var is hoisted and let and const does not allow hoisting.
// Example (Program to display value)
a = 5;
console.log(a);
var a; // 5
In the above example, variable a is used before declaring it.And the program works and displays
the output 5. The program behaves as:
// program to display value
var a;
a = 5;
console.log(a); // 5
If a variable is used with the let or const keyword, that variable is not hoisted.
// Example (Program to display value)
a = 5;
console.log(a);
let a; // error
// Output - Uncaught ReferenceError: Cannot access 'a' before
initialization
Function Hoisting
A function can be called before declaring it.
Example (Program to print the text)
greet();
function greet() {
console.log('Hi, there.');
}
// Output - Hi, there
Q.21) What is hook?
It was difficult to manage our state in class component but React come up with hook
in V16.8 and it does the same work whatever we were doing in class component.
function componenets are very fast. and the code is clean in function component.
If we will compare react hooks with life cycles of class components so
here we have componentDidMount = useEffect with empty dependency array if will call
only once after component load, componentDidUpdate = useEffect with depencdency
array when the depencdency value will change it will call accordingly.
useState, useEffect, useMemo, useContext, useCallback
Q.22) component will unmount using useEffect?
component will unmount means whenever a compoonent is going to be destroy I want to perform
some operations for example Api call and network request all that things I want to cleanup.
we can perform component did mount and component will unmount in single useEffect.
useEffect(()=>{
// code for component did mount
return()=>{
console.log("code for component will unmount")
}},[])
Q.23) Arrow function/Regular function?
"Arrow function is one of the features introduced in the ES6 version of JavaScript.
1) Syntax - both are having different syntax.
// Regular Function
var add = function(x, y) {
return x + y
};
// Arrow Function -
let add = (x, y) => x + y
2) Arguments binding - In regular function, Arguments keywords can be used to access the
arguments of which passed to function -
function regularFunction(a,b) {
console.log(arguments) // {0: 1, 1: 2}
console.log(a,b) // 1,2
}
regularFunction(1,2)
Arrow functions do not have an arguments bindingconst
arrowFunction = (a,b) => {
console.log(arguments) // ReferenceError: arguments is not defined
console.log(a,b) // 1,2
}
arrowFunction(1,2)
3.) new - Regular functions are constructible, they can be called using the new keyword.
function add (x, y) {
console.log(x + y) // 5
}
let sum = new add(2,3);
arrow functions can never be used as constructor functions -
let add = (x, y) => console.log(x + y); // TypeError: add is not a
constructor
const sum = new add(2,4);
4.) Function Hoisting - In regular function, function can hoisting at top.
normalFunc()
function normalFunc() {
return "Normal Function"
}
In arrow function, function get hoisted where you define. So, if you call the function before
initialisation you will get referenceError.
arrowFunc()
const arrowFunc = () => {
return "Arrow Function"
}
// ReferenceError: Cannot access 'arrowFunc' before initialization
5.) this keyword -
a) Regular Function => We can use this keyword in regular function and we can access all the
variables and functions using this.
let testObject = {
a: 5,
regularFunc() {
console.log(this.a); // 5
console.log(a); // null
},
};
testObject.regularFunc();
b) Arrow Function
we can not use this keyword directly into arrow function because it does not contain its own this.
let testObject = {
a:5,
arrowFunc:()=>{
console.log(this.a)
console.log(a)
}
} testObject.arrowFunc()
output = undefind
So to resolve this issue we need to bind this keyword into this arrow function like below.
a = 5
constructor(){
this.getValueInArrow = this.getValueInArrow.bind.(this)
}
getValueInArrow=()=>{
console.log(this.a)
}
when not to go with arrow function -
1)Object Methods
Let’s say you want to create a method to bind to an object.
const mario = {
lives: 3,
oneUp: () => {
this.lives++;
}
}
In this example, if we call mario.oneUp(), we expect the value of mario.lives to increase from 3 to
4.
However, as currently written, the value of lives will remain unchanged regardless of how many
times oneUp() is invoked.
2.)If we may use arrow functions while declaring promises.
it would be much easier for any user to understand the concept behind them
otherwise by using traditional function syntax concepts like promise.
Q.23) How we can pass data parent to child component?
1. using props, Prop drilling (Whic one is not good habit)
2. We can use create context
3. With the help of redux we can pass data any level of hierarchy" "ex of context.
const UserContext = React.createContext()
const ParentComponent = () => {
return <UserContext.Provider>
<ChildComponent value={'test'}/>
</UserContext.Provider>
}
export default ParentComponent()
export const ChildComponent = () => {
const value = React.useContext(UserContext)
return(<h1>{value }</h1>)
}
Q.24) What is redux & advantages of it?
Redux is state management javascript library, which is used to manage state globally. With the
help of redux we can mange our states easly in each & every component. It is consist of 3 stages-
Store, Action, Reducer
Store that holdes states of application,It is collecton of states.
Action that describes changes in the state of application.
Reducers are the only way to change states in Redux. It is the only place where you can write logic
and calculations.
Thefollowing few thingsshouldnever be performedinsidethereducer−
● API calls & routing logic
Advantages-
Centralized state management system i.e. Store, Performance Optimizations,
Storing long-term data, Time-travel Debugging,
Great supportive community"
Q.25) What are the differences between mapStateToProps() and mapDispatchToProps()?
mapStateToProps() is a function used to provide the store data to your component. On
the other hand, mapDispatchToProps() is used to provide the action   as props to
your component.
The connect() function connects a React component to a Redux store.
Q.26) difference between thunk and saga?
Actually, Both of them are middleware for Redux to deal with asynchronous actions.difference is:-
1.)Thunk allows Promises to deal with them,while Saga uses Generators.
2.)Thunk created by redux creator while saga created by third-party developers.
3.)In thunk, action creator does not return an object, it returns a function while
In the saga, it allows you to send action normally.
Redux Toolkit - Redux Toolkit is used for writing redux code but in a more concise way.
Redux Toolkit (RTK) solves three bigger problems.
1.) No need of Writing too much boilerplate code to dispatch actions and store the data in the
reducer.
2.) No need of doing Extra packages like Redux-Thunk and Redux-Saga for doing asynchronous
actions.
3.) For handling an async task with react-query is sometimes the best option.which is provided by
RTK.
It also provides features like -caching, retrying, etc.
Q.27) Why we need of middlewares in redux?
Redux middleware provides a medium to interact with dispatched action before they
reach the reducer. It makes complex react applications easier by centralizing the application
state. middlewares are used to deal with asynchronous actions in your app.we can create
middlewares by importing applymiddleware function from redux.
Q.26) Async/Await?
The async keyword is used to define an asynchronous function, which returns a AsyncFunction
object. The await keyword is used to pause async function execution until a Promise is
fulfilled, that is resolved or rejected, and to resume execution of the async function after
fulfillment.
// Example -
async function getValues() {
const resp = await fetch("Api End point");
const data = await resp.json();
console.log(data);
}
Q.28) Lazy loading/suspense?
A large React application is usually consist of many components, utility methods, and
third-party libraries. If an effort isn't made to try to load different parts of an application only
when they're needed, a single, large bundle of JavaScript will be shipped to your users as soon
as they load the first page.
For example we have one parent component and parent have multiple component so it will
take time to load if we don't want to load over all page in a single load we can use lazy laoding
suspense provide us fallback callback method in which we can show a loading if child
components are taking time to load.
Q.29) How we can print any boolean value?
We can't directly print any boolean value, we can convert in string and after that can print
var test = true
test.toString()
Q.30) localStorage & sessionStorage & Cookies?
Local Storage - Local Storage is a type of web storage that allows JavaScript to store and access
data right in the browser.but the data is not deleted when the browser is closed.
Local storage is useful for storing data that the user will need to access later, such as offline
data.The data in Local Storage is stored in key/value pairs. The key is like the name of the data,
and the value is like the actual data itself.It allows 10MB of data to be stored.
localStorage.setItem('key', 'value');
localStorage.getItem('key');
Session Storage - Session Storage stores data for the current session.means that the data will be
deleted when the user closes the browser. Session storage is useful for storing data that is
sensitive, such as login credentials.It allows 5MB of data to be stored.
sessionStorage.setItem("name", "tutorialsPoint");
var name = sessionStorage.getItem("name");
Cookies - A cookie is a small piece of data that is stored on the user's computer.
One advantage of cookies over local Storage and session Storage is that they can be set to expire
at a certain time, which makes them a good choice for storing data that should not be persisted
for a long time.The storage capacity is limited to 4KB of data.. Cookies can be removed. using the
following methods: By using cookies. remove().
document.cookie = "name=tutorialsPoint";
The following code sets a cookie with the name "name" and the value "tutorialsPoint".
var user = document.cookie.getItem("name");
Q.31) setInterval & setTimeout?
setTimeout and setInterval are JavaScript timing events. The setTimeout method executes a
function after a delay. setInterval calls a function repeatedly with a delay between each call.
setTimeout(() => {
console.log("tests");
}, 2000);
setInterval(() => {
console.log("test");
},5000);
Q.32) How we can show data child to parent component on component load (The name
should shown on the parent component) ?
export const ParentComponent = () => {
return(<ChildComponent/>)
}
export const ChildComponent = () => {
const name = 'Hello World';
return <h1>Child data</h1>
}
export const ParentComponent = () => {
const [name, setName] = useState('')
return(
<>
{name}
<ChildComponent handleName={(val)=>setName(val)}/>
</>
)
}
export const ChildComponent = (props) => {
const name = 'Hello World';
useEffect(()=>{
props.handleName(name)
},[])
return <h1>Child data</h1>
}
Q.33) use of useMemo?
The useMemo is a hook used in the functional component that returns a memoized value.The
useMemo Hook only runs when one of its dependencies update.This can improve
performance.It's simillar to pure component that one we are using in class component.
Import from => import React, { useMemo } from 'react'
import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';
function App() {
const [counterOne,setCounterOne] = useState(0)
const [counterTwo,setCounterTwo] = useState(0)
const incrementOne = () =>{
setCounterOne(counterOne+1)
}
const incrementTwo = () =>{
setCounterTwo(counterTwo+1)
}
const isEven = useMemo(function multicount(){
console.log(5511,"5511")
let i = 0
while (i<2000000000) i++ // suppose here we are writing code
that may take time to execute
return counterOne % 2 === 0
},[counterOne])
return (
<div>
<button onClick={incrementOne}>counterOne
-{counterOne}</button>
{isEven}
<button onClick={incrementTwo}>counterTwo
-{counterTwo}</button>
</div>
);
}
export default App;
Q.34) Difference between display: none, opacity: 0, visibility hidden?
If we will apply display none property the element will be remove from the dom. and if we will
apply opacity: 0, visibility: hidden the element will be in dom but will not show."
Q.35) Difference between position absolute, fixed?
The element where we have applied position absolute it will be depend to relative element
height.and fixed is opposite it will be depend on the screen resolution.
Q.36) Difference between rest & spread operator ?
spread operator used to expand an array or on object literal.
var arr1 = [1, 2, 3];
var arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6];
The rest operator is used to put the rest of some specific user-supplied values into a JavaScript
array.
function test(a, b, ...c) {
console.log(b, a); // 6 5
}
test(5, 6, 7, 8, 9);
.
Q.37) Difference between fetch & Axios?
1. with Axios we need to add an external library whereas with fetch there is no need for an
external library.
2. In Axios URL in the object of request is optional while Fetch takes the url parameter.
3. in Axios no need of doing data stringify. for fetch data that needs to be stringified.
4. In Axios data property is used and data has an object, fetch supports the property of the body.
Fetch Syantax
// fetch syntax -
async function test(){
let url = "https://jsonplaceholder.typicode.com/posts";
let options = {
method: "POST",
headers: {
Accept: "application/json",
"Content-Type": "application/json",
},
body: JSON.stringify({
name: "value_one",
username: "value_two",
}),
};
let response = await fetch(url, options);
let responseOk = response && response.ok;
if (responseOk) {
let data = await response.json();
console.log(data)
}
}
test()
Axios syntax -
async function test() {
let url =
"https://jsonplaceholder.typicode.com/posts";
let options = {
method: "POST",
url: url,
headers: {
Accept: "application/json",
"Content-Type": "application/json",
},
data: {
title: "value_one2",
body: "description2",
},
};
let response = await axios(options);
let responseOk =
response && response.status === 200 &&
response.statusText === "ok";
if (responseOk) {
let data = await response.data;
}
}
test();
Q.38) difference between == & ===?
(==) it compare the two values and if we are applying (===). it compares two values with
data types.
let a = 0;
let b = false;
console.log(a == b); //true
console.log(a === b); //false
Q. 39) How can we reduce build size?
1. By using code splitting via lazy loading.
2. We can use svg images and icons instead of heavy images.
3. Avoid importing the whole library when it’s not needed".
Q. 40) Object destructing -
it is a javascript expression that makes it possible to unpack values from arrays.
const test = {
name :"Amit",
age : 25,
profession: "software developer"
}
let {name, age, profession} = test // we have to give the same keys
otherwise we will get undefined.
console.log(name,age,profession) // amit, 25, software developer
// if we want only particular value than -
let { age } = test
console.log(age) // 25
// if we want to access with other keys name so we can do likelet
{ name:myName, age:myAge, profession:myProfession } = test
console.log(myName, myAge, myProfession) // amit, 25, software developer
for nested objects - 7
// Example 1
const user = {
name :"Amit",
age : 25,
profession: "software developer",
hobby: {
hobby1 : 'traveling',
hobby2 : 'playing cricket'
}
};
const {age,hobby: {hobby1,hobby2}} = user
console.log(age,hobby1,hobby2) // 25,traveling, playing cricket
// Example - 2
const person = {
name: 'labib',
age: 22,
job: 'web-developer',
frieds: ['ahsik', 'abir', 'alvi', 'hanafi'],
childList: {
firstChild: 'Salman',
secondChild: 'Rafi',
thirdChild: 'Anfi'
}
}
const { frieds: [a, b, c] } = person; //array destructuring from a nested
object
console.log(a, b, c);
//expected output: ahsik abir alvi;
const { childList: { firstChild, secondChild } } = person; //object
destructuring from a nested object
console.log(firstChild, secondChild)
//expected output:Salman Rafi
// Example -3
const user = {
name :"Amit",
age : 25,
profession: "software developer",
hobby: {
hobby1 : 'travelling',
hobby2 : 'playing cricket'
},
otherhobby:{
hobby3:"reading",
hobby4:"watching"
}
};
const {name,otherhobby: {hobby3,hobby4}} = user
console.log(hobby3)
console.log(name) // reading , Amit
array destructuring -
// Example -1
const fruits = ['apple','mango','banana','orange']
const [fruit1,fruit2] = fruits
console.log(fruit1,fruit2) // apple, mango
// suppose if we want to skip mango so -
const [fruit1, ,fruit2] = fruits // blank diya bich me
console.log(fruit1,fruit2) // apple, banana
// Example -2
const groceryList = [
{item:"Apples",price:25,category:"fruits"},
{item:"mangoes",price:35,category:"fruits"},
{item:"tomato",price:15,category:"vege"},
{item:"milk",price:20,category:"misc"},
{item:"bread",price:12,category:"misc"},
{item:"Eggs",price:18,category:"misc"},
]
const [{item}] = groceryList
console.log(item) // Apples
const [,{item}] = groceryList // mangoes
Q. 41) Difference between react and angular.
1. React is a JavaScript library, whereas Angular is a front-end framework.
2. React uses one-way data binding and virtual DOM, whereas Angular uses two-way data binding
and real DOM.
3. React is faster than Angular as it has a smaller bundle size.
4. React follows Model-View-Control architecture.angular follows
component-oriented-architecture.
why we should use react over angular -
The major difference is that React allows one-way data binding while Angular allows two-way
data binding.
The other difference is that Angular uses the browser's DOM, while React uses a virtual DOM.
one way data binding - ReactJS uses one-way data binding. In one-way data binding one of the
following
conditions can be followed: Component to View: Any change in component data would get
reflected in the view.
View to Component: Any change in View would get reflected in the component's data.
*in react two way data binding is also possible, when we sends data from child to parent it is two
way data binding.
==============================================================================
===========================================================
Q.42) why react is single page application(SPA)/internal working of react.
Single Page Application (SPA) is a web application that is designed to be displayed as a single,
static page.
Some examples of single-page applications are: -Gmail -Facebook -Twitter -LinkedIn'
follow - https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
Q.43) what are synthetic events in react why they were intoduced.
The synthetic event is a cross-browser wrapper of the browser's native event.
whenever an event has occurred, react will listen for every event from dom and it will receive that
event and it will wrap that event with native event browser so we can do all the operations as we
do in normal events like preventDefault.
For example - if we have onClick() so suppose this event has different names in different
browsers then we need to create different implementations in different browsers so that will be a
lot of messy so that is the reason this wrapper will register for all the different names for the
same event.
The examples of the synthetic events are onClick(), onBlur() and onChange()
advantages of react synthetic event -
1.)react cross browser functionality.
2.)reuse event objects to improve performance.
Q.44)What is Strict Mode in react js ?
StrictMode is used for highlighting potential problems in an application.if we are using any
deprecated method it will alert us not to use them etc.Strict mode checks are run in development
mode only; they do not impact the production build.
<React.StrictMode>
<div>
<ComponentOne />
<ComponentTwo />
</div>
</React.StrictMode>
Q.45) Difference between default export and named export?
With named exports, one can have multiple named exports per file.
The name of the imported module has to be the same as the name of the exported module.
One can have only one default export per file.The naming of import is completely independent in
default export and we can use any name we like.
named export imported by within curly braces while default export imported by directly.
import test from './DefaultExport'
import {test1, test2} from './NamedExport'
* react is default export from react.
Q.46)What are stateless and stateful components?
A stateful component is a component that holds some state. Stateless components have no state.
Stateless component only renders UI.
Q47.) What is the react fragment why we do use it.
React Fragments allow you to wrap or group multiple elements without adding an extra node to
the DOM. React fragments are an alternative to using unnecessary divs in our code.
This can be useful when rendering multiple child elements/components in a single parent
component.
Q.48) why do we use keys in fragments?
A key is a unique identifier. it is used to identify which items have changed, updated,
or deleted from the Lists. It is useful when we dynamically create components.
To specify a key for a fragment, you'll need to use the standard JSX element syntax; you can't use
the new <></> syntax
Q.49) what is preventDefault().
preventDefault() method cancels the event if it is cancelable, meaning that the default action
that belongs to the event will not occur. For example, this can be useful when: Clicking on a
"Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from
following the URL.page does not reloads.
Q.50) What are forms in React?
Using forms, users can interact with the application and enter the required information whenever
needed.
Form contain certain elements, such as text fields, buttons, checkboxes, radio buttons, etc
Forms are used for many different tasks such as user authentication, searching, filtering, indexing,
etc.
Q.51) what are HOC or Higher order components.why they are used.
A higher-order component (HOC) is an advanced technique in React for reusing component logic.
It is a function that takes a component and returns a new component.
In this one component takes another component. as a props.
Ex - https://www.youtube.com/watch?v=VtSzJn41LgM
import React, { useState } from 'react'
const HigherOrderComponent = () => {
return (
<>
<div>HigherOrderComponent</div>
<HOCCounterRed comp={Counter} />
<HOCCounterGreen comp={Counter} />
<HOCCounterBlue comp={Counter} />
</>
)
}
const HOCCounterRed = (props) => {
return (
<h2 style={{ backgroundColor: 'red', width: 100 }}>Red<props.comp
/></h2>
)
}
const HOCCounterGreen = (props) => {
return (
<h2 style={{ backgroundColor: 'green', width: 100 }}>Green<props.comp
/></h2>
)
}
const HOCCounterBlue = (props) => {
return (
<h2 style={{ backgroundColor: 'blue', width: 100 }}>Blue<props.comp
/></h2>
)
}
const Counter = () => {
const [count, setCount] = useState(0);
return (
<div>
<h3>{count}</h3>
<button onClick={() => setCou nt(count+1)}>Click</button>
</div>
);
}
export default HigherOrderComponent
Q.52) can we create our own hooks.give some senario where we might need to create custom
hook.
Custom React JS hooks are reusable functions that can be used to add special and unique
functionality to the React applications.
A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to
call other hooks.
Q.53) how setState works.
It ensures that the component has been updated and calls for re-rendering of the component.
Q.54) What is Callback functions?
A callback function is a function passed into another function as an argument, which is then
invoked inside the outer function to complete some kind of action.
Need of Callback functions/when to use Callback function - The benefit of using a callback
function is that you can wait for the result of a previous function call and then execute another
function call.
function test(a,b,callback){
let res = a+b
console.log(res)
console.log(res+callback())
}
function testing(){
return 5
}
test(4,5,testing)
output = 9
14
Q.55) is setState synchronous or asynchronous.
it uses in class component.setState is asynchronous.ReactJs sets its state asynchronously
because it can result in an expensive operation.Making it synchronous might leave the browser
unresponsive.
Q.56) is useState async or sync?
it uses in functional component.useState is an asynchronous hook, it will wait for the component
to finish its cycle, re-render, and then it will update the state.
Q.57) is useEffect async or sync?
useEffect is usually the place where data fetching happens in React. Data fetching means
using asynchronous functions, so I am not sure but it should be asynchronous.
Q.58) how to validate props in react.
props can be validate using special property PropTypes, that help to catch bugs by validating data
types of values passed through props.
importPropTypesfrom'prop-types'
functionHelloWorldComponent({name}){
return(
<div>Hello,{name}</div>
)
}
HelloWorldComponent.propTypes={
name:PropTypes.string
}
Ex - https://www.youtube.com/watch?v=nXBj1ugNaJM
Q.59) how can we use useEffect as componentwillunmount.
The only thing that we need to do is to return a function inside the callback function of the
useEffect Hook
useEffect(() => {
// Anything in here is fired on the component mount.
return () => {
// Anything in here is fired on component unmount.
}
}, [])
Q.60) what are different ways to add styling in react components.
https://www.geeksforgeeks.org/8-ways-to-style-react-components/
Q.61) Context Api?
React Context is a way to manage state globally.This is the alternative to "prop drilling" or moving
props from grandparent to child .
if you have big project it contains a lot of components you should be use redux because context
api can't wrappe a lot of components.
const ContextAPIComp = () => {
const [ users, setUsers ] = useState([]);
const dispatchUserEvent = (actionType, payload) => {
switch (actionType) {
case 'ADD_USER':
setUsers([ ...users, payload.newUser ]);
return;
case 'REMOVE_USER':
setUsers(users.filter(user => user.id !==
payload.userId));
return;
default:
return;
}
};
return (
<div className="App">
<AppContext.Provider value={{ users, dispatchUserEvent }}>
<AddUser />
<UserList />
</AppContext.Provider>
</div>
);
}
export default ContextAPIComp;
Q.62) Context API vs Redux?
1. Context api is suitable for small or medium size application while redux is used for large
application.
2. Changes are made with the Context value while Changes are made with reducers in redux.
3. useContext is a hook which is used in context api while Redux is a state management library.
Q.63) current version of react?
it is 18.2.0
Q.64) what is react.memo and why is it used.
React.Memo is a higher order component.When a parent component renders a child
component might un-necessarly render.to optimize this behaviour, we can use
React.memo. React.memo will perform a shallow comparison of the previous and and
new props and re-render child component only if props have changed.
Q.65) React.memo() vs. useMemo()?
1. React. Memo is used to memoize an entire component. While useMemo is used to memoize a
value within a functional component.
2. React.Memo() is a higher order component, while useMemo is a React hook.
Q.66) What is npm in React JS?
NPM (Node Package Manager) is the default package manager for Node.js and is written entirely
in Javascript which comes with NodeJS when you install it.
Q.67) clousers in javacript.
closures are defined as inner functions that have access to variables and parameters of outer
function even after the outer function has returned.
outer function can not access variable of innerfunction.
function outer() {
var outVar = "this is outer function variable";
function inner() {
var inVar = "this is inner function variable";
console.log(outVar);
console.log(inVar);
}
inner();
}
outer();
Q.68) difference between NPM and yarn?
1.npm uses the npm install command to install dependencies. yarn uses the yarn add command
to install dependencies.
2. npm installs dependencies sequentially. yarn installs dependencies in parallel.
3.In npm The version lock file is known as package-lock.json. In yarn The version lock file is
known as yarn.lock.
Q.69) difference between package.json and package-lock.json?
1. Package.json contains basic information about the dependencies while
package-lock.json describes complete details of dependencies.
Q.70) Difference between generator function and normal function ?
1.in the Normal function we use the return keyword to return the values, and in the
generator function, instead of using the return, we use yield to execute our iterator.
2. Normal function we can define using function keyword only while in generator function
we need to use asterisk with function keyword.
function* generator() {
yield 1;
yield 2;
yield 3;
}
let obj = generator();
console.log(obj.next()); //{value: 1, done: false}
console.log(obj.next()); //{value: 2, done: false}
console.log(obj.next()); //{value: 3, done: false}
console.log(obj.next()); //{value: undefined, done: true}
Q.71) What is useCallback ?
The useCallback hook is used when a child component is re-rendering over and over
again without any need.
https://www.youtube.com/watch?v=5zempLONkxM
Q.72)difference between useCallback and usememo.
1. The main difference between useMemo and useCallback hook is, useMemo returns
memoized value and useCallback returns memoised function.
2.useMemo is called using React source code, while useCallback is called by the user.
3. useMemo is a straightforward React hook while useCallback needs to process event data
or custom arguments indicated by the user.
Q.73) What is useReducer hook ?
The useReducer Hook is the better alternative to the useState hook and is generally more
preferred over the useState hook when we have complex state-building logic or when the next
state value depends upon its previous value or when the components are needed to be optimized.
The useReducer hook takes three arguments including reducer, initial state, and the function to
load the initial state lazily
Syntax:- const [state, dispatch] = useReducer(reducer, initialArgs, init);
When should I use useReducer:- If you have a single state either of a boolean , number , or string
use the useState hook. And if you're state is an object or an array, Use the useReducer hook.
import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
if (action.type === "INCREMENT") {
return state + 1;
}
if (action.type === "DECREMENT") {
return state - 1;
}
};
const UseReducer = () => {
const [state, dispatch] = useReducer(reducer, initialState);
return (
<div>
<p>{state}</p>
<div>
<button onClick={() => dispatch({ type: "INCREMENT" })}>
INCREMENT
</button>
<button onClick={() => dispatch({ type: "DECREMENT" })}>
DECREMENT
</button>
</div>
</div>
);
};
export default UseReducer;
Q.74) Difference between Link and useNavigate() ?
Link is JSX element, it replaces replace <a>, so it can navigate between route when it clicked
without refresh the page.
<Link to='/contact'>To Contact Page</Link>
useNavigate is router hook. Same as Link but it can navigate between route programatically,
like onSubmit, it will redirect to another page.it has replaced useHistory. import { useNavigate }
from "react-router-dom";
let navigate = useNavigate();
async function handleSubmit(event) {
event.preventDefault();
await submitForm(event.target);
navigate("/success", { replace: true });
}
return <form onSubmit={handleSubmit}>{/* ... */}</form>;
useNavigate Ex.2)
import {useNavigate} from 'react-router-dom';
function ComponentA(props) {
const navigate = useNavigate();
const toComponentB=()=>{
navigate('/componentB',{state:{id:1,name:'sabaoon'}});
}
return (
<div>
<a onClick={()=>{toComponentB()}}>Component B<a/>
</div>
);
}
export default ComponentA;
Now we will get the data in Component B.
import {useLocation} from 'react-router-dom';
function ComponentB() {
const location = useLocation();
return (
<div>{location.state.name}</div>
)
}
export default ComponentB;
Q.75) React Router v6 what changes and updating guide?
Switch is not exported from react-router-dom - switch component doesn’t exist anymore. Instead,
Switch becomes ‘Routes’. So we need to replace Switch with Routes both in return and also in
react-router-dom import.
Remove Exact - the exact prop is gone, it now always looks for exact matches of the path props.
so, there is no need to using exact props in Route component with v.6.If we want that old exact
prop behavior of matching the start of path only, we can still get that by adding /* after the path.
<Route path='/products/*' element={<Products/>} />
Remove useHistory
Q.76) Difference Between useSelector and useDispatch?
useSelector and useDispatch use as alternatives to the existing connect() function that we uses in
class component.The equivalent of map state to props is useSelector.It takes in a function
argument that returns the part of the state that you want.The equivalent of map dispatch to
props is useDispatch.
Import from => import {useSelector, useDispatch} from 'react-redux'
Q.77) What is react portals?
React portals is a way to render children into a DOM node that occurs outside the DOM
hierarchy of the parent component.
Syntax- ReactDOM.createPoratl(children,DonMode).
https://www.youtube.com/watch?v=uMfsinH1wY4.
Q.78) how you can handle error in react?
When you are writing a react application you have two ways to handling errors: ● Using try/catch block in each component ● Using React Error Boundary which is only available in class Component
import * as React from 'react'
import ReactDOM from 'react-dom'
function ErrorHandler({error}) {
return (
<div role="alert">
<p>An error occurred:</p>
<pre>{error.message}</pre>
</div>
)
}
function City({name}) {
try {
return <div>Hello, visit {name.toUpperCase()}</div>
} catch (error) {
return <ErrorHandler error={error} />
}
}
function Country({capital}) {
try {
return <div>Hello, visit {capital.toUpperCase()}</div>
} catch (error) {
return <ErrorHandler error={error} />
}
}
function App() {
return (
<div>
<Country />
<City />
</div>
)
}
ReactDOM.render(<App />, document.getElementById('root'))
Q.79) what is best way to handle large data in react js?
One way is using Pagination that allows you to render data in pages as opposed to rendering all
the information at once.
This way, you basically control the amount of data that is shown on the page so you don’t have to
put too much stress on the DOM tree.Another way to render a large amount of data is with infinite
scroll. Infinite scroll involves appending data to the end of the page as you scroll down the list.
When the page initially loads, only a subset of data is loaded. As you scroll down the page, more
data is appended
Q.80) NextJS vs ReactJS
NextJS ReactJS
Next is a framework for react which is built
upon react library.
React is a library, not a framework.
Next is famous for Server-side rendering and
static generation of websites.
React on the other side doesn’t support
Server-side rendering.
Next can be difficult for someone to learn
without prior ReactJS knowledge.
React can be easier to learn as compared to
NextJS.
In NextJs public folder there is no index.html
file as HTML file will be made in nextjs
according to type of need
In reactjs single HTML file index.html is
present in public folder which manages the
whole react app.
The web apps built using NextJS are very fast. The web apps built using ReactJS are slow as
compared to NextJS.
Q.81) How to change port in react js
//package.json file
"scripts": {
"start": "set PORT=3008 && react-scripts start",
},
Q.82) why we do use curly braces while importing from some modules. What is it?
For ex – import {useEffect, useState} from react
Ans is this is nothing but destructuring of properties.
Q.83) when we import react from react so can we change it for example – import r from react.
Yes we can do because this is default exports.
Q.84) why we can not use for loop instead of map while we do something in components.
Jsx is javascript but new notation and not supported in browser so it transplies using babel and
converts into javascript object so because it is an object you can put only values inside it not
statements .So basically if and for this are the statements and map returns a values that is the
reason.
Q,85) what are the higher order functions in javascript.
Filter, map this are the higher order functions.
Q.86) Can we modified array and objects after define by const ?
Yes we can modifie array by using push method but we can not assign in array direcly.
Q.87) useRef and ref?
Ref is used to access dom element or react elements created in the render method. They
are used in cases where we want to change the value of a child component,
without making use of props and all We can create a Ref by the following
methods:
• Using React.createRef()
• Using useRef() hook
Q.88) difference between return and yield?
Return simply returns the value after the function call, and it will not allow you to do anything else
after the return statement. Yield works different. Yield returns a value only once, and the next
time you call the same function it will move on to the next yield statement.
Q.89) what is pure and impure function?
Pure functions return the same output if we use the same input parameters. while, impure
functions give different outputs when we pass the same arguments multiple times.
Ex – pure function:-
function add(x,y){
return x+y
}
console.log(add(5,4))
Ex-Impure Function:-
var a =20
function add(x,y){
return x+y+a
}
console.log(add(5,4))
in above code if a is supposed is state and somehow changes with different values we will
get different values.
Q.90)How you can validate component in react js.
We can validate forms using react hooks form and formik if we are using forms in react
component, and also we can use using proptypes property to validate props inside react
component.
Q.91)What is box modal in css.
The CSS box model is essentially a box that wraps around every HTML element. It consists of:
margins, borders, padding, and the actual content.
Q.92) What are the semantic events.
A semantic element clearly describes its meaning to both the browser and the developer.
Examples of non-semantic elements: <div> and <span> - Tells nothing about its content.
Examples of semantic elements: <form>, <table> , and <article> - Clearly defines its content.
Q.93) What are the block level and inline element.
Ablock-levelelementalwaysstartsonanew line,Aninline elementdoes notstartonanew line.An
inline elementonlytakes up asmuch width asnecessary.
block-levelelements-<div>,<p>,<table>,<main>,<footer>.
Inline-Elements-
<br>,<input>, <button>,<label>,<a>
Q.94) What are the shallow copy and deep copy?
1. Shallow copy: means that only the first level of the object is copied. Deeper levels are
referenced.
2. Deep copy: means that all levels of the object are copied. This is a true copy of the
object.
Shallow copy Ex -
let obj= {
name:"amit"
}
let user = obj
user.name= "virat"
console.log(obj)// {name: 'virat'}
console.log(user)// {name: 'virat'}
in above code we are coping one object to another but in this type of coping reference/memory
would be copy not value means both objects will points same location in memory, that is why it is
replacing name value from amit to virat.
(Note – but in case of variable value will be copy)
Solution is – 1
let obj= {
name:"amit"
}
let user = Object.assign({},obj)
user.name= "virat"
console.log(user)//{ name:'virat'}
console.log(obj)// {name:“ amit” }
Solution is – 2
let obj= {
name:"amit"
}
let user ={...obj}
user.name= "virat"
console.log(user)//{ name:'virat'}
console.log(obj)// {name:“ amit” }
Deep Copy Example -
let obj= {
name:"amit",
address:{
city:"indore",
state: "Mp"
}
}
let user ={...obj}
user.address.city= "mumbai"
console.log(user)// {name:'amit',address:{city:'mumbai',state:'Mp'} }
console.log(obj)// {name:'amit',address:{city:'mumbai',state:'Mp'} }
in above code we have nested object so in case of nested obj … and, object.assign will not work
so for that deep copy comes into picture.to do that.
let obj= {
name:"amit",
address:{
city:"indore",
state: "Mp" }
}
let user =JSON.parse(JSON.stringify(obj))
user.address.city= "mumbai"
console.log(user)// {name:'amit',address:{city:'mumbai',state:'Mp'}}
console.log(obj)// {name:'amit',address:{city:Indore,state:'Mp'}}
Q.95) CSS GRID vs FLEX?
flexbox was designed for layout in one dimension - either a row or a column. Grid was designed
for two-dimensional layout - rows, and columns at the same time.
Q.96) What is the difference between function and method?
A function is a set of instructions or procedures to perform a specific task, and a method
is a set of instructions that are associated with an object.
Q.97) ways to create react project?
1.) npx create-react-app newapp
2.) npm init react-app newapp.
3.) yarn create react-app newapp.
Q.98) difference between client side and server side scripting language?
1.) In Client side web browser receives all script code from server. on server side web
browser receives only data from server.
2.) In client side script is visible on browser we can do inspect and can seen it. But server
side script Is not visible on browser.
3.) Client-side means that the processing takes place on the user's computer. It requires browsers
to run the scripts on the client machine. Server-side means that the processing takes place on a
web server.
Q.99) What is Api and how does it works?
API stands for “Application Programming Interface.” API works as the messenger that delivers
your request to the provider that you're requesting it from and then delivers the response back to
you.
Q.100) difference between put and patch?
1.) Put method is used to modify the complete record while Patch method is used for partial
modifiction/particular record of the record.
2.) Put method can also create supplied entity’s record if not existed in database.Patch only
modify if record exists otherwise returns not found error.
Q.101) HTTP response status code?
1.) Status code 200 – OK .
2.) Status Code 201 – Data created.
3.) Status Code 400 – Bad Request (server can not process the requested data).
4.) Status Code 401 – Unauthorized (theclientmustauthenticateitselftogettherequested
response.)
5.) Status Code 403 – Forbidden (Means you don’t have permission to access- for ex if any form
you want to try to fill but after exceeding date you are trying to reach that form so this form is not
availabe for you but yes privately it may be available.)
6.) Status Code 404 – Not Found (means web page is not available.other reasons for 404 may be
browser may have too much cookies, URL may be wrong, or web page is suffering from too much
data traffic.)
7.) Status Code – 500 (Internal Server Error)
8.) Status Code 503 (serveice unavailable- Theserverisnotreadytohandletherequest.
Q.102) Class Map / Map / new Map?
Map is an alternative of object or an advance object with new features and better performance.
Why we need of alternative of an object- because object having some limitations that’s why Map
is introduced. limitations like –
1.) The key of object is only can be string. But the keys of Map can be string, number, boolean,
object, arrow.
2.) We can use methods with Map like – get, set, size, keys, values, delete, has.
letobj={
name:"amit",
10:"thisisnumber",
true:"thisisboolean"
}
console.log(obj.name)//amit
console.log(obj.10) //error
console.log(obj.true) //thisisBoolean(becauseitwillunderstanditasasting)
But in Map
letdata=newMap([["name","amit"],[10,"thisis10"],[true,"thisistrue"]])
console.log(data.get("name"))//amit
console.log(data.get(10)) //thisis10
console.log(data.get(true)) //thisistrue
2.)
letdata=newMap([["name","amit"],[10,"thisis10"],[true,"thisistrue"]])
data.set("surname","agrawal")
console.log(data.get("name"))//amit
console.log(data.has(10)) //true
console.log(data.keys(true)) //[MapIterator] {'name',10,true}
console.log(data.values(true)) //[MapIterator] {'amit','thisis10','thisistrue'}
Q.103) weakMap in react?
A WeakMap is a collection of key/value pairs whose keys must be objects and values can be of
any data type.The key of WeakMap is weakly referenced. It means that whenever an object is
used as a key for WeakMap, that object can be garbage collected. It can happen when the
reference to that object is lost( i.e. assign that object reference to NULL). And when the object
is no longer in use, Javascript Garbage Collection detects it and frees it from the memory.
Therefore keys of WeakMaps are weakly referenced.
Syntax:
const m= new WeakMap();
//Creatinga WeakMap Object
constm = new WeakMap();
//Addingelementsin it
//Remember, onlyobjectcan
//bea keyin WeakMap
obj1= {}
m.set(obj1,"Object1");
obj2= {}
m.set(obj2,"Object2");
//Use delete()function
m.delete(obj2);
//Usingget()function to get
//specific element inWeakMap
console.log(m.get(obj1));
//Usinghas()function tocheck
//if a particular elementis
//present in WeakMap or not.
console.log(m.has(obj1));
(Garbage collection in javascript performs automatically and it is not visible to
us.The garbage collection take care of memory management in javascript.)
Q.104) Difference between Map and WeakMap?
1.) Thefirstdifferencebetween MapandWeakMapisthatkeysofweakmapmustbeobjects,not
primitivevalues,whilethekeysofMapcanbeanytype.
2.)WeakMap doesnotsupportiterationandmethods keys(), values(), entries(),sothere’ sno
waytogetallkeysorvaluesfromit.ButMapsupportsthismethods.
3.) in Map the object would not be garbage collected.But in WeakMap object can be garbage
collected.
//johnisstoredinsidethemap,
//wecangetitbyusingmap.keys()
letjohn={name:"John" };
letmap=newMap();
map.set(john,"...");
john=null
console.log(map)//Map(1){{name:'John'}=>'...'}
but in weakMap the object can be garbage collected.
letjohn={name:"John" };
letweakMap=newWeakMap();
weakMap.set(john,"...");
john=null;//overwritethereference
//johnisremovedfrommemory!
https://javascript.info/weakmap-weakset
Q.105) What is CORS Error in react js?
In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make
requests to the server deployed at a different domain. As a reference, if the frontend and backend
are at two different domains, we need CORS there.
For example -
you are logged into your bank account or any social media website, then you visit a malicious
website. This malicious website could run some scripts in the background to make API calls to
your banking or social media to get your personal details.
To prevent this, your browser checks if the request to the banking or social media server can be
made from the malicious website and throws the CORS error.
Fix it - Wecan dothisbyinstallinga CORS library(https://www.npmjs.com/package/cors)
andtellingtheserver to expect requestsfromthatparticularport
app.use(cors({
origin:'http://127.0.0.1:3000',
}))
For ex our backend is hosted on 'http://127.0.0.1:3000' so here We are telling here we can get any
request that is coming from this origin.
Q.106) What is Coercion in js?
Coercion refers to the process of automatic conversion of values from one data type to another.
This includes conversion from Number to String, String to Number, Boolean to Number etc.
when different types of operators are applied to the values.
1. Number to String Conversion :- When any string or non-string value is added to
a string, it always converts the non-string value to a string implicitly
varx= 10 + '20';
vary = '20' + 10;
varz= true+'10';
console.log(x);//1020
console.log(y); //2010
console.log(z);//true10
2. Boolean to Number :- When a Boolean is added to a Number, the Boolean
value is converted to a number
varx= true+2;
vary = false+ 2;
console.log(x);//3
console.log(y); //2
Q.107) what is React Element?
Elements are the smallest building blocks of React apps. An element describes what you
want to see on the screen for example const element = <h1>Hello, world</h1>; Unlike
browser DOM elements, React elements are plain objects, and are cheap to create.
.
Q.108) how you can reset the State in redux?
reset the state by dispatching an action to reset the store's state to its initial values. The
process involves creating an action creator function that returns an action with a specific
type, and then passing that action to the Redux store's dispatch method.
Q.109) can we encrypt code of react js ?
Yes,WecanuseobfuscatorsorminifierstoencryptyourReact.jscode,Additionally,wecanusecode
signingtoensurethatyourcode hasn'tbeentamperedwithduringdistribution.
Q.110) How to Encrypt Request Payload in React js?
1.)Toencryptthepayload,we'llneedakey.wecanusealibrarylike crypto-jstogenerateakey.
2.)Beforewe encryptthepayload,we needtoconvertittoastring.wecanusethe JSON.stringify
methodtodothis.
3.)Once wehavethekeyandthepayloadstring,wecanusealibrarylike crypto-js toencryptthe
payload.
Q.111)data types in javascript.
• Primitive data types
• Non-primitive data types
Primitive data types: The predefined data types provided by JavaScript language
are known as primitive data types. Primitive data types are also known as in-built
data types.
Ex – number,string,boolean,null,undefiend
Non-primitive data types: The data types that are derived from primitive data
types of the JavaScript language are known as non-primitive data types. It is also
known as derived data types or reference data types.
Below is a list of Non-primitive data types.
Ex – object, array
Q.112) What is React Router?
React Router is a powerful routing library built on top of React, which helps in adding new screens
and flows to the application. This keeps the URL in sync with data that’s being displayed on the
web page.
Q.113) what is recoinsailtion.
Recoinsailtion is a process that react keep tracking of rendering of node, if it find
a node is different than the previous one than it converts that part from virtual
dom to real dom this process is called recoinsailtion. Recoinsailtion having some
rules – 1. For example it compare two render tree and if It finds some elements
are different than it destroys previous one, and coverts new elements of virtual
dom to real dom.
Q.114) what is conditional rendering.
Conditionalrenderingin React JSistheprocessof rendering differentcontent or
componentsbased on certain conditions. wecan use ternaryoperator instead of if else
condition. The &&(Logical End) operator can alsobe usedfor conditionalrenderingin
React. If thecondition istrue,itwill render the componenttotherightof theoperator. If the
condition isfalse,itwillnotrender anything.
Q.115) Whatisempersand(&)operatorinJs.
Theampersand operator(&)in JavaScript isa bitwiseoperator that performsa bitwiseAND
operation on two values. itcomparesthebinaryrepresentationof the twovaluesbitwise.
const a = 9; // binary representation of 9 is 1001
const b = 14; // binary representation of 14 is 1110
const result = a & b; // bitwise AND operation
console.log(result); // output: 8
Q.116) what is difference between authentication and authorization.
Authentication:Authenticationistheprocessof verifying the identityof a user or system. In
otherwords, it'saboutprovingwhoyou are.
Example: When youloginto your emailaccount,you are askedtoprovideyour email address
andpassword. If theemail addressandpassword match therecords, you areauthenticated
andallowed to accessyour emailaccount.
Authorization: authorization determines their access rights, of user weather the user is
allowed or not to access that particular page or record. it'sabout determiningwhatyou are
allowedtodo.
Example,a website might onlyallow registered usersto accesscertain pagesor features,
while blocking accessforunregisteredusers. Thishelpstoensure that sensitive information
or functionalityisonlyaccessibletothosewhoareauthorizedtouseit."
Q.117) what is difference between error and exception.
Error: An errorisa mistakein the codethatcausestorun codeincorrectly. Errorscan be
causedbysyntax mistakes,logicerrors,ormissing dependencies. Examplesof errors
include missingsemicolons,orcallinga functionthat doesn'texist.
Exception:Anexception,isan errorthatoccursduringruntime. Exceptionsare typically
causedbyunexpectedevents, such asinvaliduser input,network errors,or missingfiles.
Exceptionscanbecaught and handled bytheprogram,allowingit to gracefullyrecover from
errorsandcontinue running.
Insummary,anerrorisamistakeinthecodethatneedstobefixedbeforetheprogramcanrun,while
anexceptionisanerrorthatoccursduringruntimethatcanbecaughtandhandledbythe program.
Q.118) can we apply encryption on userid password that we put inside local or
session storage.
We can use windows method that is window.crypto.subtle and to decrypt we can
use window.crypto.subtle.decrypt available.
Q.119) if the dependency is available inside package.json but still not working
how we can resolve that.
For that we can do :-
1. Check if thedependencyisinstalledornotin our package.json file.
2. If thedependencyisinstalled but still notworking,we can checkfor version conflicts. We
shouldmakesurethat the version of the dependencyweareusingiscompatible with the
versionsof otherdependenciesin ourproject.
3. we can do clear npm cacheusingnpm cache clean --force. Thiswillremoveanycached
data andforcenpmtodownloadthelatest versionof thedependency.
4. we can deletenode_modulesdirectoryfromourprojectandrunnpm install again.
Q.120) WhatisdifferencebetweenGETandPOSTmethods.
1.)In Getmethod onlylimitedamount of data canbesentbecause data issentin header,
while in Postmethod Large amount of datacan be sent becausedata issent inbody.
2.)Getrequest isnotsecurebecausequerystring appendedin URLbar,whilePost methodis
securebecause data isnotexposedinURL bar.
3.)Getcannotbeusedtosend binarydata likeimagesorword documents,whilePostcan be
used to send binarydata.
Q.121) can we use get for post and get both.`