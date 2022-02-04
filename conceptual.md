### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - package that facilitates client-site routing
  - facilitates a single page application

- What is a single page application?
  - sites that exclusively use client-side routing

- What are some differences between client side and server side routing?
  - client-side routing handles mapping between URL bar and page users sees via browser rather than via server
  - with server-side routing, the server decides what HTML to return based on the URL requested 

- What are two ways of handling redirects with React Router? When would you use each?
  - using a ``` <Redirect> ``` component, useful when you want to redirect a user for going to a URL the shouldnt have gotten to
  - using ```.push``` method on the react ```history``` object 

- What are two different ways to handle page-not-found user experiences using React Router? 
  - using inclusive routing with ```<Switch />``` component, and placing a ```<NotFound />``` component at the end, which will automatically route their if no other routes is match (catch-all method)
  - using ```<Redirect> ``` component to exclusively routes users to a ```<NotFound />``` component

- How do you grab URL parameters from within a component using React Router?
  - ```useParams``` hook 
  - stores info on the URL parameters which you can save to variable

- What is context in React? When would you use it?
  - universal data that can be accessed across your application 
  - useful as an alternative to prop drilling, when data must be accessed by components nested deeply within parent component

- Describe some differences between class-based components and function
  components in React.
  - class-based components do not have access to hooks, and it is much more difficult to share code or logic across components
  - functional components do not have access to certain life-cycle methods such as componentsDidMount and componentDidUpdate

- What are some of the problems that hooks were designed to solve?
  - functional components could not contain state or make use of life-cycle methods 
  - hooks are functions that allowed functional components to now contain state and gave them life-cycle features similar to those in class-based components
  